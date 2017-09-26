'use strict';

var FluentWait = require('../commonjs/fluentwait.js');

var WOManagementPage = function () {
	console.log('EA Home Page Object created');
	var wait = new FluentWait();
};

WOManagementPage.prototype = Object.create({}, {
    createWorkOrder: { get: function() {
    	return element(by.xpath('//button[text()=\'Create work order\']')); }},


    selectCreateWorkOrder: { value: function() { 
    	//wait.fwait();
    	return this.createWorkOrder.click(); }}


});

module.exports = WOManagementPage;