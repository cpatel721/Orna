module.exports = {
  '@tags': ['bevybar'],
  'Go to Google': function (browser) {
    browser
      .url('https://www.bevybar.com.ar/')
      .waitForElementVisible('body', 1000)
      .pause(1000)
      .click('#Layer_1')
      .pause(3000)
      .setValue('#customer-email', 'testautomation5@zxvtest.com')
      .setValue('#customer-password', 'password1')
      .pause('1000')
      .click('#customer_login > input[type="submit"]:nth-child(5)');
    browser.pause(5000);
  },
  'Browser quit': function (browser) {
    browser
    .end();
  }

};
