console.log('we are click')

document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault(); // stop default form submission
      
      // Get form values
      let age = document.getElementById("age").value;
      let password = document.getElementById("password").value;
      let email = document.getElementById("email").value;

      if(age && password && email) {
        alert("Login Successful ✅");
        // Redirect after success
        location.assign('http://127.0.0.1:5502/cbt.html')
      } else {
        alert("incorrect input ❌");
      }
    });