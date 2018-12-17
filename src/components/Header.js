import React from 'react';
import PropTypes from 'prop-types';

const html = '<div id="include-container-header"> <header class="show-for-large-up hide-for-small"> <div class="head"> <div class="row"> <div class="medium-6 large-6 columns right"> <ul class="right"> <li class="collapse-padding"> <div id="acc-panel-main" class="accessibility-tools"> <button class="accessibilityMenuButton" data-cxcomp="menu-t" data-cxtarget="accMenu" data-cxgroup="acc" aria-haspopup="menu" data-cxlistener="1" aria-expanded="false">Accessibility</button> <div class="accessibilityMenu" data-cxcomp="menu-panel" id="accMenu" role="menu" aria-labelledby="__ZMQ1C5X_1" style="display: none; position: absolute; left: 367.25px; top: 19px;"> <p class="change-color-style" id="__ZMQ1C5X_1">Change Color Style:</p> <ul> <li> <button class="color-schemes-cx high" aria-label="high contrast color style" data-css="high-contrast.min.css" data-csskey="1" title="change to high contrast color style" role="menuitem" tabindex="-1"><span>High Contrast</span></button> </li> <li> <button class="color-schemes-cx" aria-label="normal color style" data-css="app.min.css" data-csskey="0" title="revert to normal color style" role="menuitem" tabindex="-1"><span>Normal Style</span></button> </li> <li> <button class="color-schemes-cx low" aria-label="low contrast color style" data-css="low-contrast.min.css" data-csskey="2" title="change to soft contrast color style" role="menuitem" tabindex="-1"><span>Soft Contrast</span></button> </li> </ul> <p class="accMenu-link">Read more about <a href="https://www.floridablue.com/general/web-accessibility" class="accMenu-link" role="menuitem" tabindex="-1"> Web Accessibility</a></p> </div> </div> </li> <li> <a href="javascript:setLocale(\'es\');" class="icon-link lang" target="_self"><span>Español</span></a> <div id="localeDiv"></div> </li> <li><a href="javascript:OpenUrl(\'http://www.floridablue.com/general/contact-us\')"> <span>Support</span></a></li> </ul> </div> <div class="medium-6 large-6 columns left"> <ul> <li class="floridaBlue"> <a href="javascript:OpenUrl(\'http://www.floridablue.com\');"> <span> FloridaBlue.com</span></a> </li> </ul> </div> </div> </div> <div class="body row"> <div class="small-12 columns"> <a target="_top" class="logo" href="javascript:OpenUrl(\'http://www.floridablue.com\');" title="Florida Blue"><span class="icon-logo icon-fb">&nbsp;</span><span class="hide-508comment">Florida Blue</span> </a> </div> </div> </header> <header class="hide-for-large-up show-for-small-up hide-for-print"> <div class="mobile-nav hide-for-print"> <nav> <section> <a href="#" class="left-overlay-canvas-toggle" title="Opens Main Menu"><span class="hide-508comment">Main Menu</span><span class="icon icon-menu-mobile" aria-hidden="true"></span> </a> </section> <section> <div class="row collapse"> <div class="small-12 columns text-center"> <h1 class="title"> <a href="#" class="mobile-logo"><span class="icon-logo icon-fb" aria-hidden="true">&nbsp;</span> </a> </h1> </div> </div> </section> </nav> <aside class="left-overlay-canvas-menu"> <ul class="tier-1"> <li id="" class="active" role="menuitem"> <a href="#" target="_self" title="Members"> <p class="icon icon-explore text-center" style="outline: none;"></p>Main </a> <ul class="tier-2"> <li role="menuitem"> <a href="javascript:OpenUrl(\'http://www.floridablue.com\');"><span>FloridaBlue.com</span> </a> </li> <li role="menuitem"> <a href="javascript:setLocale(\'es\');" class="icon-link lang" target="_self"><span>Español</span></a> <div id="localeDiv"></div> </li> <li role="menuitem"> <a href="https://www.floridablue.com/general/web-accessibility" target="_blank"><span>Accessibility</span> </a> </li> <li role="menuitem"> <a href="javascript:OpenUrl(\'http://www.floridablue.com/general/contact-us\')"> <span>Support</span> </a> </li> </ul> </li> </ul> </aside> </div> </header> <div class="left-overlay-canvas-menu-bg "></div> </div>'

function createMarkup() {
  return {__html: html};
}

function Header(props) {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Header;






