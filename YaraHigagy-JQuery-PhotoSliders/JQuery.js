//Task_1:

var image = [  // This array is more effecient than the below one, because we alternate between just the (scr) not a whole element.
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
  'img/5.jpg',
  'img/6.jpg',
  'img/7.jpg',
  'img/8.jpg'
]

let pic = $(".imgContainer img");
let i = 0;
var interval = null;
var loading = true;
if (loading) {
	interval = setInterval(function(){
	  i = (i + 1) % image.length;
	  pic.fadeOut(1000, () => {
	    pic.attr("src", image[i]);
	    pic.fadeIn(1000);
	  });
	  // console.log(image[i]);
	}, 3000);
}

$(".stop").click(function(){
  loading = false;
  if(!loading){
    clearInterval(interval);
    // console.log("end");
  }
});

// =============================================================
// Task_2:

$(".cardsContainer").css({"display": "flex", "flex-wrap": "wrap", "justify-content": "space-between", "width": "800px"});
$(".cardsContainer div").css({"width": "200px"});
$(".cardsContainer div img").css({"width": "100%"});
$(".cardsContainer div h4").css({"text-align": "center"});
$(".cardsContainer div p").css({"text-align": "center"});

$(".cardsContainer div .img1").on('click', function(){
  $(".cardsContainer div .p1").slideToggle(2000);
});
$(".cardsContainer div .img2").on('click', function(){
  $(".cardsContainer div .p2").slideToggle(2000);
});
$(".cardsContainer div .img3").on('click', function(){
  $(".cardsContainer div .p3").slideToggle(2000);
});

// $(".cardsContainer div img").one('click', function(){
//   $(".cardsContainer div p").slideToggle(2000);
//   // $(this).children("div img").slideToggle(2000);
// });

// =============================================================
//Task_1 try:

// $(".imgContainer img").css("display", "none")

// setInterval(function(){
//   $("image1").fadeIn(1000).fadeOut(1000)
// .next().fadeIn(1000).fadeOut(1000)
// .next().fadeIn(1000).fadeOut(1000)
// .next().fadeIn(1000).fadeOut(1000)
// .next().fadeIn(1000).fadeOut(1000)
// .next().fadeIn(1000).fadeOut(1000)
// .next().fadeIn(1000).fadeOut(1000)
// .next().fadeIn(1000).fadeOut(1000);
// }, 1000);


// $(".imgContainer img").

// $(".imgContainer img").hide();
// $(".imgContainer img").fadeIn(2000);
// $(".imgContainer img").click(function(){
//   $(this).fadeOut(2000);
//   var next = ($(this).next().length)?$(this).next():$(".image:first");
//   next.fadeIn(2000);
// });

// $(document).ready(function(){
//   $(".imgContainer img").hide();
//   $(".imgContainer img").fadeIn(2000);
//   $(".imgContainer img").click(function(){
//     $(this).fadeOut(2000);
//     var next = ($(this).next().length)?$(this).next():$(".image");
//     next.fadeIn(2000);
//   });
//   })

// var currImg = $(".image");
// var nextImd = currImg.next();
// $(currImg).fadeOut(2000);

// for(var i = 0; i < 8; i++){
//   $(".imgContainer img").fadeOut(2000);
//   if(i === image.length){
//     i = 0;
//   }
//   return i;
// }


// var image = [
//   '<img src="img/1.jpg">',
//   '<img src="img/2.jpg">',
//   '<img src="img/3.jpg">',
//   '<img src="img/4.jpg">',
//   '<img src="img/5.jpg">',
//   '<img src="img/6.jpg">',
//   '<img src="img/7.jpg">',
//   '<img src="img/8.jpg">'
// ]

// let pic = $(".imgContainer img");
// let i = 0;
// setInterval(function(){
//   i = (i + 1) % image.length;
//   // var imgX = image[i];
//   pic.css("display", "block");
//   pic.fadeOut(1000, () => {
//     // pic.attr("src", image[i]);   
//     pic.attr(image[i]);
//     pic.fadeIn(1000);
//     pic.css("display", "none");
//   });
//   console.log(image[i]);
// }, 3000);
// $(".stop").click(function(){
//   // clearInterval(image[i]);
//   $(".imgContainer img").stop();
// });

// setInterval(function(){
//   for(var i = 0; i < image.length; i++){
//     var imageRole = image[i];
//     // $(".imgContainer").append(imageRole);
//     // $(imageRole).fadeOut(2000).fadeIn(2000);
//     pic.fadeOut(1000, () => {
//       pic.attr("src", image[i]);
//       pic.fadeIn(1000);
//     });
//     // console.log(imageRole);
//     if(i >= image.length){
//       i = 0;
//     }
//   }});
//   $(".stop").click(function(){
//     $(imageRole).stop();
//   });
// }, 10000);

// if(i >= image.length){
//   i = 0;
// }
// for(var i = 0; i < image.length; i++){
//   var imageRole = image[i];
//   $(".imgContainer").append(imageRole);
//   $(imageRole).fadeOut(2000).fadeIn(2000);
//   // $(imageRole).css({"display": "none"});
//   console.log(imageRole);
//   // if(i >= image.length){
//   //   i = 0;
//   // }
//   // return i, imageRole;
// }

// $(".stop").click(function(){
//   $(imageRole).stop();
//   // $(imageRole).stopPropagation();
//   // $(imageRole).css({"display": "block"});
// });
