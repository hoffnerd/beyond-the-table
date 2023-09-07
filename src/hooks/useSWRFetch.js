"use client";

// React/Next -----------------------------------------------------------------------
// Hooks ----------------------------------------------------------------------------
import useSWR, { useSWRConfig } from 'swr'
// Other ----------------------------------------------------------------------------
import { fetcher, isArray, isObj } from "@/util";



//______________________________________________________________________________________
// ===== Hook =====

/**
 * useSWRFetch is a custom hook that combines the SWR library with fetch requests to handle data fetching, mutations, and caching in React and Next applications.
 * For more information: https://swr.vercel.app/docs/api
 * @param path - string: represents the API endpoint path. It is used to make the API call to fetch data from the server.
 * @param [SWROptions=null] - optional object: contains options for the useSWR hook. For all options: https://swr.vercel.app/docs/api#options
 * @param [SWRMutateOptions=null] - optional object: contains options for the mutate function in SWR. 
 * It allows you to customize the behavior of the mutate function when performing mutations. For all options: https://swr.vercel.app/docs/mutation#parameters
 * @param [options=null] - optional object: options for this custom hook. All options available:
 * - `dataType`: string, this is the type of the data within dataFromAPI, the data we care about and are trying to display. Default is expecting an array, other options are: "object"
 * - `pathCreate`: string, create API endpoint path. If exists, will use this over `pathFallback` and `path` in `createUpdateFetch` function when its parameter `type` is "create". 
 * - `pathUpdate`: string, update API endpoint path. If exists, will use this over `pathFallback` and `path` in `createUpdateFetch` function when its parameter `type` is "update".
 * - `pathDelete`: string, delete API endpoint path. If exists, will use this over `pathFallback` and `path` in `deleteFetch` function.
 * - `pathFallback`: string, fallback API endpoint path. If exists, will use this over `path` in both `createUpdateFetch` and `deleteFetch` functions.
 * - `pathInvalidateAfterMutate`: string, single path to invalidate after a mutate happens
 * - `pathMatchInvalidateAfterMutate`: string, matcher in order to invalidate multiple paths after a mutate happens. For more information: https://swr.vercel.app/docs/mutation#mutate-multiple-items
 * - `runInvalidateOnCreate`: bool, if set to true and either `pathInvalidateAfterMutate` or `pathMatchInvalidateAfterMutate` is set, will run those invalidations on a create mutation. Default is false.
 * - `mutateDataCreateLocation`: string, when in the `mutateData` function, this allows you to change where the object is created. "top" is the only option while "bottom" is default behavior.
 * @returns object with the following properties:
 * - `isLoading`: bool, directly from useSWR
 * - `isValidating`: bool, directly from useSWR
 * - `error`: bool, uses the bool directly from useSWR in combination with the done bool from the api
 * - `message`: string, additional information about the error or success, either from the api or the `mutateOptions` function
 * - `data`: array or object, this is the data we actually care about
 * - `mutate`: function, directly from useSWR
 * - `runMutation`: function, use this function to mutate any data
 */
