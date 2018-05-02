import $ from 'jquery';
import whatInput from 'what-input';
//TopBar
function dropIt() {
    document.getElementById("mobile-menu").style.top='0';
}
function pickIt() {
    document.getElementById("mobile-menu").style.top='-100vh';
}
document.getElementById("mobile-menu-button").addEventListener ("click", dropIt, false);
document.getElementById("mobile-menu-button-close").addEventListener ("click", pickIt, false);
document.getElementById("mobile-menu-item-1").addEventListener ("click", pickIt, false);
document.getElementById("mobile-menu-item-2").addEventListener ("click", pickIt, false);
document.getElementById("mobile-menu-item-4").addEventListener ("click", pickIt, false);

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();
