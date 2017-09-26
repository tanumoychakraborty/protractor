'use strict';

var FluentWait = require('../commonjs/fluentwait.js');

var EAHomePage = function () {
	console.log('EA Home Page Object created');
	var wait = new FluentWait();
};

EAHomePage.prototype = Object.create({}, {
    workOrderManagement: { get: function() {
    	return element(by.xpath('//a[text()=\'work order management\']')); }},


    selectWorkOrderManagemen: { value: function() { 
    	//wait.fwait();
    	return this.workOrderManagement.click(); }}


});

module.exports = EAHomePage;