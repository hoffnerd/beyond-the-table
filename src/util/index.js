import Swal from "sweetalert2";

export const capitalizeWord = (word) =>{
    const firstLetter = word.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = word.slice(1);
    return firstLetterCap + remainingLetters
}

export const valueReturnHelper = (value, useIsCheck=null) => {
    if(useIsCheck === "isArray"){
        return isArray(value) ? value : undefined
    }
    if(useIsCheck === "isObj"){
        return isObj(value) ? value : undefined
    }
    return value ? value : undefined;
}

/**
 * The fetcher function is a helper function that makes a fetch request and returns the response as a JSON object.
 * @param args - is a rest parameter that allows the function to accept any number of arguments. In this case, 
 * it is used to pass any number of arguments to the `fetch` function.
 */
export const fetcher = (...args) => fetch(...args).then(res => res.json())

/**
 * Checks if a given value is an array and has a length greater than a specified value.
 * @param array - array, the array that you want to check if it is an array or not.
 * @param [lengthToCheckFor=0] - int, optional parameter that specifies the minimum length that the `array` should 
 * have in order for the function to return `true`. If `lengthToCheckFor` is not provided, it defaults to 0.
 * @returns boolean
 */
export const isArray = (array, lengthToCheckFor = 0) => array && Array.isArray(array) && array.length > lengthToCheckFor;


/**
 * If the object is not null, has at least one property, and is an object, then return true. 
 * If keysToCheckFor is an array, check that the object has those keys, if those keys do not exist in the object then return false;
 * @param obj - The object to check
 * @param [keysToCheckFor=null] - array of strings, each string is a key to check for in the object
 * @param [haveAllKeys=true] - boolean, indicates whether all the keys in the `keysToCheckFor` array should be present in the `obj`. 
 * If `haveAllKeys` is set to `false`, then just one of the keys must be present in the object for the function to return `true`.
 * @returns boolean
 */
export const isObj = (obj, keysToCheckFor=null, haveAllKeys=true) => {
    let isObject = false;
    
    // checking every way that `obj` is indeed an object
    if(obj && obj !== null && Object.keys(obj).length > 0 && typeof obj === 'object' && !isArray(obj)) isObject = true;

    // return early with the isObject bool if isObject is still false OR if keysToCheckFor have not been provided or they are not an array.
    // this ensures that `obj` is in fact an object and `keysToCheckFor` is an array for the code below this return.
    if((!isObject) || (!isArray(keysToCheckFor))) return isObject;

    // start the check for keys by looping over them
    for(let i = 0; i < keysToCheckFor.length; i++){
        const key = keysToCheckFor[i];

        // as long `haveAllKeys` is true (it is by default) AND the key does not exist within the object THEN,
        // set isObject to false and stop the loop as this object does not have a property like it should. 
        if(haveAllKeys && !(key && obj[key])){
            isObject = false;
            break;
        }

        // OTHERWISE, as long `haveAllKeys` is set to false...
        else if(!haveAllKeys){

            // check that the key does exist within the object if so, 
            // set isObject to true and stop the loop as this object has as least one of the properties it should
            if(key && obj[key]){
                isObject = true;
                break;
            } 

            // OTHERWISE, set isObject to false in the event that none of the keys are present on `obj`
            else isObject = false;
        } 
    }

    // return whatever value is in `isObject`
    return isObject;
}

export const extractObj = (obj, keysToExtract, valueIfKeyIsNonExistent=null) => {
    
    // variables
    let returnObj = {}

    // return early with an empty object if `keysToExtract` is not an array
    if(!isArray(keysToExtract)){
        console.error("Error in extractObj: Whatever was passed in as `keysToExtract`, is not an array", {obj, keysToExtract})
        return returnObj;
    }

    // return early with an empty object if `obj` is either not an object or none of the keys within `keysToExtract` exists in this object
    if (!isObj(obj, keysToExtract, false)) {
        console.error("Error in extractObj: Whatever was passed in as `obj`, is either not an object or none of the keys within `keysToExtract` exists in this object.", {obj, keysToExtract});
        return returnObj;
    }

    // extract these keys from the object given, if it doesn't exist, fill with the value given to `valueIfKeyIsNonExistent`
    keysToExtract.forEach(key => returnObj[key] = obj[key] || obj[key] === 0 ? obj[key] : valueIfKeyIsNonExistent );

    // return our new object
    return returnObj;
}

