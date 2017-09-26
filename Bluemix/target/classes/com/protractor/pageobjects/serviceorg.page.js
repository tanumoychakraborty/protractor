'use strict';

var FluentWait = require('../commonjs/fluentwait.js');
var Select = require('../commonjs/select.js');
var wait;
var select;

var ServiceOrg = function () {
	console.log('Service Org Page Object created');
	wait = new FluentWait();
	select = new Select();
};

ServiceOrg.prototype = Object.create({}, {
    service: { get: function() {
    	return element(by.xpath('//*[@id=\'serviceOrg\']/div[1]/div[2]/div/select')); }},

    serviceLine: { get: function() {
       	return element(by.xpath('//*[@id=\'serviceOrg\']/div[1]/div[3]/div/select')); }},
        	
    technologyGroup: { get: function() {
    	return element(by.xpath('//*[@id=\'serviceOrg\']/div[1]/div[4]/div/select')); }},
    	
    technology: { get: function() {
       	return element(by.xpath('//*[@id=\'serviceOrg\']/div[1]/div[5]/div/select')); }},
       	
    deliveryModel: { get: function() {
       	return element(by.xpath('//*[@id=\'serviceOrg\']/div[2]/div[3]/div/select')); }},
    	
    nextButton: { get: function() {
       	return element(by.xpath('//button[text()=\'Next\']')); }},    	

    clickNextButton: { value: function() { 
       	//wait.fwait(this.changeStatusTo);
       	return this.nextButton.click(); }},

    selectService: { value: function(text) { 
    	//wait.fwait();
    	return select.selectByText(this.service, text); }},
    	
    selectServiceLine: { value: function(text) { 
    	//wait.fwait();
    	return select.selectByText(this.serviceLine, text); }},
        	
    selectTechnologyGroup: { value: function(text) { 
    	//wait.fwait();
    	return select.selectByText(this.technologyGroup, text); }},
    
    selectTechnology: { value: function(text) { 
    	//wait.fwait();
    	return select.selectByText(this.technology, text); }},
            	
    selectDeliveryModel: { value: function(text) { 
    	//wait.fwait();
    	return select.selectByText(this.deliveryModel, text); }}

});

module.exports = ServiceOrg;