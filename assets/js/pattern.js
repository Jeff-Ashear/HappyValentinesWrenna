let clicked1 = false;
let clicked2 = false;
let clicked3 = false;
let clicked4 = false;
let clicked5 = false;
let clicked6 = false;
let clicked7 = false;
let clicked8 = false;
let clicked9 = false;
let clicked10 = false;
let clicked11 = false;
// $(document).ready(function() {
//    let audioElement = document.createElement('audio');
//    audioElement.setAttribute('src', 'assets/audio/nice.m4a');

//    audioElement.addEventListener('ended', function() {
//       this.play();
//    }, false);

//    audioElement.addEventListener("canplay", function() {
//       $()
//    })

// })

// $(document).ready(function() {
//    let nice = document.createElement('audio');
//    nice.setAttribute('src', 'assets/audio/nice.m4a');

//    nice.addEventListener('ended', function() {
//       this.play();
//    }, false);

// })

$('#tiffAndWrenna').click(function () {
   console.log('clicked Tiff and Wrenna')
   setTimeout(function () {
      $('#tiffAndWrenna').attr('src', './assets/images/1wellHello.jpg')
   }, 750);

   setTimeout(function () {
      $('#text1').text("Weeellll Helllooooo!")
   }, 2000);

   setTimeout(function() {
        $('#tiffAndWrenna').attr('src', './assets/images/bowlCat.jpg')
       $('#text1').text("Happy Mother's Day!")
   }, 3500);

   setTimeout(function() {
       $('#text1').text("Woohoo!")
   }, 5000)
   
   setTimeout(function() {
       $('#text1').text("Keep scrolling down...")
   }, 6500)

    clicked1 = true;
   })

$('#rainbow').click(function () {
   if (clicked1 == true) {
      setTimeout(function () {
         $('#rainbow').attr('src', './assets/images/2.goodMom.jpg')
      }, 750);

      setTimeout(function () {
         $('#text2').text("Admit it: You're an AMAZING mom Tiffany!")
      }, 2000);
   } else {
      confirm("You missed a present!");
   }

   clicked2 = true;
})

$('#wrenna1').click(function() {
   if(clicked2 == true){
      setTimeout(function() {
         $('#text3').text('We have made such an wonderful little person together, and you help her ever so much to grow.')
      }, 750);

      setTimeout(function() {
         $('#wrenna1').attr('src', './assets/images/3Headband.JPG')
      }, 2000);
   } else {
      confirm("You missed a present!")
   }

   clicked3 = true;
});

$('#jeffAndWrenna').click(function() {
   if (clicked3 == true) {
      setTimeout(function() {
         $('#text4').text("She's so playful.")
      }, 750);

      setTimeout(function() {
         $('#jeffAndWrenna').attr('src', './assets/images/4.peekaboo.jpg')
      }, 2000);
   } else {
      confirm("You missed a present!")
   }

   clicked4 = true;
});

$('#frontWalk').click(function() {
   if (clicked4 == true) {
      setTimeout(function() {
         $('#text5').text("And so smart.")
      }, 750);

      setTimeout(function() {
         $('#frontWalk').attr('src', './assets/images/5smoothie.jpg')
      }, 2000)
   } else {
      confirm("You missed a present!")
   }

   clicked5 = true;
});

$('#house1').click(function() {
   if (clicked5 == true){
      setTimeout(function() {
         $('#text6').text("And you take such incredible care of her!")
      }, 750);

      setTimeout(function() {
         $('#house1').attr('src', './assets/images/6outsideTogether.JPG')
      }, 2000);

      setTimeout(function() {
         $('#text7').text(`...and me and Queso too!`)
      }, 2750);
   } else {
      confirm("You missed a present!")
   }

   clicked6 = true;
});

$('#garden1').click(function() {
   if (clicked6 == true) {
      setTimeout(function() {
         $('#text8').text("Even when we're really wild!")
      }, 750);

      setTimeout(function() {
         $('#garden1').attr('src', './assets/images/7wild.JPG')
      }, 2000)
   } else {
      confirm("You missed a present!")
   }

   clicked7 = true;
});

$('#jeffAndQueso').click(function () {
   if (clicked7 == true) {
      setTimeout(function () {
         $("#text9").text("Or our beards are full of cat.")
      }, 750)

      setTimeout(function () {
         $('#jeffAndQueso').attr('src', 'assets/images/8beard.jpg')
      }, 2000)
   } else {
      confirm("You missed a present!")
   }

   clicked8 = true;
});

$('#outsideTogether').click(function() {
   if (clicked8 == true) {
      setTimeout(function() {
         $('#text11').text("You always smile for our Bean and take care of her when she needs you,")
      }, 750);

      setTimeout(function() {
         $('#outsideTogether').attr('src', './assets/images/9beauty.jpg')
      }, 2000);

      setTimeout(function() {
         $('#text12').text("...even when it's really hard.")
      }, 3750);
   } else {
      confirm("You missed a present!")
   }

   clicked9 = true;
});

$('#yourTurn').click(function() {
    if (clicked9 == true) {
       setTimeout(function() {
          $('#text13').text("So now it's our turn to take care of you.")
       }, 750);
 
       setTimeout(function() {
          $('#yourTurn').attr('src', './assets/images/park.jpg')
       }, 2000);
 
       setTimeout(function() {
          $('#text14').text("With omlets and dinner and peace and quiet.")
       }, 2750);
    } else {
       confirm("You missed a present!")
    }
 
    clicked10 = true;
 });

 $('#weLoveYou').click(function() {
    if (clicked10 == true) {
       setTimeout(function() {
          $('#text15').text("Because we love and treasure and value you.")
       }, 750);
 
       setTimeout(function() {
          $('#weLoveYou').attr('src', './assets/images/weLoveYou.jpg')
       }, 2000);
 
       setTimeout(function() {
          $('#text16').text("And we appreciate you and all your hard work so much.")
       }, 2750);
    } else {
       confirm("You missed a present!")
    }
 
    clicked11 = true;
 });

$('#giftCard').click(function() {
   if (clicked11 = true) {
      setTimeout(function() {
         $('#text17').text("You still have this gift card you know.")
      }, 750);

      setTimeout(function() {
         $('#giftCard').attr('src', './assets/images/gift-flat.png')
      }, 2000);

      setTimeout(function() {
         $('#text18').text("Perhaps it would make a nice bird bath or something? :*")
      }, 3000);
   
      setTimeout(function() {
         $('#text19').text("Your loving Bean and smitten husband hope you have a delightful Mother's Day.  We love you so much Tiffany. :*");
      }, 4000);

   } else {
      confirm("You missed a present!")
   }
})