// Button listener to show new habit form
document.getElementById('btn-add-habit').addEventListener('click',function(){
    document.getElementById('add-habit-form').style.display='block';
    document.getElementById('btn-add-habit').style.display='none';
    document.getElementById('btn-streak').style.display='none';
    
});
// button listener to hide new habit form
document.getElementById('cancel-habit').addEventListener('click',function(){
    document.getElementById('add-habit-form').style.display='none';
    document.getElementById('btn-add-habit').style.display='block';
    document.getElementById('btn-streak').style.display='block';
})
// marking a habit as done
let days = document.getElementsByClassName('btn-change-status');
for(let i=0;i<days.length;i++){
    days[i].style.color="white";
    let icon = document.createElement('i');
    icon.classList.add('fa');
    let text = document.createElement('span');
    if(days[i].innerText=="no"){
        days[i].innerText="";
        icon.classList.add('fa-times');
        days[i].appendChild(icon);
        text.innerText="Not Done "
        text.appendChild(icon);
        days[i].appendChild(text);
        days[i].style.backgroundColor="rgb(242, 118, 109)";
    }else if(days[i].innerText=="yes"){
        days[i].innerText="";
        icon.classList.add('fa-check');
        days[i].appendChild(icon);
        text.innerText="Done "
        text.appendChild(icon);
        days[i].appendChild(text);
        days[i].style.backgroundColor="rgb(69, 204, 105)";
    }else{
        days[i].innerText="";
        icon.classList.add('fa-exclamation');
        days[i].appendChild(icon);
        text.innerText="Pending "
        text.appendChild(icon);
        days[i].appendChild(text);
        days[i].style.backgroundColor="rgb(110, 117, 112)";
    }
    
    console.log(days[i]);
    
}
    