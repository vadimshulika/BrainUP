let timer_time = 1; 
let timerShow = document.getElementById("timer");

function start () {
  timeMinut = timer_time * 60
  timer = setInterval(function () {
    seconds = timeMinut%60
    minutes = timeMinut/60%60
    hour = timeMinut/60/60%60
    if (timeMinut <= 0) {
        get_result()
        document.location.href = "index.html";
    } else {
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        timerShow.innerHTML = " " + strTimer;
    }
    --timeMinut; 
  }, 1000)
  
}

function get_result (){
  count = 0;
  let number1 = document.getElementById("number1").value;
  console.log(number1)
  let number2 = document.getElementById("number2").value;
  let number3 = document.getElementById("number3").value;
  let number4 = document.getElementById("number4").value;
  let number5 = document.getElementById("number5").value;
  let number6 = document.getElementById("number6").value;
  let number7 = document.getElementById("number7").value;
  let number8 = document.getElementById("number8").value;
  let number9 = document.getElementById("number9").value;
  let number10 = document.getElementById("number10").value;
  
  if (number1.toLowerCase() == "крапива") {
    count += 1
  }
  if (number2.toLowerCase() == "иволга") {
    count += 1
  }
  if (number3.toLowerCase() == "на часы") {
    count += 1
  }
  if (number4.toLowerCase() == "одинаково") {
    count += 1
  }
  if (number5.toLowerCase() == "пух") {
    count += 1
  }
  if (number6.toLowerCase() == "свет") {
    count += 1
  }
  if (number7.toLowerCase() == "сосульки") {
    count += 1
  }
  if (number8.toLowerCase() == "рыбы") {
    count += 1
  }
  if (number9.toLowerCase() == "5" || number9.toLowerCase() == "5 рублей") {
    count += 1
  }
  if (number10.toLowerCase() == "число" || number10.toLowerCase() == "997") {
    count += 1
  }
  alert("Ваш резулитат: " + count + " баллов")
}
start()

