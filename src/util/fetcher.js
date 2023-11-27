import { isArray, isObj } from ".";

//______________________________________________________________________________________
// ===== Constants =====

// general error object to simply say something has gone wrong
const generalError = { error:true, message:"Something has gone wrong!" };

// methods that will send the payload as url search params
const methodsSendPayloadAsUrlParams = [ "GET", "DELETE" ];

// methods that will send the payload as a json string in the body
const methodsSendPayloadAsBody = [ "POST", "PUT", "PATCH" ];

// methods that are allowed
const methodsAllowed = [ ...methodsSendPayloadAsUrlParams, ...methodsSendPayloadAsBody ];



//______________________________________________________________________________________
// ===== Create Functions =====

/**
 * Generates an API URL based on the given path and options.
 * @param path - string, represents the endpoint or path of the API URL.
 * @param options - object, represents the different options available in this function, can contain the following properties:
 * - `pathIsApiUrl`: bool, tells us that the path given is supposed to be treated as the full url.
 * @returns string, the URL based on the given `path` and `options`.
 */
const createApiUrl = (path, options) => {

    // just return path if the path given is supposed to be treated as the full url
    if (isObj(options, ["pathIsApiUrl"])) return path;

    // by default assume we want the internal api
    return `/api/${path}`;
}



//______________________________________________________________________________________
// ===== Fetch Functions =====

/**
 * Sends a payload as URL parameters to an API endpoint and returns the response as JSON.
 * @param apiUrl - string, the URL of the API endpoint that you want to send the request to.
 * @param config - object, contains the configuration options for the fetch request. It can include properties such as `method`, `headers`, etc.
 * @param payload - object, contains the data that you want to send to the API. 
 * @returns the JSON response from the fetch call.
 */
const fetchSendPayloadAsUrlParams = async (apiUrl, config, payload) => {

    // if payload exists, then create url search params 
    const urlSearchParams = isObj(payload) ? new URLSearchParams(payload) : "";

    // await a response from a fetch call then return the json
    const response = await fetch(`${apiUrl}${urlSearchParams}`, config);
    return await response.json();
}

/**
 * Sends a payload as URL parameters to an API endpoint and returns the response as JSON.
 * @param apiUrl - string, the URL of the API endpoint that you want to send the request to.
 * @param config - object, contains the configuration options for the fetch request. It can include properties such as `method`, `headers`, etc.
 * @param payload - object, contains the data that you want to send to the API. 
 * @returns the JSON response from the fetch call.
 */
const fetchSendPayloadAsBody = async (apiUrl, config, payload) => {

    // await a response from a fetch call then return the json. If payload exists, then send it stringified as the body
    const response = await fetch(apiUrl, { ...config, body: isObj(payload) ? JSON.stringify(payload) : undefined });
    return await response.json();
}



//______________________________________________________________________________________
// ===== Exported Functions =====

/**
 * Helper function that handles making API requests with different methods and handling errors.
 * @param path - string, represents the endpoint or URL path of the API you want to fetch data from.
 * @param config - object, contains the configuration options for the fetch request. It can include properties such as `method`, `headers`, etc. 
 * Can contain the all of the properties allowed by the fetch options (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options).
 * Listed below are most common fetch options along with any additional properties:
 * - `method`: string, all caps, what method are we using to reach out to the api. Must be "GET", "DELETE", "POST", "PUT", or "PATCH"
 * - `cache`: string, how do we want NextJS to cache this request. Option "force-cache" is default. Option "no-store" will not cache the request. For more info: https://nextjs.org/docs/app/api-reference/functions/fetch#optionscache
 * @param [payload=null] - optional object, represents the data that you want to send along with the request. It can be any valid JSON object or null if you don't want to send any data.
 * @param [options=null] - optional object, contains additional options for fetching. Can contain the following properties:
 * - `pathIsApiUrl`: bool, tells us that the path given is supposed to be treated as the full url.
 * @returns json from an api call or an object containing an error and a message
 */
