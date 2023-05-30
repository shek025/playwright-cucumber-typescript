import { expect, Page } from "@playwright/test";
import { page } from '../support/hooks';

export default class ProductPage {

    static Elements = {
        menu: '#react-burger-menu-btn',
        password: 'password',
        loginBtn: 'Login',
        errorMessage: '//div[@class="error-message-container error"]//h3',
        filter:'select[class="product_sort_container"]',
        price: '//div[@class="inventory_item_price"]'
    }

    static async verifyProductPage() {
        await page.getByText('Products').click()
        expect(await page.getByText('Products')).toBeVisible()
    }

    static async logoutUser() {
        await page.locator(this.Elements.menu).click()
        await page.getByText('Logout').click()

    }

    static async filterBy(filterName: string) {

        await page.locator('[data-test="product_sort_container"]').selectOption({ label: filterName });
    }

    static async verifyLowToHighPrice() {
        const elements = await page.locator(this.Elements.price).all
        await console.log(elements.length)
        for(let i =0; i < elements.length; i++) {
            
        }
        
    }

    

    

}