$(document)["ready"]
(function(){
$(".question1 a")["click"](function(){$(this)["parent"]()["slideUp"]();
$(".mainquestion")["slideUp"](400);
$(".check1")["fadeIn"]("fast");
$(".check1, .intro")["delay"](4000)["hide"](1);
$(".headerq")["delay"](4000)["slideUp"]();
$(".check2")["delay"](4500)["fadeIn"]();
$(".testimonials")["delay"](5000)["fadeIn"]()
})});