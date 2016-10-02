// Write any custom javascript functions here
var $window = $(window);

var main=function() {

  $("._menu a").click(function(){
    event.preventDefault();
    $('.active-button').removeClass('active-button');
    $(this).parent().addClass('active-button');
    $(window).off('scroll',handler);
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top -185
    }, 500)
        .promise()
        .done(function () {
          $(window).on('scroll',handler);
        });
    //

  });
// When the user clicks anywhere outside of the modal, close it

  $('.carousels').slick({
    arrows:true,
    dots:true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows:false,
        }
      }

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});

  var controller = new ScrollMagic.Controller();

// create a scene
  var scene = new ScrollMagic.Scene({
    triggerHook:0.1,
    triggerElement: "#trigger1",


  })
      .setTween("nav", 0.5, {height:'170px'}) // trigger a TweenMax.to tween
      //.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
      .addTo(controller);
  var header = new ScrollMagic.Scene({
    triggerHook:0.1,
    triggerElement: "#trigger1",
  })
      .setTween("header", 0.5, {scale:0.8}) // trigger a TweenMax.to tween
      //.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
      .addTo(controller);

  var oldwidth=$(window).width();
  $(window).resize(function() {
    var tempW=$(window).width();
    if(tempW!= oldwidth) {
      location.reload();
      oldwidth=tempW;
    }
  });
  var disp = new ScrollMagic.Scene({
    triggerHook:0.5,
    triggerElement: "#trigger1",
    offset:300,
    duration:200
  })
      .setTween("#anip", 1, {css:{scale:0.7,top:'-=50px',opacity:0.5}})
      .addTo(controller);

  var controllerp = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

  // build scenes
  new ScrollMagic.Scene({triggerElement: "#section_1"})
      .setTween("#section_1 > div", {y: "80%", ease: Linear.easeNone})
      .addTo(controllerp);

  var modal = document.getElementById('myModal');

// Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  btn.onclick = function() {
    event.preventDefault();
    modal.style.display = "block";
  }


// When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


  function indicate(currentScroll) {

    var d1 = Math.abs(currentScroll-185 - $('#section_1').position().top);
    var d2 = Math.abs(currentScroll-185 - $('#section_2').position().top);
    var d3 = Math.abs(currentScroll-185 - $('#section_3').position().top);
    var d4 = Math.abs(currentScroll-185 - $('#section_4').position().top);

    var mini = Math.min(d1,d2,d3,d4);
    if(mini == d1){
      event.preventDefault();
      $('.active-button').removeClass('active-button');
      $('.button1').addClass('active-button');
      //$(".menu li:nth-child(1) a").trigger("click");
    }
    else if(mini == d2){
      event.preventDefault();
      $('.active-button').removeClass('active-button');
      $('.button2').addClass('active-button');
    }
    else if(mini == d3){
      event.preventDefault();
      $('.active-button').removeClass('active-button');
      $('.button3').addClass('active-button');
    }
    else if(mini == d4){
      event.preventDefault();
      $('.active-button').removeClass('active-button');
      $('.button4').addClass('active-button');
    }

  }
  function videoCtrl(currentScroll){
    var d3 = currentScroll-185 - $('#section_3').position().top;
    var d4 = currentScroll-185 - $('#section_4').position().top;
    if (d3>0&&d4<0) {
      $('video')[0].play();
    } else {
      $('video')[0].pause();
    }
  }
  $window.on("scroll", handler) ;
  function handler(){
    var currentScroll = $window.scrollTop();
    indicate(currentScroll);
    videoCtrl(currentScroll);
  };
}
$(document).ready(main);