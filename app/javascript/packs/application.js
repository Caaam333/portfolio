// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import "controllers"
import "bootstrap"

// import { initAbout } from '../plugins/init_about';
// import { initHide } from '../plugins/init_hide';
import { initScrollTo } from '../plugins/init_scroll_to';
// import { initSkills } from '../plugins/init_skills';
import { initFooter } from '../plugins/init_footer';
import { initNavbar } from '../plugins/init_navbar';


document.addEventListener('turbolinks:load', () => {
  // initAbout();
  // initHide();
  initScrollTo();
  // initSkills();
  // initFooter();
  AOS.init();
  initNavbar();
})
