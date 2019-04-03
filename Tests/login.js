var lPage = {}
let lTest = require('../testAssets/loginAssets')

module.exports = {
    beforeEach: browser => {
        lPage = browser.page.miaAndMePage()
        lPage.navigate()
            .waitForElementPresent('#woocommerce-product-search-field-0', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Login Test': browser => {
        lTest(lPage)
    },
}