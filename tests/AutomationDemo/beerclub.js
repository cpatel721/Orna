module.exports = {
  '@tags': ['beerclub'],
  'Go to Google': function (browser) {
    browser
      .url('https://testing.beerhawk.co.uk/beer-club/')
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
