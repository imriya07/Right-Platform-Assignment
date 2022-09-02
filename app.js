
var countDownDate = new Date(new Date(new Date().getTime() + 60 * 60 * 24 * 1000)).getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days
  document.getElementById("hours").innerHTML = hours
  document.getElementById("minutes").innerHTML = minutes
  document.getElementById("seconds").innerHTML = seconds

}, 1000);

const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#pwd');
  const pass = document.querySelector('#pwd2332');


  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    pass.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
    
});

function add(value){
  const password = document.querySelector('#pwd');
  const pass = document.querySelector('#pwd2332');
  if(password.value === pass.value){
    alert("password  match");
  }
  else{
    alert("password not match")
  }
}
