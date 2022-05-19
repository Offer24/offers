$(document)["ready"]
(function(){$(".question1 a")["click"](function(){$(this)["parent"]()["slideUp"]();
$(".mainquestion")["slideUp"](400);
$(".question2")["fadeIn"](400)});

$(".question2 a")["click"](function(){$(this)["parent"]()["slideUp"]();
$(".question3")["fadeIn"](400)});

$(".question3 a")["click"](function(){$(this)["parent"]()["slideUp"]();
$(".question4")["fadeIn"](400)});

$(".question4 a")["click"](function(){$(this)["parent"]()["slideUp"]();
$(this)["parent"]()["slideUp"]();

$(".check1")["fadeIn"]("fast");
$(".check1, .intro")["delay"](4000)["hide"](1);
$(".headerq")["delay"](4000)["slideUp"]();
$(".check2")["delay"](4500)["fadeIn"]();
$(".testimonials")["delay"](5000)["fadeIn"]()})});