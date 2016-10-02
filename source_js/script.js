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

    ]
});

  var controller = new ScrollMagic.Controller();

// create a scene
  var scene = new ScrollMagic.Scene({
    triggerHook:0.1,
    triggerElement: "#trigger1",


  })
      .setTween("nav", 0.5, {height:'170px'})
      .addTo(controller);
  var header = new ScrollMagic.Scene({
    triggerHook:0.1,
    triggerElement: "#trigger1",
  })
      .setTween("header", 0.5, {scale:0.8})
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
    triggerElement: "#tri",
    offset:300,
    duration:200
  })
      .setTween("#anip", 1, {css:{scale:0.7,top:'-=50px',opacity:0.5}})
      .addTo(controller);
  var disp = new ScrollMagic.Scene({
    triggerHook:0.5,
    triggerElement: "#section_12",
    offset:100,
    duration:200
  })
      .setTween(".ql", 1, {css:{scale:0.9,top:'+=80px'}})
      .addTo(controller);
  var disp = new ScrollMagic.Scene({
    triggerHook:0.5,
    triggerElement: "#section_12",
    duration:200
  })
      .setTween(".qr", 1, {css:{scale:0.9,bottom:'+=100px'}})
      .addTo(controller);
  var jap = new ScrollMagic.Scene({
    triggerHook:0.5,
    triggerElement: "#section_3",
    offset:300
    //duration:200
  })
      .setTween(".frame", 0.5, {css:{top:'-=10%', display:'block'}})
      .addTo(controller);
  var pin = new ScrollMagic.Scene({
    triggerHook:0.5,
    triggerElement: "#section_4",
    offset:200,
    //duration:50
  })
      .setTween("#pin1", 0.5, {css:{color:'white'}})
      .addTo(controller);
  var b = new ScrollMagic.Scene({
    triggerHook:0.5,
    triggerElement: ".footer",
    offset:-200,
    //duration:50
  })
      .setTween(".b1", 0.5, {rotationY: 180})
      .addTo(controller);
  var b = new ScrollMagic.Scene({
    triggerHook:0.5,
    triggerElement: ".footer",
    offset:-160,
    //duration:50
  })
      .setTween(".b2", 0.5, {rotationY: 180})
      .addTo(controller);
  var b = new ScrollMagic.Scene({
    triggerHook:0.5,
    triggerElement: ".footer",
    offset:-110,
    //duration:50
  })
      .setTween(".b3", 0.5, {rotationY: 180})
      .addTo(controller);

  var controllerp = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

  // build scenes
  new ScrollMagic.Scene({triggerElement: "#section_1"})
      .setTween("#section_1 > div", {y: "80%", ease: Linear.easeNone})
      .addTo(controllerp);




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