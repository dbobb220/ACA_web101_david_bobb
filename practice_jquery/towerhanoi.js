'use strict';

$(document).ready(function() {
  let $block = null;
  
  $('.tower').click(function() {
    if ($block) {
      $(this).prepend($block);
      $block = null;
    } else {
      $block = $(this).children().first().detach();
    }
  })
})