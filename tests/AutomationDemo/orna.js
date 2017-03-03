module.exports = {
  '@tags': ['orna'],
  'Go to firelab': function (browser) {
    browser
      .url('http://beta.firelabinc.com/')
      .waitForElementVisible('body', 5000)
      .setValue('#user','rchovatiya88@gmail.com') // User Login
      .setValue('#password','Gorilla') // User pass
      .click('.login-button')
      browser.pause(15000); // submit button
  },
  'Add a Employee': function (browser){
    browser
      .click('li.nav-element:nth-child(3) > a:nth-child(1)')
     browser.pause(5000) 
      .click('.btn') // click on Add button
      .setValue('#name','Inspector Test') // Inspector Name
      .setValue('#position', 'Marshal') // Position
      .setValue('#email', 'fireinspector@firehouse.com') // email
      .setValue('#phone', '18001294180')
      .click('button.btn') // Save  
    browser.pause(15000);
  },
  'Browser quit': function (browser) {
    browser
    .end();
  }

};
