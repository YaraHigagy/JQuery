// Task 1: (Rabbit & The Black Hole)

// $("div").css({"display": "flex", "justify-content": "space-between"});
$(".blackHole").css({"position": "absolute", "left": "0", "height": "300px"});
$(".ui-widget-content").css({"position": "absolute", "right": "10px", "top": "300px", "background-color": "yellow", "width": "150px", "height": "200px"});
$(".rabbit").css({"position": "relative", "height": "150px", "right": "-30px", "top": "10px", "margin": "0"});
$(".ui-widget-content span").css({"position": "absolute", "background-color": "yellow", "border": "none", "right": "35px", "bottom": "10px"});

$("#draggable").hover(function(){
  $(".rabbit").effect("shake");
})

$( function() {
  $("#draggable").draggable();
} );

$(".blackHole").hover(function() {
  var div1 = $(".blackHole");
  var div2 = $(".rabbit");
  var div1_top = div1.offset().top;
  var div2_top = div2.offset().top;
  var div1_bottom = div1_top + div1.height();
  var div2_bottom = div2_top + div2.height();

  if (div1_bottom >= div2_top && div1_top < div2_bottom) {
    $(".ui-widget-content").effect("scale", {percent: 0});
    $(".rabbit").effect("scale", {percent: 0});
  }
});

// $(".rabbit, .blackHole").detach("touch");

// $(".blackHole").focus(function(){
//   $(".rabbit").effect("scale", {percent: 10});
// });

// ======================================================
// Task 2: (TODO List)

$("#listContainer").css({"background-color": "lightgrey", "width": "300px", "padding": "10px", "margin": "auto"});
$("#addContainer").css({"position": "relative"});
$("#taskAdd").css({"border": "solid 1px grey", "border-radius": "16px", "padding": "8px", "width": "78%"});
$("#addBtn").css({"border": "solid 1px grey", "border-radius": "16px", "padding": "8px", "right": "0", "position": "absolute"});
$("#taskListContainer").css({"margin-top": "10px"});


$("#addBtn").click(function(){
  $("#taskListContainer p").text("");
  var value = $("#taskAdd").val();
  $("ul").append('<li>' + value + '<button id="btnDone">Done</button><button id="btnDel">Del</button></li>');
  $("#taskAdd").val("");
});

$("ul").on('click', '#btnDone', function(){
  $(this).parent("li").css({"background-color": "lightgreen", "width": "100%", "text-decoration": "line-through"});
  $(this).parent("li").children().remove();
  $("#carrot").append("<p>🥕</p>");
});

$("ul").on('click', '#btnDel', function(){
  $(this).parent("li").remove();
});

$("ul").sortable();
$("#carrot").draggable();
$(".rabbit").hover(function() {
  var div1 = $(".rabbit");
  var div2 = $("#carrot");
  var div1_top = div1.offset().top;
  var div2_top = div2.offset().top;
  var div1_bottom = div1_top + div1.height();
  var div2_bottom = div2_top + div2.height();

  if (div1_bottom >= div2_top && div1_top < div2_bottom) {
    $("#carrot").effect("scale", {percent: 0});
  }
});

// $("ul").hover(function(){  
//   $(this).parent("li").css({"background-color": "lightblue"});
//   }, function(){
//   $(this).parent("li").css({"background-color": "white"});
// });

// $(document).on("mouseenter", "li", function() {
//   (this).parent("li").css({"background-color": "lightblue"});
// });

// $(document).on("mouseleave", "li", function() {
//   $(this).parent("li").css({"background-color": "white"});
// });

// $("ul").on({
//   // $(".oneTaskContainer p").css({"background-color": "lightgreen", "width": "100%"}).text(`${value} is Done`);
//   mouseenter: function(){ $(this).parent("li").css({"background-color": "lightblue"});
// },
//   mouseleave: function(){ $(this).parent("li").css({"background-color": "white"});
// }});
// $("#taskAdd").focus(function(){
//   $(this).css({"background-color": "lightblue"});
// });

