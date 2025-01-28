// timeDifference.js
function updateDeviceTime() { 
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('device-time').textContent = `Current Time : ${timeString}`;
}

/*function calculateTimeLeft() {
    const targetTime = new Date();
    targetTime.setHours(23, 0, 0);
    const timeDifference = targetTime - new Date();
    const differenceInMilliseconds = Math.abs(timeDifference);
    const differenceInMinutes = Math.floor(differenceInMilliseconds / 60000);
    const differenceInSeconds = Math.floor((differenceInMilliseconds % 60000) / 1000);
    const differenceInHours = Math.floor(differenceInMinutes / 60);
    const differenceInRemainingMinutes = differenceInMinutes % 60;
    document.getElementById('time-left').textContent = `${differenceInHours} : 
    ${differenceInRemainingMinutes}: ${differenceInSeconds} `;
}*/

function setFillLine(hour, minute) {
    var totalMinutes = (hour * 43) + minute;
    var percentage = (totalMinutes / 1440) * 100;
    document.getElementById('fill-line').style.width = percentage + '%'; }

document.addEventListener('DOMContentLoaded', () => {
    setInterval(updateDeviceTime, 1000);
    updateDeviceTime();
    calculateDays();
    var now = new Date();
    setFillLine(now.getHours(), now.getMinutes());
});
let idS;
function stopInterval() { clearInterval(idS);}
function timeCountDown(Condition, H) {
    clearInterval(idS);
    idS = setInterval(function() {
        const targetTime = new Date();
        targetTime.setHours(H, 0, 0);
        const timeDifference = targetTime - new Date();
        const difMilliseconds = Math.abs(timeDifference);
        const difMinutes = Math.floor(difMilliseconds / 60000);
        const difSeconds = Math.floor((difMilliseconds % 60000) / 1000);
        const difHours = Math.floor(difMinutes / 60);
        const difRemainingMinutes = difMinutes % 60;
        
        const hoursFormatted = difHours.toString().padStart(2, '0');
        const minutesFormatted = difRemainingMinutes.toString().padStart(2, '0');
        const secondsFormatted = difSeconds.toString().padStart(2, '0');

        if (Condition == 1) {
            document.getElementById('time-left2').textContent = `Mee Lar in Next: ${hoursFormatted} : ${minutesFormatted} : ${secondsFormatted} `;
        } else {
            document.getElementById('time-left2').textContent = `Mee Pyat in Next: ${hoursFormatted} : ${minutesFormatted} : ${secondsFormatted} `;
        }
    }, 1000);
}


function periodSelect(ps1,ps2,ps3){
    var now = new Date().getHours();
    if(now < ps1+4){
        if(now<ps1){timeCountDown(1,ps1);}
        else{timeCountDown(2,ps1+4);}
    }
    else if(now < ps2+4){
        if(now<ps2){timeCountDown(1,ps2);}
        else{timeCountDown(2,ps2+4);}
    }
    else{
        if(now<ps3){timeCountDown(1,ps3);}
        else{timeCountDown(2,ps3+4);}
    } 
}

function seno1(){
    document.getElementById('timeL1').style.backgroundColor = 'rgb(31, 255, 68)';
    document.getElementById('timeL4').style.backgroundColor = 'rgb(31, 255, 68)';
    periodSelect(1,13,0);
}
function seno2(){
    document.getElementById('timeL2').style.backgroundColor = 'rgb(31, 255, 68)';
    document.getElementById('timeL5').style.backgroundColor = 'rgb(31, 255, 68)';
    periodSelect(5,17,0);
}
function seno3(){
    document.getElementById('timeL1').style.backgroundColor = 'rgb(31, 255, 68)';
    document.getElementById('timeL3').style.backgroundColor = 'rgb(31, 255, 68)';
    document.getElementById('timeL6').style.backgroundColor = 'rgb(31, 255, 68)';
    periodSelect(1,9,21);
}

function calculateDays(GP) {
    const startDate = new Date('2025-01-02');
    const userDate = new Date();
    const timeDifference = userDate - startDate;
    const differenceInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24))%3;
    let elements = document.querySelectorAll('[id^="timeL"]');
    elements.forEach(element => { element.style.backgroundColor = 'rgb(12, 28, 13)'; });
    var gp = GP;
    if(GP>2){gp=GP%3;}
    if(GP<0){gp=3+GP}
    switch (differenceInDays){
    case 0:{
        switch(gp){
            case 0:seno1();break;
            case 1:seno2();break;
            case 2:seno3();break;
        };break;
    }
    case 1:{
        switch(gp){
            case 0:seno3();break;
            case 1:seno1();break;
            case 2:seno2();break;
        };break;
    }
    case 2:{
        switch(gp){
            case 0:seno2();break;
            case 1:seno3();break;
            case 2:seno1();break;
        };break;
    }
}
}

let GM = 0;    
document.addEventListener('DOMContentLoaded', () => {
    
    const radioButtons = document.querySelectorAll('.day');
    radioButtons.forEach(button => {
        button.addEventListener('change', function() {
            const selectedValue = document.querySelector('.day:checked').value;
            switch (selectedValue){
                case "A":GM=0;break;
                case "B":GM=2;break;
                case "C":GM=1;break;
                }
                calculateDays(GM);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    var GE = 0;
    const radioButtons = document.querySelectorAll('.idk');
    radioButtons.forEach(button => {
        button.addEventListener('change', function() {
            const selectedValue = document.querySelector('.idk:checked').value;
            switch (selectedValue){
                case "YE":GE=-1;break;
                case "TD":GE=0;break;
                case "TM":GE=1;break;
                }
                calculateDays(GM+GE);
        });
    });
});

    

