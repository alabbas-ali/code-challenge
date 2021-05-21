import { browser, by, element } from 'protractor'

export class AppPage {
    navigateTo(): Promise<unknown> {
        return browser.get(browser.baseUrl) as Promise<unknown>
    }

    getHeaderLogoText(): Promise<string> {
        return element(by.css('app-header .navbar-brand')).getText() as Promise<string>
    }
}
