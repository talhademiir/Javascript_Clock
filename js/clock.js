const name=prompt("Lütfen adınızı giriniz: ")
let nameInfo=document.querySelector("#myName")
nameInfo.innerHTML = `${name.length > 0 ? name : alert("İsminizi Giriniz.")}`

function showTime(){
    const date = new Date().toLocaleString()
    let myClock = document.querySelector ("#myClock")
    myClock.innerHTML = `${date}`
}

setInterval(function(){
    showTime();
},1000);