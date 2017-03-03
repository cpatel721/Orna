module.exports = {
  '@tags': ['fire'],
  'go to firelab ': function (browser) {
    browser
      .url('http://beta.firelabinc.com/')
      .waitForElementVisible('body', 5000)
      .setValue('#user','rchovatiya88@gmail.com') // User Login
      .setValue('#password','Gorilla') // User pass
      .click('.login-button') // submit button
    browser.pause(3000)
      .click('.btn btn-success')
    browser.pause(3000)
      .setValue('','FireLabTEST') // Name
      .setValue('','1212 Aves of America')  // Address
      .setValue('','New York City') // City
      .setValue('','New york') // State
      .setValue('','11013') // Zip
      .click('') // Save 
  },

  'Browser quit': function (browser) {
    browser
      .pause(5000)
      .end();
  }
};