import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import  LoginPage  from '../pages/LoginPage';
import  ProductPage  from '../pages/ProductPage';
import { expect, Page } from "@playwright/test";


setDefaultTimeout(60 * 1000 * 2)

Given('User navigates to sauce demo application', async function () {
    await LoginPage.verifyLoginPage()
    await console.log('user navigated successfully')
})

When('User enter the username as {string}', async function (userName) {
    await LoginPage.enterUserName(userName)
    await console.log('Username inputted');
});
When('User enter the password as {string}', async function (password) {
    await LoginPage.enterPassword(password)
    await console.log('Password inputted')
});

Then('User click on the login button', async function () {
    await LoginPage.clickLoginButton();
    await console.log('Login button clicked')
});

Then('I verify Product page displays', async function () {
    await ProductPage.verifyProductPage();
    await console.log('Product page is displaying.')
});

When('I logout user', async function () {
    await ProductPage.logoutUser()
    await console.log('Logout button clicked')
});

Then('I verify user is successfully logged out', async function () {
    await LoginPage.verifyLoginPage()
    await console.log('User logged out successfully')
});

Then('I verify error message {string} is displayed', async function (msg) {
    await expect( await LoginPage.getErrorMessage()).toContain(msg)
    await console.log('Error message verified')
});

Then('I login with valid username and password', async function (dataTable) {
    const userDetails = dataTable.hashes();
    await LoginPage.loginUser(userDetails[0]['username'],userDetails[0]['password'])
    await console.log('User loggedout successfully')
});


Then('I filter the product with below filter criteria', async function (dataTable) {
    const filters = dataTable.hashes();
    for(let i=0; i< filters.length; i++) {
        await ProductPage.filterBy(filters[i]['filter'])
    }
    await console.log('Product displayed as per the applied filter')
});


