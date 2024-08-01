/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    return (details.filter((detail) => {
        return parseInt(detail.slice(11,13)) > 60
    })).length;
};