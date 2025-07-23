import { Page, Locator } from '@playwright/test';
import { pdpLocators } from '../locators/pdp/index';

/**
 * Page Object for the Product Detail Page (PDP).
 * Handles interactions such as adding a product to the cart and navigating to the cart page.
 */
export class PdpPage {
    /** Locators for the add to cart button and view cart link. */
    private readonly addToCartButton: Locator;
    private readonly viewCartLink: Locator;

    /**
     * Initializes a new instance of the PdpPage.
     * @param page The Playwright Page object for the PDP.
     */
    constructor(private readonly page: Page) {
        this.addToCartButton = this.page.locator(pdpLocators.addToCartButton);
        this.viewCartLink = this.page.locator(pdpLocators.viewCartLink);
    }

    /**
     * Adds the product to the cart and navigates to the cart page.
     * Waits for each navigation action to complete before proceeding.
     */
    async addToCart() {
        await this.addToCartButton.click();
        await this.page.waitForLoadState('load');
        await this.viewCartLink.click();
        await this.page.waitForLoadState('load');
    }
}