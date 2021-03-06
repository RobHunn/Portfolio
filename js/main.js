// ****** jQuery start ******
//ripple effect
jQuery(document).ready(function(){
   "use strict"
        $('.slider').ripples({
            dropRadius: 12,
            perturbance: .005,
        });
//sticky nav
        $(window).scroll(function(){
          var top = $(window).scrollTop();
          var width = $( window ).width();
  
           if(top >= 280 || width < 820){
               $("nav").addClass('secondary');
           }
           else
               if($("nav").hasClass('secondary')){
                  $("nav").removeClass('secondary');
               }  
      });

      
//youtube carousel
      $('#youtube-wrapper').owlCarousel({
          items:3,
          autoplay:true,
          loop:true,
          smartSpeed:700,
          autoplayHoverPause:true,
          responsiveClass:true,
          responsive:{
              0:{
                  items:1,
                  nav:true,
                  loop:true
              },
              820:{
                  items:2,
                  nav:true,
                  loop:true
              },
              1000:{
                  items:3,
                  nav:true,
                  loop:true
              }
          }
      })

$('a.btn-74').smoothScroll();

});
// ****** jQuery end ******


// ****** Typed Text animation start ******
class TypeWriter {
    constructor(txtElement, words, wait = 1500) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];
      // Check if deleting
      if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
      // Initial Type Speed
      let typeSpeed = 200;
      if(this.isDeleting) {
        typeSpeed /= 2;
      }
  
      // If word is complete
      if(!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
      }
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }
  // ****** Typed Text animation end ******

// Ester Egg
const esterEgg = ( ()=>{
  const myAudioElement = document.getElementById("navbar-brand-mp3");
  const audioObj = new Audio('images/body-bag.mp3');
  const audioObj1 = new Audio('images/No-Sensei.mp3');
  const audioObj2 = new Audio('images/luck.mp3');
  let audioObjAll = [];
  let count = 0;
  audioObjAll.push(audioObj2,audioObj1,audioObj);

  return{
    myAudioElement :myAudioElement,
    audioObj:audioObj,
    audioObj1:audioObj1,
    audioObj2:audioObj2,
    audioObjAll:audioObjAll,
    count:count
  }
})()

  esterEgg.myAudioElement.addEventListener("click", event => {
    if(esterEgg.count <= 2){
        esterEgg.audioObjAll[esterEgg.count].play();
        esterEgg.count ++
    }else{
      esterEgg.count = 0;
      esterEgg.audioObjAll[esterEgg.count].play();
    }
});