const useSWRFetch = (path, SWROptions=null, SWRMutateOptions=null, options=null) => {

    //______________________________________________________________________________________
    // ===== Constants =====
    const pathCreate = isObj(options, ["pathCreate"]) ? options.pathCreate : isObj(options, ["pathFallback"]) ? options.pathFallback : path;
    const pathUpdate = isObj(options, ["pathUpdate"]) ? options.pathUpdate : isObj(options, ["pathFallback"]) ? options.pathFallback : path;
    const pathDelete = isObj(options, ["pathDelete"]) ? options.pathDelete : isObj(options, ["pathFallback"]) ? options.pathFallback : path;


    //______________________________________________________________________________________
    // ===== Hooks =====

    /* Global mutate in order to invalidate paths after a regular mutate happens. 
    Only used if either `pathInvalidateAfterMutate` or `pathMatchInvalidateAfterMutate` exists. */
    const { mutate: globalMutate } = useSWRConfig();

    // Use the real SWR hook to make the get api call with the default fetcher and any options if they exist. For more info: https://swr.vercel.app/docs/getting-started
    const { isLoading, isValidating, error, data: dataFromAPI, mutate } = useSWR(`/api/${path}`, fetcher, isObj(SWROptions) ? {...SWROptions}: {});
    


    //______________________________________________________________________________________
    // ===== Fetch Functions =====

    /**
     * Makes a POST or a PUT request to an API endpoint with a payload, and returns the response data if the request is successful.
     * @param type - string: type of call this is, either "create" or "update" will result in a POST or a PUT method respectfully.
     * @param payload - object: the data that you want to send along with the API call.
     * @returns newDataObj - object: data object that was created in the DB, if the API call is successful.
     */
    const createUpdateFetch = async (type, payload) => {
        
        // make a api call to the same path with the post or put method and any data we are sending along
        const response = await fetch(`/api/${type === "update" ? pathUpdate : pathCreate}`, { method: type === "update" ? "PUT" : "POST", body: JSON.stringify(payload) });

        // deconstruct the response as json - this is the exact json when you do with `NextResponse.json` in the route.js files
        const [ done, message, newDataObj ] = await response.json();

        // if something wrong in the api, throw an error saying so
        if(!done) throw { name: "ErrorWithinAPI", message }

        // return the newDataObj
        return newDataObj;
    }

    /**
     * Makes a DELETE request to an API endpoint with a payload, and returns the response data if the request is successful.
     * @param type - string: type of call this is, type must be "delete"
     * @param payload - object: the data that you want to send along with the API call.
     * @returns newDataObj - object: data object that was created in the DB, if the API call is successful.
     */
    const deleteFetch = async (type, payload) => {

        // throw error if type is not delete and if we do not have the id
        if(type !== "delete") throw { name: "InvalidType", message: `The type of "${type}" was given to deleteFetch when type must be "delete".` }
        if(!isObj(payload, ["id"])) throw { name: "PayloadMissing", message: "Payload needs the id of the data object to delete." }
        
        // make a api call to the same path with the post method and any data we are sending along
        const response = await fetch(`/api/${pathDelete}?id=${payload.id}`, { method: "DELETE" });

        // deconstruct the response as json - this is the exact json when you do with `NextResponse.json` in the route.js files
        const [ done, message, newDataObj ] = await response.json();

        // if something wrong in the api, throw an error saying so
        if(!done) throw { name: "ErrorWithinAPI", message }

        // return the newDataObj
        return newDataObj;
    }


    //______________________________________________________________________________________
    // ===== Mutation Fetch Functions Object =====

    /* The `mutationFetches` object is a mapping of mutation types to their corresponding fetch functions. 
    It is used to determine which fetch function to call based on the mutation type specified in the `runMutation` function. 
    In this case, the `create` and `update` mutations both use the `createUpdateFetch` function, while the `delete` mutation uses the `deleteFetch` function. */
    const mutationFetches = {   create: createUpdateFetch,   update: createUpdateFetch,   delete: deleteFetch   };



    //______________________________________________________________________________________
    // ===== Mutation Functions =====

    /**
     * Takes in an array of data and an object, and returns a new array with the object added to the data depending on the options.
     * @param type - string: type of call that will be preformed, results in how we manipulate the data. Is either "create", "update", or "delete".
     * @param data - array || object: the existing data. It is the data that you want to update optimistically.
     * @param dataObj - object: the new data that you want to add, update, or delete to the existing `data` array.
     * @returns newData - array: the mutated data array.
     */
    const mutateData = (type, data, dataObj) => {
        
        // declare a shallow copy of our data so we don't mutate it directly
        let shallowCopyData = null
        if(isObj(options) && options.dataType === "object") shallowCopyData = {...data}
        else shallowCopyData = [ ...data ];

        // decide what type we are and handle accordingly
        if(type === "create"){

            // check for any options that change how data is supposed to be arranged
            if(isObj(options) && options.mutateDataCreateLocation === "top") return [ dataObj, ...data ];
            if(isObj(options) && options.dataType === "object") return { ...dataObj };

            // default create behavior
            return [ ...data, dataObj ];
        }
        else if(type === "update"){
            
            // check for any options that change how data is supposed to be arranged
            if(isObj(options) && options.dataType === "object") return { ...data, ...dataObj };

            // get the current position of this object
            const index = data.findIndex(obj => obj.id === dataObj.id);

            // splice at the current position then replace old data with new data
            shallowCopyData.splice(index, 1, dataObj);
            
            // return the new spliced data
            return shallowCopyData;
        }
        else if(type === "delete"){

            // check for any options that change how data is supposed to be arranged
            if(isObj(options) && options.dataType === "object") return { ...data, ...dataObj, deleted: true };

            // get the current position of this object
            const index = data.findIndex(obj => obj.id === dataObj.id);

            // splice at the current position to delete this object
            shallowCopyData.splice(index, 1);
            
            // return the new spliced data
            return shallowCopyData;
        }


        // return the data if something was missed
        return [ ...data ];
    }

    /**
     * returns an object containing options for the `mutate` function, including optimistic data and cache population.
     * @param type - string: represents the type of mutation being performed. It is used to determine how to mutate the data object.
     * @param dataObj - object: contains the data to be mutated. It is used as an argument in the `mutateData` function.
     * @returns object containing options for the `mutate` function. For more info: https://swr.vercel.app/docs/mutation
     */
    const mutateOptions = (type, dataObj) => {

        // use this custom hooks default options or use what is passed in. This method allows for an easy override of the optimisticData and populateCache behavior.
        const standardMutateOptions = isObj(SWRMutateOptions) ? {...SWRMutateOptions} : { rollbackOnError: true, revalidate: false }

        // return our mutate options
        return {
            optimisticData: (previousDataFromAPI) => {
                // since this is data from our read api, lets deconstruct it to get the data we care about.
                const [done, message, data] = previousDataFromAPI;
                // since it was originally data from our read api, we must return it as such
                return [true, "optimisticData", mutateData(type, data, dataObj)];
            },
            populateCache: (dataObjFromFetch, previousDataFromAPI) => {
                // since this is data from our read api, lets deconstruct it to get the data we care about.
                const [done, message, data] = previousDataFromAPI;
                // since it was originally data from our read api, we must return it as such
                return [true, "populateCache", mutateData(type, data, dataObjFromFetch)];
            },
            ...standardMutateOptions,
        }
    }

   /**
    * takes a type and payload as arguments, and attempts to run a mutation based on the type and payload provided.
    * @param type - string: represents the type of mutation to be performed. It can have one of the following values: "create", "update", or "delete".
    * @param payload - object: contains the data needed for the mutation. It can vary depending on the type of mutation being performed. 
    * The specific structure and content of the payload object will depend on the requirements of your application and the API you are working with.
    * @returns object with the following properties:
    * - `error`: a boolean indicating whether an error occurred during the mutation
    * - `name`: a string representing the name of the error or "Success" if the mutation was successful
    * - `message`: a string providing additional information about the error or success
    * - `dataObj`: an object containing the data returned from the mutation
    */
    const runMutation = async (type, payload) => {

        // make sure we have a valid type
        if(!(type === "create" || type === "update" || type === "delete")) return { error: true, name: "InvalidType", message: "Invalid type given to runMutation." };

        try {
            // run mutation on the useSWR hook data
            const dataObj = await mutate(   mutationFetches[type](type, payload),   mutateOptions(type, payload)   );

            // check if our type is create and runInvalidateOnCreate is true
            const runInvalidateOnCreate = type === "create" && isObj(options, [ "runInvalidateOnCreate" ]);

            // if runInvalidateOnCreate or type isnt create and pathInvalidateAfterMutate exists, run a global mutation to invalidate that paths cache
            if((runInvalidateOnCreate || type !== "create") && isObj(options, [ "pathInvalidateAfterMutate" ])) 
                await globalMutate(`/api/${options.pathInvalidateAfterMutate}`, undefined);

            // if runInvalidateOnCreate or type isnt create and pathMatchInvalidateAfterMutate exists, run a global mutation to invalidate all those paths cache
            if((runInvalidateOnCreate || type !== "create") && isObj(options, [ "pathMatchInvalidateAfterMutate" ])) 
                await globalMutate(key => typeof key === 'string' && key.startsWith(`/api/${options.pathMatchInvalidateAfterMutate}`), undefined);

            // if no errors are triggered, return a success
            return { error: false, name: "Success", message: "Success!", dataObj };
        } catch ({ name, message }) {
            console.error({name, message});
            return { error: true, name, message };
        }
    }
    

    //______________________________________________________________________________________
    // ===== Hook Return =====
    return { 
        isLoading, 
        isValidating, 
        error: error ? error : isArray(dataFromAPI) && !dataFromAPI[0],
        message: isArray(dataFromAPI) ? dataFromAPI[1] : false,
        data: isArray(dataFromAPI) && dataFromAPI[0] ? dataFromAPI[2] : false,
        mutate, 
        runMutation 
    };
}
export default useSWRFetch;