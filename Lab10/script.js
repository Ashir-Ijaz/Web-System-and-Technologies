// 1. Hide all <a> elements
$("a").hide();

// 2. Hide element with id="test"
$("#test").hide();

// 3. Hide elements with class="test"
$(".test").hide();

// 4. Hide <a> elements on double-click
$("a").on("dblclick", function() {
    $(this).hide();
});

// 5. Animate div properties
$("div").animate({
    opacity: 0.2,
    height: "600px", 
    width: "600px"
});

// 6. Add classes to <a> elements
$("a").addClass("important test");

// 7. Set div height and width
$("div").height(500);
$("div").width(500);

// 8. Get div outer height
var divHeight = $("div").outerHeight();
console.log("Div height including padding and border: " + divHeight);

// 9. Click handler for <a> elements
$("a").on("click", function() {
    console.log("Link clicked!");
});

// 10. Animate div movement
$("div").animate({
    left: "300px"
});
