'use strict';

var FluentWait = require('../commonjs/fluentwait.js');


var Select = function () {
	var wait = new FluentWait();
};

Select.prototype = Object.create({}, {
	getOptions: { value: function(webElement) {
		return webElement.all(by.tagName('option')); }},
	getSelectedOptions: { value: function(webElement) {
		return webElement.all(by.css('option[selected="selected"]')); }},
	selectByValue: { value: function(webElement, text) {
		return webElement.all(by.css('option[value="' + text + '"]')).click(); }},
	selectByPartialText: { value: function(webElement, text) {
		return webElement.all(by.cssContainingText('option', text)).click(); }},
	selectByText: { value: function(webElement, text) {
		//browser.sleep(4000);
		return webElement.all(by.xpath('option[text()="' + text + '"]')).click(); }}



});

module.exports = Select;