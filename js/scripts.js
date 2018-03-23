






$(document).ready(function(){

  $("#slides").slidesjs({
    // width: 10,
    // height: 10,
    pagination: {
     active: false,
       // [boolean] Create pagination items.
       // You cannot use your own pagination. Sorry.
     effect: "slide"
       // [string] Can be either "slide" or "fade".
     },
     play: {
       active: true,
       // [boolean] Generate the play and stop buttons.
       // You cannot use your own buttons. Sorry.
       effect: "slide",
       // [string] Can be either "slide" or "fade".
       interval: 4000,
       // [number] Time spent on each slide in milliseconds.
       auto: true,
       // [boolean] Start playing the slideshow on load.
       swap: true,
       // [boolean] show/hide stop and play buttons
       pauseOnHover: true,
       // [boolean] pause a playing slideshow on hover
       restartDelay: 2500
       // [number] restart delay on inactive slideshow
     }
  });

});







// $('.jumbotron').mouseover(function(){
//   $(this).hide();
//   });
