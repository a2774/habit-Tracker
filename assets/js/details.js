
// getting month and year
let month = moment().format("MMMM YYYY");
document.getElementById('month-name').innerText=month;

// showing week days using momentjs
var weekDays = document.getElementsByClassName('day-name');
for(let i=0;i<weekDays.length;i++){
    if(i==0){
        weekDays[i].innerText="Today/"+moment().subtract(i, 'days').format("Do");
        weekDays[i].style.fontWeight="700";
    }else{
        weekDays[i].innerText=moment().subtract(i, 'days').format("ddd/Do");
    }
}
// changing status design of the data i.e(pending,done,not done)
let days = document.getElementsByClassName('days');
days[0].style.fontWeight="700";
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
    
    
}
