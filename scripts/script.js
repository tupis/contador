//Buttons
const startCounter = document.getElementById("startCounter");
const restart = document.getElementById("restart");

//Elements
const inputDataElement = document.querySelector(".input-data");
const counter = document.querySelector(".counter");

//Span (Outputs)
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// ano - mes - dia T hora - minutos - segundos UTF -03:00
//YYYY-MM-DDTHH:MM:SS-03:00
let inputDate;
let stringDate = `${inputDate}T00:00:00-03:00`;

function takeDate(){
    const date = new Date();
    const inputDateButton = document.getElementById("date").value;
    
    inputDate = inputDateButton;
    stringDate = `${inputDateButton}T00:00:00-03:00`;
    
    
    if(date > new Date(stringDate)){
        window.alert("por favor insira uma data válida");
    }else{
        inputDataElement.classList.toggle("hide-input-data")
        counter.classList.toggle("show-counter")
    };
    playDate();
}    

function playDate(){
    const today = new Date();
    const tomorrow = {
        day: () => {
            if(String(today.getDate() + 1).length == 2){
                return today.getDate() + 1
            }else if(String(today.getDate()).length == 1){
                return `0${today.getDate() + 1}`
            }else{
                return today.getDate() + 1
            }
        },
        month: () => {
            if(String(today.getMonth() + 1).length == 2){
                return today.getMonth() + 1
            }else if(String(today.getMonth() + 1).length == 1){
                return `0${today.getMonth() + 1}`
            }else{
                return today.getMonth() + 1
            }
        },
        //fazer condicional pro ultimo dia do ano
        year: today.getFullYear(),
    };
    const todayMidNight = new Date(`${tomorrow.year}-${tomorrow.month()}-${tomorrow.day()}T23:59:59-03:00`)
    const dateInput = new Date(stringDate);
    
    const result = {
        seconds: () => {
            if(String(todayMidNight.getSeconds() - today.getSeconds()).length == 2){
                return `${todayMidNight.getSeconds() - today.getSeconds()}`
            }else if(String(todayMidNight.getSeconds() - today.getSeconds()).length == 1){
                return `0${todayMidNight.getSeconds() - today.getSeconds()}`
            }
        },
        minutes: () => {
            if(String(todayMidNight.getMinutes() - today.getMinutes()).length == 2){
                return `${todayMidNight.getMinutes() - today.getMinutes()}`
            }else if(String(todayMidNight.getMinutes() - today.getMinutes()).length == 1){
                return `0${todayMidNight.getMinutes() - today.getMinutes()}`
            }
        },
        hours: () => {
            if(String(todayMidNight.getHours() - today.getHours()).length == 2){
                return `${todayMidNight.getHours() - today.getHours()}`
            }else if(String(todayMidNight.getHours() - today.getHours()).length == 1){
                return `0${todayMidNight.getHours() - today.getHours()}`
            }
        },
        days: () => {
            if(String(((dateInput - new Date()) / 1000 / 60 / 60 / 24).toFixed(0)).length == 2){
                return `${((dateInput - new Date()) / 1000 / 60 / 60 / 24).toFixed(0)}`
            }else if(String(((dateInput - new Date()) / 1000 / 60 / 60 / 24).toFixed(0)).length == 1){
                return `0${((dateInput - new Date()) / 1000 / 60 / 60 / 24).toFixed(0)}`
            }else{
                return `${((dateInput - new Date()) / 1000 / 60 / 60 / 24).toFixed(0)}`
            }
        },
    };

    days.innerHTML = `${result.days()}`
    hours.innerHTML = `${result.hours()}`;
    minutes.innerHTML = `${result.minutes()}`;
    seconds.innerHTML = `${result.seconds()}`;
    
    requestAnimationFrame(playDate);
}

startCounter.addEventListener("click", takeDate)

restart.addEventListener("click", ()=>{
    inputDataElement.classList.toggle("hide-input-data")
    counter.classList.toggle("show-counter")
});