/**
 * Converts an object into an array by pushing the values of the object into a new array.
 * @param obj - object that needs to be converted into an array.
 * @param [onlyNeededKeys=null] - array of strings that is an optional parameter that allows you to specify the keys that you want to include in the 
 * resulting array. If this parameter is provided, only the values corresponding to the specified keys will be included in the resulting array.
 * @returns array that contains the values of the properties of the object passed as an argument.
 */
export const convertObjToArray = (obj, onlyNeededKeys=null) => {
    let returnArray = [];

    /* Checking if the argument passed to the function is an object. If it is not an object, it will log an error message to the console and return an empty array. */
    if(!isObj(obj)){
        console.error("Whatever was passed into convertObjToArray, was not an object.", {passedIn: obj});
        return returnArray;
    }

    /* Checking if the object has any keys. If the array is empty or not an array, it logs an error message to the console and returns an empty array. */
    const objKeys = Object.keys(obj);
    if(!isArray(objKeys)){
        console.error("Keys of object all empty or non-existent", {passedIn: obj, objKeys});
        return returnArray;
    }

    /* Iterates over the keys of the object and pushes the corresponding values of each key into a new array. Essentially, it is converting an object into an array by extracting its values. */
    objKeys.forEach((key) => {
        let shouldPush = true;

        if(isArray(onlyNeededKeys)){
            shouldPush = false;
            for (let i = 0; i < onlyNeededKeys.length; i++) {
                const neededKey = onlyNeededKeys[i];
                if( key === neededKey ){
                    shouldPush = true;
                    break;
                }
            }
        }
        
        if(shouldPush) returnArray.push(obj[key]);
    })

    /* Function return */
    return returnArray;
}


/**
 * Finds an object in an array by a given key, and returns the object if found, or null if not found.
 * @param array - The array to search through
 * @param key - The key to look for
 * @returns the object if found or null if not found
 */
export const findObjInArrayByKey = (array, key, value) => {
    if(isArray(array)){
        const foundObj = array.find(obj => obj[key] === value);
        if(isObj(foundObj)){
            return foundObj;
        } else {
            return null;
        }
    } else {
        return null;
    }
}

/**
 * If the user's role is equal to or higher than the required role, then the user has access.
 * @param userRole - The role of the user that is trying to access the page
 * @param requiredRole - The role that is required to access the route.
 * @returns A boolean value.
 */
export const checkRoleAccessLevel = (session, requiredRole) => {
    const roleMapper = [ "BLOCKED",  "UNAUTHORIZED", "USER", "TESTER", "ADMIN" ] // index = level of access
    const userRole = session && session.user && session.user.role ? session.user.role : "UNAUTHORIZED";
    const userAccessLevel = roleMapper.indexOf(userRole);
    const requiredAccessLevel = roleMapper.indexOf(requiredRole);
    return userAccessLevel >= requiredAccessLevel;
}

/**
 * It fires a sweet alert based on the object passed in, and if the object has a "then" function, it will fire that function after the sweet alert is closed.
 * @param swalObj - the object that contains the parameters for the sweet alert
 * @param [forceStopDefaults=false] - if true, it will not set any default functionality based on the icon/type of alert
 * @param [thenFunction=null] - the function to run after the alert is closed
 * @param [hasThenFunction=false] - if you want to run a function after the alert is closed, set this to true.
 * @param [debug=false] - boolean - if true, will print info to the console.
 */
