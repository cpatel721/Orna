module.exports = {
  '@tags': ['bevybar'],
  'Go to bevybar': function (browser) {
    browser
      .url('https://www.bevybar.com.ar/')
      .waitForElementVisible('body', 1000)
      .pause(1000)
      .click('#Layer_1')
      .pause(3000);
  },
  'Browser quit': function (browser) {
    browser
    .end();
  }

};
