$(document).ready(function(){

  $('.button-directory').on('click',function(e){
    e.preventDefault();
    console.log("clicked");
      var modal = $(this).attr('data-modal');
      console.log(modal);
      var $modal = $('#' + modal);
      $modal.toggleClass('open');

      $modal.on('click',function(){
        console.log($(this).is('.open'),'clicked');
        if($(this).is('.open')){
          $(this).removeClass('open');
        }
      });

      $modal.find('.modal-close').on('click',function(){
        $modal.removeClass('open');
      });

      $modal.find('.modal-window').on('click',function(e){
        e.stopPropagation();
      });
  });
});