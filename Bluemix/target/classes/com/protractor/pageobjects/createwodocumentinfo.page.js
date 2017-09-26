'use strict';

var FluentWait = require('../commonjs/fluentwait.js');
var Select = require('../commonjs/select.js');
var wait;
var select;

var CreateWODocumentInfoPage = function () {
	console.log('Create WO Document Info Page Object created');
	wait = new FluentWait();
	select = new Select();
};

CreateWODocumentInfoPage.prototype = Object.create({}, {
    changeStatusTo: { get: function() {
    	return element(by.xpath('//div/div[4]/div/select')); }},

    nextButton: { get: function() {
    	return element(by.xpath('//button[text()=\'Next\']')); }},    	

    clickNextButton: { value: function() { 
       	//wait.fwait(this.changeStatusTo);
       	return this.nextButton.click(); }},
    	
    selectChangeStatusTo: { value: function(text) { 
    	//wait.fwait(this.changeStatusTo);
    	return select.selectByText(this.changeStatusTo, text); }}


});

module.exports = CreateWODocumentInfoPage;