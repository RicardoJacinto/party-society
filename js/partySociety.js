anime({
  
  //Target Element
  targets: 'div#p1',
  //Move on Y axis
  translateX: [
    { value: -600, duration: 1},
    { value: 0, duration: 1000, easing: 'easeInOutQuad'}
  ]
   
});

anime({
  
  //Target Element
  targets: 'div#c2',
  //Move on Y axis
  translateY: [
    { value: 600, duration: 1},
    { value: 0, duration: 1000, easing: 'easeInOutQuad'}
  ]
    

});

anime({
  
  //Target Element
  targets: 'div#c3',
  //Move on Y axis
  translateX: [
    { value: 600, duration: 1},
    { value: 0, duration: 1000, delay:500, easing: 'easeInOutQuad'}
  ]
    

});

var c4Animation = anime({
  
  
  //Target Element
  targets: 'div#c4',
  //Move on Y axis
  translateX: [
    { value: -900, duration: 1},
    { value: 0, duration: 1000,delay:300, easing: 'easeInOutQuad'}
  ],
  autoplay:false
   });

var c7Animation = anime({
  
  //Target Element
  targets: 'div#c7',
  //Move on Y axis
  translateX: [
    { value: -900, duration: 1},
    { value: 0, duration: 1000, easing: 'easeInOutQuad'}
  ],
  autoplay: false
   });



var c5Animation = anime({
  
  //Target Element
  targets: 'div#c5',
  //Move on Y axis
  translateX: [
    { value: -900, duration: 1},
    { value: 0, duration: 1000,delay:400, easing: 'easeInOutQuad'}
  ],
  autoplay:false
   });

var p6Animation = anime({
  
  //Target Element
  targets: 'div#p6',
  //Move on Y axis
  translateY: [
    { value: 900, duration: 1},
    { value: 0, duration: 1000, delay: 500, easing: 'easeInOutQuad'}
  ],
  autoplay:false
   });

var f1Animation = anime({
  
  //Target Element
  targets: 'div#f1',
  //Move on Y axis
  translateY: [
    { value: 900, duration: 1},
    { value: 0, duration: 1000, delay: 700, easing: 'easeInOutQuad'}
  ]  
   });

anime({
  
  //Target Element
  targets: 'h1',
  //Move on Y axis
  translateY: [
    { value: -900, duration: 1},
    { value: 0, duration: 1500,  easing: 'easeInOutQuad'}
  ]  
   });

// show div when scroll down

$(document).ready(function() {
    $("#c7").hide(); //hide your div initially
  
    var topOfOthDiv1 = 100;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv1) { //scrolled past the other div?
        c7Animation.play();
        $("#c7").show();
        }
         //reached the desired point -- show di 
    });
});


$(document).ready(function(){
  $("#c4").hide();
  $("#c5").hide();
  $("#p6").hide();
  
  var topOfOthDiv = 330;
  $(window).scroll(function(){
     if($(window).scrollTop() > topOfOthDiv) { 
            
            c4Animation.play();
            c5Animation.play();
            p6Animation.play();
       
            $("#c4").show();
            $("#c5").show();
            $("#p6").show();
       
        
        }
    
  });
  
  
}); 

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 100) {
        $('#n1').addClass('sticky');
    } else {
        $('#n1').removeClass('sticky');
    }
});




  



  


