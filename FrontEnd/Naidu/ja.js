// var div1 = document.getElementById('div1');
// div1.addEventListener('mouseover',function(){
// 	console.log("mouse");

// });
// div1.addEventListener('mouseout',function(){
// 	console.log("mouseout");

// });
// var ser = document.getElementById('ser');
// ser.addEventListener('keypress',function (nai){
// 	console.log('keypress', nai.keyCode);
// })
var div1 = document.getElementById('div1');
var i = 0;
div1.addEventListener('click',function(event){
	++i;
	document.getElementById('man').innerHTML = i;
});
