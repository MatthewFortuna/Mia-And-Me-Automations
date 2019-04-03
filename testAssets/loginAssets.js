module.exports = (lPage) => {
    lPage
        .waitForElementPresent('#menu-item-77')
        .pause(2000)
        .click('#menu-item-77')
        .waitForElementPresent('#username')
        .pause(2000)
        .setValue('#username', 'werty47@rocketmail.com')
        .setValue('#password', 'qwasdas47')
        .click('button[name="login"]')
        .waitForElementPresent('#post-73 > div > div > div > nav > ul > li.woocommerce-MyAccount-navigation-link.woocommerce-MyAccount-navigation-link--dashboard.is-active > a')
    lPage.expect.element('#post-73 > div > div > div > div > p:nth-child(2)').text.to.contain('MatthewFortuna')
}