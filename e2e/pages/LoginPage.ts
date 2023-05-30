import { expect, Page } from "@playwright/test";
import { page } from '../support/hooks';



export default class LoginPage {

    static Elements = {
        username: '#user-name',
        password: '#password',
        loginBtn: 'Login',
        errorMessage: '//div[@class="error-message-container error"]//h3'
    }

    static async verifyLoginPage() {
        await page.goto('https://www.saucedemo.com/');
        await expect(await page.getByText('Swag Labs')).toBeVisible();
    }

    static async enterUserName(user: string) {
        await page.locator(LoginPage.Elements.username).fill(user);
    }
    static async enterPassword(pwd: string) {
        await page.locator(LoginPage.Elements.password).fill(pwd);
    }

    static async clickLoginButton() {
        await page.getByText(LoginPage.Elements.loginBtn).click();
    }

    static async getErrorMessage() {
        return page.locator(LoginPage.Elements.errorMessage).innerText();
    }

    static async loginUser(user: string, password: string) {
        await LoginPage.enterUserName(user);
        await LoginPage.enterPassword(password);
        await LoginPage.clickLoginButton();
    }
}