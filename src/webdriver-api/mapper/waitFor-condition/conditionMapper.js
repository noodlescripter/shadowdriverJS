'use strict';

/**
 * This object is designed to map various condition strings for elements into a standardized form.
 */
const conditionMapper = {
    /**
     * A mapping of different element conditions and their variations in string form.
     */
    CONDITION: {
        // Mapping for 'elementIsEnaled'
        elementIsEnabled: ["elementIsEnabled", "enabled", "only when enabled", "enabled", "elementIsEnabled", "enabled", "enabled", "only when enabled", "elementIsClickable", "clickable", "clickable", "clickable", "elementIsClickable", "clickAble", "clickable", "only when clickable"],
        
        // Mapping for 'elementIsClickable'
        //elementIsClickable: ["elementIsClickable", "clickable", "clickable", "clickable", "elementIsClickable", "clickAble", "clickable", "only when clickable"],
        
        // Mapping for 'elementIsVisible'isDisplayed
        elementIsVisible: ["elementIsVisible", "isVisible", "visible", "visible", "elementIsVisible", "isVisible", "visible", "only when visible", "isPresent", "present", "present", "only when present", "isDisplayed", "displayed", "displayed", "displayed", "", "displayed", "displayed", "only when displayed"],
        
        // Mapping for 'elementSelected'
        elementSelected: ["elementSelected", "selected", "selected", "selected", "elementSelected", "selected", "selected", "only when selected"],
        
        // Mapping for 'elementNotEnabled'
        elementNotEnabled: ["elementNotEnabled", "disabled", "disabled", "disabled", "elementNotEnabled", "disabled", "disabled", "only when disabled"],
        
        // Mapping for 'elementIsNotVisible'
        elementIsNotVisible: ["isNotPresent", "not present", "not present", "not present", "isNotPresent", "not present", "not present", "only when not present", "elementIsNotVisible", "isNotVisible", "not visible", "not visible", "elementIsNotVisible", "isNotVisible", "not visible", "only when not visible"],
        
        // Mapping for 'elementNotSelected'
        elementNotSelected: ["elementNotSelected", "not selected", "not selected", "not selected", "elementNotSelected", "not selected", "not selected", "only when not selected"],
    },

    /**
     * Asynchronous function that searches through the CONDITION object to find a matching condition.
     *
     * @param {string} condition - The condition string being checked against the CONDITION object.
     * @returns {string|null} - Returns the key of the matching condition or null if no match is found.
     */
    GET_MATCHING_CONDITION: function (condition) {
        // Log the passed condition for debugging purposes
        //console.log("Condition is______________________________________________________________________________: ", condition);

        // Iterate over each key in the CONDITION object
        for (const conditionKey in this.CONDITION) {
            // Log the type of values and the passed condition for debugging purposes
            //console.log("Type of this is", typeof this.CONDITION[conditionKey]);
            //console.log("passed is this: ", condition);

            const s = this.CONDITION[conditionKey];
            // Check if the current string array includes the passed condition
            if (s.includes(condition)) {
                // Log that a matching condition was found and return the key of the matching condition
                //console.log("Matching condition found");
                //console.log("Matching condition is aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa: ", conditionKey);
                return conditionKey;
            }
        }

        // If no match is found, return null
        return null;
    }
};

// Export the waitForApis object for use in other modules or files.
module.exports = { conditionMapper };
