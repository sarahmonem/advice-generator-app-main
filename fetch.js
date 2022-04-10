let adviceid = document.getElementById("advice-id")
let advice = document.getElementById("adv")


  function getAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then(function (res) {
      return res.json()
    })
    .then((data) => {
    console.log(data);
  let obj = data.slip
  console.log(obj);
  adviceid.innerHTML = obj.id
  advice.innerHTML = obj.advice
    })
  }