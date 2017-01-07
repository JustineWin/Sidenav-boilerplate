$(document).ready(function(){

   // Slideshow for resto pages  
   $('.resto-img-slide').slick({
   		//adaptiveHeight: true,
   		arrows: false,
   		autoplay: true,
   		infinite: true,
   		speed: 2000 
   });


 //  Menu Toggle 
  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");

  });

 
  //   setTimeout(function () {
  //     $('#resto .resto-col').equalHeights();
  //   }, 200);

 
  //   $(window).resize(function(){
  //     $('#resto .resto-col').height('auto');
  //     $('#resto .resto-col').equalHeights();
  //   });
 
  // if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
  //         $(window).resize(function(){
  //           $('#resto .resto-col').equalHeights();
  //           // $('#resto .resto-col').css('height','100%');
  //         });
  //   }



  if ($(window).width() > 768) {
	  $('#sidebar-wrapper, .resto-desc').mCustomScrollbar({
	      autoHideScrollbar : true,
	      theme: "inset-dark"
	  });
	}

  

  $('.resto-links li').click(function () {
    $('.resto-links li').not(this).removeClass('active');
    $(this).addClass('active');
  });
  // Map pins
  $('.abaca-resto-link').click(function (e) {
    e.preventDefault();
    toggleClassCustom(".ripple-mactan", "flash");
    removeClassCustom(".ripple-crossroads", "flash");
    removeClassCustom(".ripple-cybergate" , "flash");
    removeClassCustom(".ripple-paseo", "flash");
    removeClassCustom(".ripple-ayala", "flash");
    removeClassCustom(".ripple-as-fortuna", "flash");
    removeClassCustom(".ripple-galleria", "flash");
    removeClassCustom(".ripple-itpark", "flash");
  });

  $('.abaca-baking-link').click(function (e) {
    e.preventDefault();
    toggleClassCustom(".ripple-crossroads", "flash");
    toggleClassCustom(".ripple-cybergate", "flash");
    toggleClassCustom(".ripple-paseo", "flash");
    toggleClassCustom(".ripple-ayala", "flash");
    removeClassCustom(".ripple-as-fortuna", "flash");
    removeClassCustom(".ripple-itpark", "flash");
    removeClassCustom(".ripple-galleria", "flash");
    removeClassCustom(".ripple-mactan", "flash");
  });

  $('.beqaa-link, .tavolata-link').click(function (e) {
    e.preventDefault();
    removeClassCustom(".ripple-mactan", "flash");
    removeClassCustom(".ripple-crossroads", "flash");
    removeClassCustom(".ripple-cybergate" , "flash");
    removeClassCustom(".ripple-paseo", "flash");
    removeClassCustom(".ripple-ayala", "flash");
    toggleClassCustom(".ripple-as-fortuna", "flash");
    removeClassCustom(".ripple-galleria", "flash");
    removeClassCustom(".ripple-itpark", "flash");
  });

  $('.lunch-link').click(function (e) {
    e.preventDefault();
    removeClassCustom(".ripple-mactan", "flash");
    removeClassCustom(".ripple-crossroads", "flash");
    toggleClassCustom(".ripple-cybergate" , "flash");
    removeClassCustom(".ripple-paseo", "flash");
    removeClassCustom(".ripple-ayala", "flash");
    removeClassCustom(".ripple-as-fortuna", "flash");
    removeClassCustom(".ripple-galleria", "flash");
    removeClassCustom(".ripple-itpark", "flash");
  });

  $('.maya-link').click(function (e) {
    e.preventDefault();
    removeClassCustom(".ripple-mactan", "flash");
    toggleClassCustom(".ripple-crossroads", "flash");
    removeClassCustom(".ripple-cybergate" , "flash");
    removeClassCustom(".ripple-paseo", "flash");
    removeClassCustom(".ripple-ayala", "flash");
    removeClassCustom(".ripple-as-fortuna", "flash");
    removeClassCustom(".ripple-galleria", "flash");
    removeClassCustom(".ripple-itpark", "flash");
  });

  $('.phat-link').click(function (e) {
    e.preventDefault();
    toggleClassCustom(".ripple-crossroads", "flash");
    toggleClassCustom(".ripple-cybergate", "flash");
    removeClassCustom(".ripple-paseo", "flash");
    toggleClassCustom(".ripple-ayala", "flash");
    removeClassCustom(".ripple-as-fortuna", "flash");
    removeClassCustom(".ripple-itpark", "flash");
    toggleClassCustom(".ripple-galleria", "flash");
    removeClassCustom(".ripple-mactan", "flash");
  });

  $('.red-link').click(function (e) {
    e.preventDefault();
    removeClassCustom(".ripple-crossroads", "flash");
    removeClassCustom(".ripple-cybergate", "flash");
    removeClassCustom(".ripple-paseo", "flash");
    removeClassCustom(".ripple-ayala", "flash");
    removeClassCustom(".ripple-as-fortuna", "flash");
    toggleClassCustom(".ripple-itpark", "flash");
    toggleClassCustom(".ripple-galleria", "flash");
    removeClassCustom(".ripple-mactan", "flash");
  });
});

function toggleClassCustom(tag, className) {
   var classes = $(tag).attr("class").split(" ");
   var pos = classes.indexOf(className);
   if (pos != -1) {
       // existing
       removeClassCustom(tag, className);
   }
   else {
       // not existing
       addClassCustom(tag, className);
   }
}

function removeClassCustom(tag, className) {
   var classes = $(tag).attr("class").split(" ");
   var pos = classes.indexOf(className);
   if (pos != -1) {
       // existing
       classes[pos] = "";
   }
   classes = classes.join(" ");
   $(tag).attr("class", classes);
}

function addClassCustom(tag, className) {
   var classes = $(tag).attr("class").split(" ");
   var pos = classes.indexOf(className);
   if (pos == -1) {
       // existing
       classes.push(className);
   }
   classes = classes.join(" ");
   $(tag).attr("class", classes);
}



