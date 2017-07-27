import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();
$(document).ready(function() {
  console.log("hola");
  return $('#contact-form').submit(function(e) {
    var email, message, name;
    name = document.getElementById('inputName');
    email = document.getElementById('inputEmail');
    message = document.getElementById('inputMessage');
    if (!name.value || !email.value || !message.value) {
      console.log('Please check your entries');
      return false;
    } else {
      $.ajax({
        method: 'POST',
        url: '//formspree.io/e9.ruben@gmail.com',
        data: $('#contact-form').serialize(),
        datatype: 'json'
      });
      e.preventDefault();
      $(this).get(0).reset();
      return console.log('Message sent');
    }
  });
});
