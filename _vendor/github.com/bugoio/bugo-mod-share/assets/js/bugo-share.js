
if(!sharer){
  var sharer = document.createElement('script');
  sharer.src = "https://cdn.jsdelivr.net/npm/sharer.js@latest/sharer.min.js";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(sharer, firstScriptTag);
}