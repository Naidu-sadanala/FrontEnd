trav = document.getElementsByClassName('anch');
for(let i =0;i<trav.length;i++){
    trav[i].addEventListener('click',function(event){
        event.preventDefault();
        var val = this.getAttribute('value');
        let start =0;
        var inter = setInterval(function(){
            if(start>=val){
                clearInterval(inter);
            }
            window.scrollBy(0,10);
            start+=10;
    },20);
    });
}
