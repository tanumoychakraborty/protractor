'use strict';

var FluentWait = require('../commonjs/fluentwait.js');
var Select = require('../commonjs/select.js');
var wait;
var select;

var EstimatesPage = function () {
	console.log('Requesting Org Page Object created');
	wait = new FluentWait();
	select = new Select();
};

EstimatesPage.prototype = Object.create({}, {
    basedOn: { get: function() {
    	return element(by.xpath('//*[@id=\'estimates\']/div/div[1]/div/select')); }},

    devSize: { get: function() {
       	return element(by.xpath('//*[@id=\'estimates\']/div/div[3]/div/select')); }},
        	
    nextButton: { get: function() {
       	return element(by.xpath('//button[text()=\'Next\']')); }},    	

    clickNextButton: { value: function() { 
       	//wait.fwait(this.changeStatusTo);
       	return this.nextButton.click(); }},

    selectBasedOn: { value: function(text) { 
    	//wait.fwait();
    	return select.selectByText(this.basedOn, text); }},
    	
    selectBasedSize: { value: function(text) { 
    	//wait.fwait();
    	return select.selectByText(this.devSize, text); }}

});

module.exports = EstimatesPage;