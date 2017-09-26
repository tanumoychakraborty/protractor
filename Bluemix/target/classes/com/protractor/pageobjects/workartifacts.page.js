'use strict';

var FluentWait = require('../commonjs/fluentwait.js');
var wait;

var WorkArtifacts = function () {
	console.log('Login Page Object created');
	wait = new FluentWait();
};

WorkArtifacts.prototype = Object.create({}, {
    functionalSpecification: { get: function() {
    	return element(by.xpath('//*[@id=\'workartifacts\']/div/div[2]/div/input')); }},
    	
	testPlanAndData: { get: function () { 
		return element(by.xpath('//*[@id=\'workartifacts\']/div/div[3]/div/input')); }},
		
    techSpecification: { get: function () { 
    	return element(by.xpath('//*[@id=\'workartifacts\']/div/div[5]/div/input')); }},
    	
    qaReport: { get: function () { 
    	return element(by.xpath('//*[@id=\'workartifacts\']/div/div[6]/div/input')); }},
    	
    completeTechnicalUnitTesting: { get: function () { 
       	return element(by.xpath('//*[@id=\'workartifacts\']/div/div[7]/div/input')); }},
       	
    nextButton: { get: function() {
       	return element(by.xpath('//button[text()=\'Next\']')); }},    	

    clickNextButton: { value: function() { 
       	//wait.fwait(this.changeStatusTo);
       	return this.nextButton.click(); }},
       	
    enterFunctionalSpecification: { value: function (value) { 
    	//wait.fwait(this.userName);
    	this.functionalSpecification.sendKeys(value); }},
    	
    enterTestPlanAndData: { value: function (value) { 
        //wait.fwait(this.userName);
    	this.testPlanAndData.sendKeys(value); }},
    	
    enterTechSpecification: { value: function (value) { 
       	//wait.fwait(this.userName);
        this.techSpecification.sendKeys(value); }},
        
    enterQaReport: { value: function (value) { 
    	//wait.fwait(this.userName);
    	this.qaReport.sendKeys(value); }},
    	
    enterCompleteTechnicalUnitTesting: { value: function (value) { 
    	//wait.fwait(this.userName);
    	this.completeTechnicalUnitTesting.sendKeys(value); }}
});

module.exports = WorkArtifacts;