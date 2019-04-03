var aPage = {}
let aTest = require('../testAssets/addToCartAssets')

module.exports = {
    beforeEach: browser => {
        aPage = browser.page.miaAndMePage()
        aPage.navigate()
            .waitForElementPresent('#woocommerce-product-search-field-0', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Add To Cart Test': browser => {
        aTest(aPage)
    },
}