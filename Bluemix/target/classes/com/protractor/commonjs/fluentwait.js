'use strict';
var locator;

var FluentWait = function () {
	console.log('Fluent Wait Object created');
};

FluentWait.prototype = Object.create({}, {
    fwait: { value: function (locator) { 
        browser.sleep(2000);
        return browser.isElementPresent(locator)
        .then(
            function (isPresent) { 
                return browser.isElementPresent(locator); 
            }, 
            function (error) { 
                return false 
            }, 20 * 1000); }}
});

module.exports = FluentWait;