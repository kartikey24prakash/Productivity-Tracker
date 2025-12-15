function openFeature(){
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
}
openFeature();


let form= document.querySelector(`.addTask form`);
let taskInput =document.querySelector('.addTask form #task-input');
let taskDetailsInput =document.querySelector('.addTask form textarea');
let taskCheckbox =document.querySelector('.addTask form #check');

var currentTask=[]

if(localStorage.getItem('currentTask')){
    currentTask = JSON.parse(localStorage.getItem('currentTask'));
}
else{
    console.log("current task is empty")
}

function renderTask(){
    var allTask=document.querySelector('.allTask');

    var sum =''

    currentTask.forEach(function(elem){

        sum =sum + `<div class="task">
        <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
        <button>Mark As Completed</button>
        </div>`
    })
    allTask.innerHTML = sum
}
renderTask();
form.addEventListener('submit',function(e){
    e.preventDefault();
    // console.log(taskDetailsInput);
    currentTask.push
    (
        {
            task:taskInput.value,
            details:taskDetailsInput.value,
            imp:taskCheckbox.checked
        }
    );

    localStorage.setItem('currentTask',JSON.stringify(currentTask));

    taskInput.value=''
    taskDetailsInput.value=''
    taskCheckbox.checked=false
    renderTask();
    // console.log(currentTask);
})
