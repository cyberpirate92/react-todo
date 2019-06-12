/**
 * Check if localstorage is available and is enabled in the browser
 * @returns {boolean}
 */
export const isLocalStorageEnabled = () => {
    let test = '__test__';
    try {
        window.localStorage.setItem(test, test);
        window.localStorage.removeItem(test);
        return true;
    } catch (e) {
        console.warn('Local storage not available');
        return false;
    }
}

/**
 * Get the value of a key from localstorage
 * @param {string} key 
 * 
 * @returns {object}
 */
export const readFromLocalStorage = (key) => {
    let value = null;
    if (isLocalStorageEnabled() && isNonEmptyString(key)) {
        let stringValue = window.localStorage.getItem(key);
        try {
            let object = JSON.parse(stringValue);
            value = object;
        } catch(e) {
            console.error(e);
        }
    }
    return value;
}

/**
 * Write a value to localstorage
 * @param {string} key 
 * @param {object} value 
 * 
 * @returns {boolean} 
 */
export const writeToLocalStorage = (key, value) => {
    let done = false;
    if (isLocalStorageEnabled() && isNonEmptyString(key) && isObject(value)) {
        try {
            let serializedValue = JSON.stringify(value);
            window.localStorage.setItem(key, serializedValue);
            done = true;
        } catch (e) {
            console.error(e);
        }
    }
    return done;
}

/**
 * Check if given value is a string
 * @param {any} value
 *  
 * @returns {boolean}
 */
export const isString = (value) => {
    return value && typeof value === 'string';
};

/**
 * Check if given value is a non empty string
 * @param {any} value 
 * 
 * @returns {boolean}
 */
export const isNonEmptyString = (value) => {
    return isString(value) && value.trim().length > 0;
}

/**
 * Check if given value is a object
 * @param {any} value 
 * 
 * @returns {boolean}
 */
export const isObject = (value) => {
    return value && typeof value === 'object';
}