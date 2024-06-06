/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let map = {};
    let len = cpdomains.length;
    for(let i = 0; i < len; i++) {
        let [count, domain] = cpdomains[i].split(" ");
        let subDomains = domain.split(".");
        while(subDomains.length > 0) {
            map[subDomains.join(".")] = (map[subDomains.join(".")] || 0) + parseInt(count);
            subDomains.shift();
        }
    }
    let res = [];
    for(const key in map) {
        res.push(map[key] + " " + key);
    }
    return res;
};