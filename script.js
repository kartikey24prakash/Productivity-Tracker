var allelem=document.querySelectorAll(`.elem`)
var fullElemPage=document.querySelectorAll(`.fullElem`)
var FullElemPageBackBtm=document.querySelectorAll(`.fullElem .back`)
allelem.forEach(function(elem){
    elem.addEventListener(`click`,function(){
     fullElemPage[elem.id].style.display='block';

    });
})

FullElemPageBackBtm.forEach(function(back){

    back.addEventListener(`click`,function(){
        console.log(back.id);
        fullElemPage[back.id].style.display='none';

    });
});