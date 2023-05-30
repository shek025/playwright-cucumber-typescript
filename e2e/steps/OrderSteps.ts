import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import  LoginPage  from '../pages/LoginPage';
import  ProductPage  from '../pages/ProductPage';
import { expect, Page } from "@playwright/test";


setDefaultTimeout(60 * 1000 * 2)

Given('I add a product to cart', async function () {
    await LoginPage.verifyLoginPage()
    await console.log('user navigated successfully')
})

