'use strict';

var FluentWait = require('../commonjs/fluentwait.js');
var Select = require('../commonjs/select.js');
var wait;
var select;

var RequestingOrgPage = function () {
	console.log('Requesting Org Page Object created');
	wait = new FluentWait();
	select = new Select();
};

RequestingOrgPage.prototype = Object.create({}, {
    geo: { get: function() {
    	return element(by.xpath('//*[@id=\'requestingOrg\']/div[1]/div[2]/div/select')); }},

    company: { get: function() {
       	return element(by.xpath('//*[@id=\'requestingOrg\']/div[1]/div[3]/div/select')); }},
        	
    division: { get: function() {
    	return element(by.xpath('//*[@id=\'requestingOrg\']/div[1]/div[4]/div/select')); }},
    	
    nextButton: { get: function() {
       	return element(by.xpath('//button[text()=\'Next\']')); }},    	

    clickNextButton: { value: function() { 
       	//wait.fwait(this.changeStatusTo);
       	return this.nextButton.click(); }},

    selectGeo: { value: function(text) { 
    	//wait.fwait();
    	return select.selectByValue(this.geo, text); }},
    	
    selectCompany: { value: function(text) { 
    	//wait.fwait();
    	return select.selectByValue(this.company, text); }},
        	
    selectDivision: { value: function(text) { 
    	//wait.fwait();
    	return select.selectByValue(this.division, text); }}


});

module.exports = RequestingOrgPage;