export const fetcher = async (path, config, payload=null, options=null) => {

    // return early with an error if path is missing and if method is either missing or is not allowed 
    if(!path) return { error:true, message:"The `path` was not given to fetcher.", data:{ path } }
    if(!isObj(config, [ "method" ])) return { error:true, message:"The `config` object was either not given to fetcher or is missing the `method` property.", data:{ config } }
    if(!methodsAllowed.includes(config.method)) return { error:true, message:"The `config` object's `method` property is a not allowed method.", data:{ config, methodsAllowed } }
    
    // create the url for the api we want to hit
    const apiUrl = createApiUrl(path, options);
    
    // enter a try catch block to catch any issues unforeseen between backend and frontend
    try {

        // fetch and send the payload as url params if this is a method that needs that
        if(methodsSendPayloadAsUrlParams.includes(config.method)) return await fetchSendPayloadAsUrlParams(apiUrl, config, payload);
        
        // fetch and send the payload as the config body if this is a method that needs that
        if(methodsSendPayloadAsBody.includes(config.method)) return await fetchSendPayloadAsBody(apiUrl, config, payload);

        // theoretically, this should never be hit due to the check at the start with `methodsAllowed` but it is here just in case
        return { error:true, message:"Somehow the `config` object passed the first check but this error means the `method` property is a not allowed method.", data:{ config, methodsAllowed } }
    } catch(error) {        

        // create an object with all data that the dev has direct control over 
        const data = {path, config, payload, options, apiUrl, methodsAllowed, methodsSendPayloadAsBody, methodsSendPayloadAsUrlParams}

        // log errors, remember if you are using this function in server components, this will log in your terminal
        console.error(data)
        console.error(error)

        // return general error and the data object above
        return { ...generalError, data }
    }
};

/**
 * Parse a response and return the data we want to use. Basically, check that the data exists the way want.
 * If it does exist the way we want it than return it, otherwise return an error for the components to handle.
 * @param response - object, data received from an API call. It should have a `data` property that contains the actual data we want to use.
 * @param expectingDataToBe - string, specifies the type of data you are expecting the `response.data` to be. 
 * It can have one of the following values: "array" or "object"
 * @param [options=null] - optional object, contains additional options for parsing. Can contain the following properties:
 * - `debug`: bool, if true, will console log in places to help solve any issues.
 * - `lengthToCheckFor`: int, additional validation for isArray. The length that the array should be at minimum.
 * - `keysToCheckFor`: array of strings, additional validation for isObj. An array of keys to check for in the object.
 * @returns The function `fetchedResponseParser` returns different values based on the conditions met
 * in the code. Here are the possible return values:
 */
export const fetchedResponseParser = (response, expectingDataToBe, options=null) => {
    
    // console log message and data if we are debugging, remember if you are using this function in server components, this will log in your terminal
    if(isObj(options, [ "debug" ])) console.log("starting `fetchedResponseParser`", { response, expectingDataToBe, options });

    // return early if there is already an error or if we don't have a response or don't have data within the response
    if(response.error) return response;
    if(!isObj(response, ["data"])) return { ...generalError, data: response };

    // console log message if we are debugging
    if(isObj(options, [ "debug" ])) console.log("Passed standard error checks");

    // some options for additional validation for isObj and isArray
    const lengthToCheckFor = isObj(options) && options.lengthToCheckFor ? options.lengthToCheckFor : 0;
    const keysToCheckFor = isObj(options) && options.keysToCheckFor ? options.keysToCheckFor : null;

    // switch on whatever we are expecting `data` within response to be
    switch (expectingDataToBe) {
        case "array": 
            // return response.data if we are expecting an array and data is an array
            if(isArray(response.data, lengthToCheckFor)) return response.data

            // if we are expecting an array and data is not an array, return error and message
            return { error:true, message:"Data from response is not an array!", data:{ response, options } };

        case "object": 
            // return response.data if we are expecting an object and data is an object
            if(isObj(response.data, keysToCheckFor)) return response.data;
            
            // if we are expecting an object and data is not an object, return error and message
            return { error:true, message:"Data from response is not an object!", data:{ response, options } };
        default:
            // console log message if we are debugging
            if(isObj(options, [ "debug" ])) console.log("Did not hit any returns so just returning given response.");

            // nothing was hit so just return response
            return response;
    }
}