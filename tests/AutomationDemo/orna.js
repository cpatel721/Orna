module.exports = {
  '@tags': ['orna'],
  'Go to yahoo': function (browser) {
    browser
      .url('https://www.yahoo.com/')
      .pause(5000);
    browser.pause(5000);
  },
  'Browser quit': function (browser) {
    browser
    .end();
  }

};
