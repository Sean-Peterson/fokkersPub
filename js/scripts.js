






$(document).ready(function(){

  $("#slides").slidesjs({
    pagination: {
     active: false,
       // [boolean] Create pagination items.
       // You cannot use your own pagination. Sorry.
     effect: "slide"
       // [string] Can be either "slide" or "fade".
     },
     navigation: {
      active: false,
        // [boolean] Generates next and previous buttons.
        // You can set to false and use your own buttons.
        // User defined buttons must have the following:
        // previous button: class="slidesjs-previous slidesjs-navigation"
        // next button: class="slidesjs-next slidesjs-navigation"
      effect: "slide"
        // [string] Can be either "slide" or "fade".
    },
    effect: {
      slide: {
        // Slide effect settings.
        speed: 800
          // [number] Speed in milliseconds of the slide animation.
      },
      fade: {
        speed: 300,
          // [number] Speed in milliseconds of the fade animation.
        crossfade: true
          // [boolean] Cross-fade the transition.
      },
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
       swap: false,
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
