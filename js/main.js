// Blur
document.addEventListener("DOMContentLoaded", function () {
  var popup = document.getElementById("popup");
  var closeBtn = document.getElementById("close");
  var video = document.getElementById("myVideo");
  var content = document.getElementById("blur");

  function popactive() {
    popup.classList.add("popactive");
    video.classList.add("active");
    content.classList.add("active");
  }

  popactive();

   setTimeout(function () {

     popup.style.display = "none";
    video.classList.remove("active");
     content.classList.remove("active");
  }, 10000);

  closeBtn.addEventListener("click", function () {

    popup.style.display = "none";
    video.classList.remove("active");
    content.classList.remove("active");

  });

  var confettiSettings = { target: 'my-canvas' };
  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();

});

//Preloder TimeOut

setTimeout(function () {
  $('.preloader').fadeToggle();
}, 3000);


//flip.js Codes

function handleTickInit(tick) {

  // uncomment to set labels to different language
  /*
  var locale = {
      YEAR_PLURAL: 'Jaren',
      YEAR_SINGULAR: 'Jaar',
      MONTH_PLURAL: 'Maanden',
      MONTH_SINGULAR: 'Maand',
      WEEK_PLURAL: 'Weken',
      WEEK_SINGULAR: 'Week',
      DAY_PLURAL: 'Dagen',
      DAY_SINGULAR: 'Dag',
      HOUR_PLURAL: 'Uren',
      HOUR_SINGULAR: 'Uur',
      MINUTE_PLURAL: 'Minuten',
      MINUTE_SINGULAR: 'Minuut',
      SECOND_PLURAL: 'Seconden',
      SECOND_SINGULAR: 'Seconde',
      MILLISECOND_PLURAL: 'Milliseconden',
      MILLISECOND_SINGULAR: 'Milliseconde'
  };
 
  for (var key in locale) {
      if (!locale.hasOwnProperty(key)) { continue; }
      tick.setConstant(key, locale[key]);
  }
  */

  // format of due date is ISO8601
  // https://en.wikipedia.org/wiki/ISO_8601

  // '2018-01-31T12:00:00'        to count down to the 31st of January 2018 at 12 o'clock
  // '2019'                       to count down to 2019
  // '2018-01-15T10:00:00+01:00'  to count down to the 15th of January 2018 at 10 o'clock in timezone GMT+1

  // create the countdown counter
  var counter = Tick.count.down('2033-03-02T16:30:00+05:30');

  counter.onupdate = function (value) {
    tick.value = value;
  };

  counter.onended = function () {
    // redirect, uncomment the next line
    // window.location = 'my-location.html'

    // hide counter, uncomment the next line
    // tick.root.style.display = 'none';

    // show message, uncomment the next line
    // document.querySelector('.tick-onended-message').style.display = '';
  };
}


//Typing Effect in Bottom

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 2);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  document.body.appendChild(css);
};

