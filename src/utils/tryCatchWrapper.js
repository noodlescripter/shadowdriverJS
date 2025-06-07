/**
 * ShadowDriverJS Utility Module
 * 
 * This module provides utility functions for handling asynchronous operations
 * with error handling. It is designed to simplify the process of working with
 * promises by wrapping them in a try-catch block and returning structured results.
 * 
 * Functions:
 * - tryCatch: Wraps a promise in a try-catch block and returns an object containing
 *   the result or error.
 * - tryCatchWrapper: Wraps an asynchronous function, logs any errors, and rethrows them.
 * 
 * Usage:
 * These utilities are part of the ShadowDriverJS framework and are intended to
 * streamline error handling in asynchronous code.
 */

/**
 * 
 * @param {*} promise 
 * @returns  {Promise<{result: *, error: *}>}
 * 
 */
async function tryCatch(promise) {
    try {
        const result = await promise;
        return { result, error: null };

    } catch (error) {
        return { result: null, error };
    }
}

module.exports = { tryCatch }   