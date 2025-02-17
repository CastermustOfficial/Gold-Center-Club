$( document ).ready(function() {
	
  // Loaded transitions
  $('.work #profile-image').addClass('bounceInLeft');
  $('#navigation-menu').addClass('unfolded');
  $('body').addClass('loaded');

  // Navigation
  $('#hans-toggle').click(function(e) {
	   e.preventDefault();
	   $('body').toggleClass('hans-clicked');
  });
});

// Project Containers
$('.preview-image, .project-container .more').on('click', function(){
      $('html,body').animate({scrollTop: $('.project-container').offset().top - '10'}, 400);
      $(this).parents('li').addClass('active');
      $(this).parents('ul').addClass('project-active');
});
$('.project-container .back').click(function(e) {
  e.preventDefault();
  $(this).parents('li').removeClass('active');
  $(this).parents('ul').removeClass('project-active');

});

// Navigation
$('#social-toggle').click(function(e) {
      e.preventDefault();
      $('.internal-nav-wrap').toggleClass('social-clicked');
  });

// Nav toggle on mobile
$('#nav-toggle').click(function(e) {
      e.preventDefault();
      $('body').addClass('menu-clicked');
    });
$('.close-toggle').click(function(e) {
      e.preventDefault();
      $('body').removeClass('menu-clicked');
      $('body').removeClass('hans-clicked');
    });


// Typing Text Function
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};
// Only start when clicked, and don't run multiple instances
$('#hans-toggle').click(function() {
  if ( !$('#hans-toggle').data('clicked') ) {
    var elements = document.getElementsByClassName('txt-rotate');
    
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  }
  $(this).data('clicked', true);
});