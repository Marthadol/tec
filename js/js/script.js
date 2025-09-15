console.log('we are click')

document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault(); // stop default form submission
      
      // Get form values
      let password = document.getElementById("password").value;
      let email = document.getElementById("email").value;

      if( password && email) {
        alert("Login Successful ✅");
        // Redirect after success
        location.assign('./cbt.html')
      } else {
        alert("incorrect input ❌");
      }
    });