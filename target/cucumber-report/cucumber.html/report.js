$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desktopspage.feature");
formatter.feature({
  "line": 1,
  "name": "Desktops Test",
  "description": "As user I want to verify the product arranged in alphabetical order",
  "id": "desktops-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6425130100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to verify the product arranged in alphabetical order",
  "description": "",
  "id": "desktops-test;user-should-be-able-to-verify-the-product-arranged-in-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover and click on Desktops tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I pass selectMenu method name \"Show AllDesktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select sort by position \"Name (Z - A)\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be able to verify that the product is arranged in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 83458000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTestSteps.iMouseHoverAndClickOnDesktopsTab()"
});
formatter.result({
  "duration": 167961600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllDesktops",
      "offset": 31
    }
  ],
  "location": "HomePageTestSteps.iPassSelectMenuMethodName(String)"
});
formatter.result({
  "duration": 1102675700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z - A)",
      "offset": 27
    }
  ],
  "location": "DesktopsTestSteps.i_select_sort_by_position(String)"
});
formatter.result({
  "duration": 557074600,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsTestSteps.i_should_be_able_to_verify_that_the_product_is_arranged_in_descending_order()"
});
formatter.result({
  "duration": 187460000,
  "status": "passed"
});
formatter.after({
  "duration": 704490200,
  "status": "passed"
});
formatter.uri("homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Top Menu Test",
  "description": "As user I want to navigate to Desktops, LaptopsAndNotebooks and Components menu successfully",
  "id": "top-menu-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5506688900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should be able to navigate to LaptopsAndNotebooks menu successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-navigate-to-laptopsandnotebooks-menu-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@regression"
    },
    {
      "line": 11,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I mouse hover and click on Laptops \u0026 Notebooks tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I pass selectMenu method name \"Show AllLaptops \u0026 Notebooks\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be able to verify Laptops \u0026 Notebooks text",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 24100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTestSteps.iMouseHoverAndClickOnLaptopsNotebooksTab()"
});
formatter.result({
  "duration": 153222900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllLaptops \u0026 Notebooks",
      "offset": 31
    }
  ],
  "location": "HomePageTestSteps.iPassSelectMenuMethodName(String)"
});
formatter.result({
  "duration": 756629000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTestSteps.iShouldBeAbleToVerifyLaptopsNotebooksText()"
});
formatter.result({
  "duration": 28896400,
  "status": "passed"
});
formatter.after({
  "duration": 700080600,
  "status": "passed"
});
formatter.uri("laptopsandnotebookspage.feature");
formatter.feature({
  "line": 1,
  "name": "Laptops and notebooks page",
  "description": "\r\nAs a user I should be able to navigate laptops and notebooks page and place an order successfully",
  "id": "laptops-and-notebooks-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4690647700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should be able to verify that user place order successfully",
  "description": "",
  "id": "laptops-and-notebooks-page;user-should-be-able-to-verify-that-user-place-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@sanity"
    },
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I mouse hover and click on Laptops \u0026 Notebooks tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on \"Show All Laptops \u0026 Notebooks\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select sort by \"Price (High \u003e Low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Select Product \"MacBook\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I verify the productText \"MacBook\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on \"Add To Cart\" button on MacBook page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify the MacBook message \"Success: You have added MacBook to your shopping cart!\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on link “shopping cart” display on MacBook page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify the text \"Shopping Cart\" from MacBook page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I verify the text \"MacBook\" product name",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I change the quantity \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on \"Update\" tab",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I verify the message \"Success: You have modified your shopping cart!\" on MacBook page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify the Total £737.45",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on \"Checkout\" button on MACBook page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verify the text \"checkout\" on MacBook page shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I verify the text \"New Customer\" on MacBook page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on \"Guest Checkout\" radio button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on \"Continue\" tab on MacBook page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter below details in the form",
  "rows": [
    {
      "cells": [
        "John",
        "Smith",
        "john123@gmail.com",
        "056981239",
        "CrossWay",
        "Slough",
        "363641",
        "United Kingdom",
        "Cardiff"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on \"Continue\" Button on checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I add comments about your order into text area",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I check the Terms \u0026 Conditions check box",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I verify the message \"Warning: Payment method required!\" on checkout page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 19800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTestSteps.iMouseHoverAndClickOnLaptopsNotebooksTab()"
});
formatter.result({
  "duration": 153245900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Laptops \u0026 Notebooks",
      "offset": 12
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iClickOn(String)"
});
formatter.result({
  "duration": 760753600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 18
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iSelectSortBy(String)"
});
formatter.result({
  "duration": 510149700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 18
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iSelectProduct(String)"
});
formatter.result({
  "duration": 1411002300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 26
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheProductText(String)"
});
formatter.result({
  "duration": 35419300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 12
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iClickOnButtonOnMacBookPage(String)"
});
formatter.result({
  "duration": 45103700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have added MacBook to your shopping cart!",
      "offset": 30
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheMacBookMessage(String)"
});
formatter.result({
  "duration": 382499200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestPage.iClickOnLinkShoppingCartDisplayOnMacBookPage()"
});
formatter.result({
  "duration": 705951000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 19
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheTextFromMacBookPage(String)"
});
formatter.result({
  "duration": 33288500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 19
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheTextProductName(String)"
});
formatter.result({
  "duration": 24498300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iChangeTheQuantity(String)"
});
formatter.result({
  "duration": 86952000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Update",
      "offset": 12
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iClickOnTab(String)"
});
formatter.result({
  "duration": 717769000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have modified your shopping cart!",
      "offset": 22
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheMessageOnMacBookPage(String)"
});
formatter.result({
  "duration": 22823400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "737",
      "offset": 20
    },
    {
      "val": "45",
      "offset": 24
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheTotal£(int,int)"
});
formatter.result({
  "duration": 37693400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 12
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iClickOnButtonOnMACBookPage(String)"
});
formatter.result({
  "duration": 452878000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "checkout",
      "offset": 19
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheTextOnMacBookPageShoppingCart(String)"
});
formatter.result({
  "duration": 29407700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Customer",
      "offset": 19
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheTextOnMacBookPage(String)"
});
formatter.result({
  "duration": 2037058900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guest Checkout",
      "offset": 12
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iClickOnRadioButton(String)"
});
formatter.result({
  "duration": 39956400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Continue",
      "offset": 12
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iClickOnTabOnMacBookPage(String)"
});
formatter.result({
  "duration": 45077100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestPage.iEnterBelowDetailsInTheForm(DataTable)"
});
formatter.result({
  "duration": 1151107700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Continue",
      "offset": 12
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iClickOnButtonOnCheckoutPage(String)"
});
formatter.result({
  "duration": 2044709900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestPage.iAddCommentsAboutYourOrderIntoTextArea()"
});
formatter.result({
  "duration": 1177566000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestPage.iCheckTheTermsConditionsCheckBox()"
});
formatter.result({
  "duration": 265493900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestPage.iClickOnContinue()"
});
formatter.result({
  "duration": 59452400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Warning: Payment method required!",
      "offset": 22
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheMessageOnCheckoutPage(String)"
});
formatter.result({
  "duration": 332904900,
  "status": "passed"
});
formatter.after({
  "duration": 740983700,
  "status": "passed"
});
formatter.uri("loginpage.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality",
  "description": "As user I want to navigate to login link and verify the login and logout functionality",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5199621500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should be able to login and logout successfully",
  "description": "",
  "id": "login-functionality;user-should-be-able-to-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I pass selectMyAccountOptions method parameter \"Login\" on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter the below details in the form",
  "rows": [
    {
      "cells": [
        "magnussmith123@gmail.com",
        "smith123456"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify text \"My Account\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I pass selectMyAccountOptions method parameter \"Logout\" on my account page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify text \"Account Logout\" from homepage",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on continue button on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 45800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 48
    }
  ],
  "location": "LoginTestPage.iPassSelectMyAccountOptionsMethodParameterOnHomepage(String)"
});
formatter.result({
  "duration": 844340000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iEnterTheBelowDetailsInTheForm(DataTable)"
});
formatter.result({
  "duration": 152746100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnLoginButton()"
});
formatter.result({
  "duration": 757488200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Account",
      "offset": 15
    }
  ],
  "location": "LoginTestPage.iVerifyText(String)"
});
formatter.result({
  "duration": 37176100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 48
    }
  ],
  "location": "LoginTestPage.iPassSelectMyAccountOptionsMethodParameterOnMyAccountPage(String)"
});
formatter.result({
  "duration": 780765600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Logout",
      "offset": 15
    }
  ],
  "location": "LoginTestPage.iVerifyTextFromHomepage(String)"
});
formatter.result({
  "duration": 35992400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnContinueButtonOnHomepage()"
});
formatter.result({
  "duration": 432322200,
  "status": "passed"
});
formatter.after({
  "duration": 706589000,
  "status": "passed"
});
formatter.uri("registerpage.feature");
formatter.feature({
  "line": 1,
  "name": "Registration functionality",
  "description": "As user I want to navigate to register link and verify the registration functionality",
  "id": "registration-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4423727800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to navigate to register page successfully",
  "description": "",
  "id": "registration-functionality;user-should-be-able-to-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I pass selectMyAccountOptions method parameter \"Register\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should be able to verify \"Register Account\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 38200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 48
    }
  ],
  "location": "RegistrationTestPage.i_pass_selectMyAccountOptions_method_parameter(String)"
});
formatter.result({
  "duration": 698329300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register Account",
      "offset": 28
    }
  ],
  "location": "RegistrationTestPage.i_should_be_able_to_verify(String)"
});
formatter.result({
  "duration": 34724700,
  "status": "passed"
});
formatter.after({
  "duration": 679364800,
  "status": "passed"
});
});