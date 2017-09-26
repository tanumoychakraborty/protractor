'use strict';

var FluentWait = require('../commonjs/fluentwait.js');
var wait;

var LoginPage = function () {
	console.log('Login Page Object created');
	wait = new FluentWait();
};

LoginPage.prototype = Object.create({}, {
    clientLoginLanding: { get: function() {
    	return element(by.xpath('//button[text()=\'CLIENT LOGIN\']')); }},
	userName: { get: function () { 
		return element(by.xpath('//input[@name=\'user\']')); }},
    signInButton: { get: function () { 
    	return element(by.xpath('//app-login//form/div[3]/button')); }},
    password: { get: function () { 
    	return element(by.xpath('//input[@name=\'password\']')); }},
    selectClientLogin: { value: function() { 
    	//wait.fwait(this.clientLoginLanding);
    	this.clientLoginLanding.click(); }},
    typeUserName: { value: function (keys) { 
    	//wait.fwait(this.userName);
    	this.userName.sendKeys(keys); }},
    typePassword: { value: function (keys) { 
    	//wait.fwait(this.password);
    	this.password.sendKeys(keys); }},
    signin: { value: function () { 
    	//wait.fwait(this.signInButton);
    	this.signInButton.click(); }}
});

module.exports = LoginPage;