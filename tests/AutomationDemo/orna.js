module.exports = {
  '@tags': ['orna'],
  'Go to Google': function (browser) {
    browser
      .url('https://www.google.com/')
      .pause(5000)
      .click('#gbqfbb')
      .pause(3000)
      .click('#tsf > div.tsf-p > div.jsb > center > div');
    browser.pause(5000);
  },
  'Browser quit': function (browser) {
    browser
    .end();
  }

};
