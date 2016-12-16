module.exports = {
  '@tags': ['ghost'],
  'Go to Google': function (browser) {
    browser
      .url('https://www.google.com/')
      .waitForElementVisible('body', 1000)
      .pause(2000)
      .click('#gbqfbb')
      .click('#tsf > div.tsf-p > div.jsb > center > div');
    browser.pause(5000);
  },
  'Go to youtube': function (browser) {
    browser
      .url('https://www.youtube.com/')
      .waitForElementVisible('body', 1000)
      .pause(2000)
      .setValue('#masthead-search-term', '50 cent hustlers ambition')
      .click('#search-btn');
      // 50 cent hustlers ambition
    browser.pause(2000)
    .url('https://www.youtube.com/watch?v=K3AiAem9JLQ');
    browser.pause(2000);
  },

  'open a new window': function (browser) {
    browser.window_handles(function (result) {
      var handle = result.value[0];
      browser.switchWindow(handle);
    });
  },
  'Browser quit': function (browser) {
    browser
      .pause(1000)
      .end();
  }

};
