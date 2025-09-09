//input get element by Id
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  console.log('we are been clicked')
  // console.log(navContainer)
})



console.log('we are click')
const emailEle = document.getElementById("email");
const passwordEle = document.getElementById("password");
const ageEle = document.getElementById("age");
const registerBtn = document.getElementById("register");

sessionStorage.setItem("email", "adeyenimarthadol@gmail.com");
sessionStorage.setItem("password","12345");
sessionStorage.setItem("age","23");

//extraction from the data base
const emailDb = sessionStorage.getItem("email");
const passwordDb = sessionStorage.getItem("password");
const ageDb = parseInt(sessionStorage.getItem("age"));

//register button
registerBtn.addEventListener("click", (event)=>{
    event.preventDefault();    
    //extraction form the user inputs
    const email = emailEle.value;
    const password = passwordEle.value;
    const age = parseInt(ageEle.value);
    
    if(email === emailDb && password === passwordDb && age === ageDb ){
        location.assign("http://127.0.0.1:5502/cbt.html");
    }else {
        alert("Invalid details");
           }

});

