'use strict';

var FluentWait = require('../commonjs/fluentwait.js');
var wait;

var AcceptancePage = function () {
	console.log('Requesting Org Page Object created');
	wait = new FluentWait();
};

AcceptancePage.prototype = Object.create({}, {
    rateExperianceOne: { get: function() {
    	return element(by.xpath('//*[@id=\'acceptance\']/div[2]/div[2]/ul/li[1]/button')); }},

    rateExperianceTwo: { get: function() {
    	return element(by.xpath('//*[@id=\'acceptance\']/div[2]/div[2]/ul/li[2]/button')); }},
        	
    rateExperianceThree: { get: function() {
    	return element(by.xpath('//*[@id=\'acceptance\']/div[2]/div[2]/ul/li[3]/button')); }},
            	
    rateExperianceFour: { get: function() {
    	return element(by.xpath('//*[@id=\'acceptance\']/div[2]/div[2]/ul/li[4]/button')); }},
                	
    rateExperianceFive: { get: function() {
    	return element(by.xpath('//*[@id=\'acceptance\']/div[2]/div[2]/ul/li[5]/button')); }},
    	
    nextButton: { get: function() {
    	return element(by.xpath('//button[text()=\'Next\']')); }},

    submitButton: { get: function() {
    	return element(by.xpath('//button[text()=\'Submit\']')); }},
                        	
    clickSubmitButton: { value: function() { 
       	//wait.fwait(this.changeStatusTo);
       	return this.submitButton.click(); }},
    	
    clickNextButton: { value: function() { 
       	//wait.fwait(this.changeStatusTo);
       	return this.nextButton.click(); }},

    selectRateExperianceOne: { value: function() { 
    	//wait.fwait();
    	return this.rateExperianceOne.click(); }},
    	
    selectRateExperianceTwo: { value: function() { 
    	//wait.fwait();
    	return this.rateExperianceTwo.click(); }},
        	
    selectRateExperianceThree: { value: function() { 
    	//wait.fwait();
    	return this.rateExperianceThree.click(); }},
            	
    selectRateExperianceFour: { value: function() { 
    	//wait.fwait();
    	return this.rateExperianceFour.click(); }},
                	
    selectRateExperianceFive: { value: function() { 
    	//wait.fwait();
        return this.rateExperianceFive.click(); }}
    	
});

module.exports = AcceptancePage;