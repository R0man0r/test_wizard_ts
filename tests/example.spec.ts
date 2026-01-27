import type { Locator, Page } from "@playwright/test";


interface LoginData {
    username: string;
    password: string;
}

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page){
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login');
        this.errorMessage = page.locator('.error');
    }

    async open(): Promise<void> {
        await this.page.goto('example.url')
    }
    
    async login(data: LoginData): Promise<void> {
        await this.usernameInput.fill(data.username)
        await this.passwordInput.fill(data.password)
        this.loginButton.click()
    }

    async getErrorText(): Promise<string | null> {
        if (await this.errorMessage.isVisible()){
            return this.errorMessage.textContent()
        }
        return null
    }

}

