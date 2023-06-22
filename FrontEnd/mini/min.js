function nai(){
    var a = document.getElementById('input');
    var val = a.getAttribute('value');
    var b = document.getElementsByClassName('div3');
    var i = 0;
    const inn = setInterval(function(){
        console.log(i);
        if(i%2!=0){
            // b[1].textContent=i;
            b[1].style.span.color="blue";
        }
        else{
            b[0].innerHTML=i;
        }
        if(i==val){
            clearInterval(inn);
        }
         i++;   
        },3000);
}
