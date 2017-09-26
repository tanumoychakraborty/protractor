'use strict';

var LoginPage = require('../../pageobjects/login.page.js');
var EAHomePage = require('../../pageobjects/eahome.page.js');
var WOManagementPage = require('../../pageobjects/womanagement.page.js');
var CreateWODocumentInfoPage = require('../../pageobjects/createwodocumentinfo.page.js');
var Select = require('../../commonjs/select.js');
var RequestingOrgPage = require('../../pageobjects/requestingorg.page.js');
var ServiceOrgPage = require('../../pageobjects/serviceorg.page.js');
var WorkArtifacts = require('../../pageobjects/workartifacts.page.js');
var EstimatesPage = require('../../pageobjects/estimates.page.js');
var Acceptance = require('../../pageobjects/acceptance.page.js');

describe('Login to EA Portal', function() {
	var login;
	var eahome;
	var womanagement;
	var createWODocumentInfo;
	var select;
	var requestingOrgPage;
	var serviceOrgPage;
	var workArtifacts;
	var estimatesPage;
	var acceptance;
	beforeEach(function () {
		browser.ignoreSynchronization = false;
		browser.manage().timeouts().pageLoadTimeout(40000);
		//browser.manage().timeouts().implicitlyWait(25000);
		browser.get('http://eamp-eamanagementportalui.mybluemix.net/#/landing');
		browser.manage().window().maximize();
		login = new LoginPage();
		eahome = new EAHomePage();
		womanagement = new WOManagementPage();
		createWODocumentInfo = new CreateWODocumentInfoPage();
		select = new Select();
		requestingOrgPage = new RequestingOrgPage();
		serviceOrgPage = new ServiceOrgPage();
		workArtifacts = new WorkArtifacts();
		estimatesPage = new EstimatesPage();
		acceptance = new Acceptance();
		//browser.driver.sleep(5000);
    })

    /*afterEach(function () {
        browser.close();
    })	*/
	it('to login to EA portal', function() {
		//browser.ignoreSynchronization = true;
		login.selectClientLogin();
		login.typeUserName('ravi.kant@in.ibm.com');
		login.signin();
		eahome.selectWorkOrderManagemen();
		womanagement.selectCreateWorkOrder();
		//element(by.cssContainingText('option', 'Prop req')).click();
		createWODocumentInfo.selectChangeStatusTo('Prop req');
		createWODocumentInfo.clickNextButton();
		requestingOrgPage.selectGeo('US');
		requestingOrgPage.selectCompany('Nestle');
		requestingOrgPage.selectDivision('Juices');
		requestingOrgPage.clickNextButton();
		serviceOrgPage.selectService('Build Software Components');
		serviceOrgPage.selectServiceLine('SAP App Dev');
		serviceOrgPage.selectTechnologyGroup('ABAP OO');
		serviceOrgPage.selectTechnology('ABAP OO');
		serviceOrgPage.selectDeliveryModel('Factory Waterfall');
		serviceOrgPage.clickNextButton();
		workArtifacts.enterFunctionalSpecification('https://www.google.co.in/');
		workArtifacts.enterTestPlanAndData('https://www.google.co.in/');
		workArtifacts.enterTechSpecification('https://www.google.co.in/');
		workArtifacts.enterQaReport('https://www.google.co.in/');
		workArtifacts.enterCompleteTechnicalUnitTesting('https://www.google.co.in/');
		workArtifacts.clickNextButton();
		estimatesPage.selectBasedOn('CDF');
		estimatesPage.selectBasedSize('Small');
		estimatesPage.clickNextButton();
		acceptance.selectRateExperianceFour();
		acceptance.clickSubmitButton();
		browser.sleep(4000);
		//browser.drive.sleep(4000);
		/*var login_Button = browser.findElement(by.xpath('//inv-share-screen-viewer/div/div/div[2]/div/a'));
		login_Button.click();
		browser.driver.sleep(3000);
		var wom = browser.findElement(by.xpath('//inv-share-screen-viewer/div/div/div[2]/div/a[3]'));
		wom.getText().then(function (text) {
		    console.log(text);
		    browser.driver.sleep(3000);
		});
		wom.click();
		browser.driver.sleep(3000);
		var createwo = browser.findElement(by.xpath('//inv-share-screen-viewer/div/div/div[2]/div/a[2]'));
		createwo.click();
		browser.driver.sleep(3000);
		browser.driver.getTitle().then(function(pageTitle) {
		expect(pageTitle).toEqual('1b');
	});*/
	});
});
