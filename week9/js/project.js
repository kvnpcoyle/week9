$(".gallery").masonry({
  itemSelector: ".thumbnail",
  columnWidth: ".thumbnail",
  percentPosition: true
  
});

$().fancybox({
  selector : '[data-fancybox="images"]',
  thumbs   : false,
  hash     : false,
});

$(".main-slider").slick({
  slidesToShow   : 3,
  slidesToScroll : 3,
  infinite   : true,
  dots       : false,
  arrows     : false,
  responsive : [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(".touchevents .thumbnail").hammer().bind("press", function() {
 //i can't get FB to work but i think this would work if it did.  if that makes sense.//
 
 var open = modernizer.nq(max-width 500px);

 $(."thumbnail").addClass(open);
});

$(".touchevents .thumbnail").hammer().bind("swipe", function() {
//i think this would mostly work if i could get the plugin to work//

var close = modernizer.nq(max-width 500px);
$(."thumbnail").removeClass(open);
});
