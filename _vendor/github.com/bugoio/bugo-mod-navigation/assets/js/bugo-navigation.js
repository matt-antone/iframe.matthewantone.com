$(document).ready(function(){
  // if(typeof(document.menus) == 'undefined'){
  //   document.menus = document. querySelectorAll ("[role=menubar]");
  // }

  if($menu = document.getElementById('menubar-main')){
    var menubar = new Menubar($menu);
    menubar.init();
  }

  $('.skip-link').on('click',function(){
    var target = $(this).attr("href");
    $(target).focus();
  });
});