// creating elements to be generated automatically by clicking addBtn
// var oneTaskContainer = '<div class="oneTaskContainer" style="border: solid 1px red; position: relative; display: flex; align-items: center"></div>';
// var oneTaskText = '<p id="oneTaskText" style="background-color: white; border-radius: 16px; padding: 8px; width: 60%"></p>';
// var btnDone = '<button id="btnDone" style="border: solid 1px grey; border-radius: 16px; padding: 8px; right: 48px; position: absolute">Done</button>';
// var btnDel = '<button id="btnDel" style="border: solid 1px grey; border-radius: 16px; padding: 8px; right: 0; position: absolute">Del.</button>';

// $("#addBtn").click(function(){
//   $("#taskList p").text("");
//   var value = $("#taskAdd").val();
//   // $("#taskList").append('<div class="oneTaskContainer"> <p>' + value + '</p>' + btnDone + btnDel + '</div>');
//   $("#taskList").append('<div class="oneTaskContainer"> <p id="oneTaskText">' + value + '</p><button id="btnDone">Done</button><button id="btnDel">Del</button></div>');
//   $("#taskAdd").val("");
//   // This didn't work, it multiplies the elements within the previous siblings
//   // $("#taskList").append(oneTaskContainer);
//   // $(".oneTaskContainer").append(oneTaskText + btnDone + btnDel);
//   // $(".oneTaskContainer p").text(value);
// });
// $("#taskAdd").hover(function(){
//   $(this).css({"background-color": "lightblue"});
// });
// $("#taskList").on('click', '#btnDone', function(){
//   // $(".oneTaskContainer p").css({"background-color": "lightgreen", "width": "100%"}).text(`${value} is Done`);
//   $(this).parent(".oneTaskContainer").css({"background-color": "lightgreen", "width": "100%", "text-decoration": "line-through"})
//   // .next("#oneTaskText").css({"background-color": "lightgreen", "width": "100%", "text-decoration": "line-through"})
//   // .next("#btnDone").remove()
//   // .next("#btnDel").remove();
// });
// $("#taskList").on('click', '#btnDel', function(){
//   $(this).parent(".oneTaskContainer").remove();
// });



// $("#addBtn").click(function(){
//   $("#taskList p").text("");
//   var value = $("#taskAdd").val();
//   $(oneTaskContainer).clone().appendTo("#taskList");
//   $(oneTaskText).clone().appendTo(".oneTaskContainer").text(value);
//   $(btnDone).clone().appendTo(".oneTaskContainer");
//   $(btnDel).clone().appendTo(".oneTaskContainer");
//   // $(oneTaskContainer).appendTo("#taskList");
//   // $(oneTaskText).appendTo(this.oneTaskContainer).text(value);
//   // $(btnDone).appendTo(this.oneTaskContainer);
//   // $(btnDel).appendTo(this.oneTaskContainer);
//   // $("#btnDone").click(function(){
//   //   // $(".oneTaskContainer p").css({"background-color": "lightgreen", "width": "100%"}).text(`${value} is Done`);
//   //   $(".oneTaskContainer p").css({"background-color": "lightgreen", "width": "100%", "text-decoration-line": "line-through"});
//   //   $("#btnDone").remove();
//   //   // $("#btnDel").remove();
//   // });
//   // $("#btnDel").click(function(){
//   //   $(".oneTaskContainer").remove();
//   // });
//   return oneTaskContainer;
// });

// $(".oneTaskContainer").on('click', '#btnDone', function(){
//   // $(".oneTaskContainer p").css({"background-color": "lightgreen", "width": "100%"}).text(`${value} is Done`);
//   $(".oneTaskContainer p").css({"background-color": "lightgreen", "width": "100%", "text-decoration-line": "line-through"});
//   $("#btnDone").remove();
//   // $("#btnDel").remove();
// });
// $(oneTaskContainer).click(function(){
//   $(".oneTaskContainer").remove();
// });



// $("#addBtn").click(function(){
//   var value = $("#taskAdd").val();
//   $("<div>")
//     .css({"border": "solid 1px red"})
//     .appendTo("#taskList");
//   $("<p>")
//     .css({"background-color": "white", "border-radius": "16px", "padding": "8px", "width": "60%"})
//     .appendTo("#taskList div")  
//     .text(value)
//     ;
//   $("<div>").appendTo("#taskList div");
//   $("<button>").appendTo("#taskList div div");
//   $("<button>").appendTo("#taskList div div");
// })