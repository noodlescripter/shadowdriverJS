const {Key} = require('selenium-webdriver');
var shadowdriver = {
    key: () =>{
        return Key;
    }
}

module.exports = shadowdriver;