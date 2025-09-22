var a=Number(prompt("enter value  a is"));
var b=Number(prompt("enter value of b is"));
function add(){

document.writeln(alert(a+b));
}
function mul(){

document.writeln(alert(a*b));
}
function sub(){

document.writeln(alert(a-b));
}
function div(){

document.writeln(alert(a/b));
}

const button = document.getElementById("Add");

// Attach event listener to the button for 'click' event
button.addEventListener("click", add);
button.addEventListener("click", mul);
button.addEventListener("click", sub);
button.addEventListener("click", div);

