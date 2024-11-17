/**
 * A higher-order function that wraps an asynchronous function with error handling.
 * This middleware-style function takes another function as an argument and returns
 * a new function that handles errors gracefully using a try-catch block.
 * 
 * @param {Function} fn - The asynchronous function to be wrapped with error handling.
 * @returns {Function} - A new function that executes the original function and handles errors.
 */
function handleError(fn) {
  // Return a new function that will execute the provided function with error handling
  return async function (...args) {
    try {
      // Attempt to execute the original function with the provided arguments
      await fn(...args);
    } catch (handleErrorError) {
      // If an error occurs, rethrow it with a more descriptive error message
      // This allows the error to be caught further up the call stack if needed
      console.error(`${handleErrorError}`)
      throw new Error(handleErrorError);
    }
  };
}

// Export the handleError function so it can be used in other modules
module.exports = { handleError };

// Example Usage:
// const {handleError } = require('./path/to/this/file');
// const safeFunction =handleError(asyncFunction);
// safeFunction(arg1, arg2); // Executes asyncFunction with error handling