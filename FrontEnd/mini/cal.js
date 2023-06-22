var btn = document.getElementsByClassName('btn');
var para = document.getElementById('para');
var ev =" ";
for(var i = 0; i < btn.length; i++){
    btn[i].addEventListener('click',function(){
        var value=this.getAttribute('data-value');
        if(value == '+'){
            ev = ev + "+";
            para.innerHTML=ev;
        }
        else if(value=='-'){
            ev = ev + '-';
            para.innerHTML=ev;
        }
        else if(value=='*'){
            ev = ev + '*';
            para.innerHTML=ev;
        }
        else if(value=='/'){
            ev = ev + '/';
            para.innerHTML=ev;
        }
        else if(value=='%'){
            ev = ev + '%';
            para.innerHTML=ev;
        }
        else if(value=='='){
            // var tot = eval(ev);
            ev = eval(ev);
            para.innerHTML= ev;
        }
        else if(value=='.'){
            ev = ev + '.';
            para.innerHTML= ev;
        }
        else if(value=='ac'){
            ev = " ";
            para.innerHTML= ev;
        }
        else{
            ev = ev + value;
            para.innerHTML=ev;
        }
    });
}


