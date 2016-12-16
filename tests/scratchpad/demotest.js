module.exports = {
  'Login Page Initial Render': function( _browser ) {
    _browser
      .url('https://beerhawk-development.myshopify.com/products/subscription')
      .waitForElementVisible( 'body', 1000 ) 
      .acceptAlert()
      .click('button.yes') //button -> <button class="yes" data-age-gate-confirm="">Yes</button>
      .click('body > div.overlay-layer > section > a')
      .dismissAlert()
      .pause(1000)
  },

 'Browser quit': function( _browser ) {
    _browser
      .pause(1000)
      .end();
  }

}

//body > div.overlay-layer > section > button
///html/body/div[1]/section/button
