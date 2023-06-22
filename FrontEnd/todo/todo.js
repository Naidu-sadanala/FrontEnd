let input= document.getElementById("input");
let btn = document.getElementById("btn");
let changes= document.getElementById("changes");


btn.addEventListener('click',function(){
    var check = document.createElement("input");
    check.setAttribute("type","checkbox");
    changes.appendChild(check);
    var list = document.createElement('ls');
    var para = document.createElement('p');
    list.innerText = input.value;
    setTimeout.innerText="";
    changes.appendChild(list);
    changes.appendChild(para);
    input.value = "";
    check.addEventListener('click',function(){
        list.style.textDecoration="line-through";
        list.style.textDecorationColor="black";
        check.addEventListener('click',function(){
            list.style.textDecoration="none";
        });
    });
    check.addEventListener('dblclick',function(){
        changes.removeChild(para);
        changes.removeChild(check);
        changes.removeChild(list);
    });
});