export const fireSwal = (swalObj, forceStopDefaults = false, thenFunction = null, hasThenFunction = false) => {
    if(swalObj && swalObj.icon ){
        let swalObjToUse = {...swalObj};

        // sets default functionality based on the icon/type of alert
        if(!forceStopDefaults){
            if(swalObjToUse.icon === "success"){
                if(swalObjToUse.toast === undefined || swalObjToUse.toast === null){        swalObjToUse.toast = true; }
                if(swalObjToUse.position === undefined || swalObjToUse.position === null){  swalObjToUse.position = 'top-end'; }
                if(swalObjToUse.timer === undefined || swalObjToUse.timer === null){        swalObjToUse.timer = 5000; }
                if(swalObjToUse.text === undefined || swalObjToUse.text === null){          swalObjToUse.text = 'Success!'; }
                if(swalObjToUse.confirmButtonText === undefined || swalObjToUse.confirmButtonText === null){ swalObjToUse.showConfirmButton = false; }
                if(swalObjToUse.timerProgressBar === undefined || swalObjToUse.timerProgressBar === null){ swalObjToUse.timerProgressBar = true; }
            }
            else if(swalObjToUse.icon === "error"){
                if(swalObjToUse.title === undefined || swalObjToUse.title === null){ swalObjToUse.title = 'Error!'; }
                if(swalObjToUse.confirmButtonText === undefined || swalObjToUse.confirmButtonText === null){ swalObjToUse.confirmButtonText = 'Okay'; }
                if(swalObjToUse.text === undefined || swalObjToUse.text === null){ 
                    swalObjToUse.text = 'Please hit "Okay" and try again.'; 
                } else {
                    swalObjToUse.text = `${swalObjToUse.text} Please hit "Okay" and try again.`; 
                }
            }
        }

        if(swalObjToUse && swalObjToUse.toast){
            const Toast = Swal.mixin({
                ...swalObjToUse,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
              
            Toast.fire(swalObjToUse)
        }
        else{
            Swal.fire(swalObjToUse)
            .then((result) => {
                if(hasThenFunction){ thenFunction(result) }
            })
        }
    }
}


export const getBaseUrl = (short=false) => {
    if(short) return process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_BASE_DOMAIN_SHORT_DEV : process.env.NEXT_PUBLIC_BASE_DOMAIN_SHORT_PROD;
    return process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_BASE_DOMAIN_DEV : process.env.NEXT_PUBLIC_BASE_DOMAIN_PROD;
};

/**
 * Will call the api based on an apiConfig object and will send a payload to the api if need be
 * @param apiConfig - { url: url of the api to call, method: method of the call to the api }
 * @param [payload=null] - This is the data you want to send to the server.
 * @returns The response from the API or a pseudo response if apiConfig is not configured correctly.
 */
export const callAPI = async (apiConfig, payload = null, isFormData = false) => {
    const generalMethodMessage = "Methods POST and PUT, require a payload. Methods GET and DELETE does not require a payload but can have search parameters. Those are the only methods allowed.";
    const baseUrl = getBaseUrl();
    let response = null;
    let message = ""

    // console.log({apiConfig, payload})

    if(isObj(apiConfig, [ "url", "method" ])){
        let fetchOptions = { method: apiConfig.method }
        if(isObj(apiConfig, [ "cache" ])){
            fetchOptions.cache = apiConfig.cache;
        }
        console.log({fetchOptions})


        if(payload && ( apiConfig.method === "POST" || apiConfig.method === "PUT" )){
            response = await fetch(`${baseUrl}api/${apiConfig.url}`, {
                ...fetchOptions,
                body: isFormData ? payload : JSON.stringify(payload)
            });
            return await response.json();
        }
        else if(apiConfig.method === "GET" || apiConfig.method === "DELETE"){
            response = await fetch(`${baseUrl}api/${apiConfig.url}`, fetchOptions);
            return await response.json();
        }
        else{
            message = `Check apiConfig you are passing in! ${generalMethodMessage}`;
            response = { done: false, statusText: message, message, apiConfig, payload };
        }
    }
    else{
        message = `Missing apiConfig! ${generalMethodMessage}`;
        response = { done: false, statusText: message, message, apiConfig, payload };
    }
    return response;
};


/**
 * It takes an object with keys that are the column sizes and values that are the column widths, and
 * returns a string of classes that can be used in a Bootstrap grid.
 * @param columnSizes - {xs: 12, sm: 6, md: 4, lg: 3, xl: 2}
 * @returns A string of classes.
 */
export const handleColumnSizes = (columnSizes, evenlyDistribute = true) => {
    let classes = "";
    let count = 0;
    if(isObj(columnSizes)){
        const columnSizeKeys = Object.keys(columnSizes);
        if(isArray(columnSizeKeys)){
            columnSizeKeys.forEach((columnSizeKey) => {
                if(columnSizeKey === "col"){
                    classes = classes + `col-${columnSizes[columnSizeKey]} `;
                } else {
                    classes = classes + `col-${columnSizeKey}-${columnSizes[columnSizeKey]} `;
                }
                count++;
            });
        }
    }

    if(count > 0){ return classes; }

    if(evenlyDistribute){ return "col-sm"; }
    
    return "col-sm-12";
}


export const makeArrayOfDataStructures = (dataStructure) => {
    let arrayOfDataStructures = [];
    dataStructure.forEach(dataStructureObj => {
        if(isArray(dataStructureObj.dataStructure)){
            const madeArrayOfDataStructures = makeArrayOfDataStructures(dataStructureObj.dataStructure);

            if(isArray(madeArrayOfDataStructures)){
                arrayOfDataStructures = [ dataStructureObj.dataStructure, ...makeArrayOfDataStructures(dataStructureObj.dataStructure) ];
            } else {
                arrayOfDataStructures = [ dataStructureObj.dataStructure ];
            }
        }
    });
    return arrayOfDataStructures;
}
