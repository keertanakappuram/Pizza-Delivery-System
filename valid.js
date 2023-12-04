// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var email = document.loginForm.email.value;
    var password = document.loginForm.password.value;
    
    // Defining error variables with a default value
    var emailErr = passwordErr = true;
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

      if(password == "") {
        printError("passwordErr", "Please enter your password");
    } else {
        var regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        if(regex.test(password) === false) {
            printError("passwordErr", "The password must contain atleast 8 characters");
        } else{
            printError("passwordErr", "");
            passwordErr = false;
        }
    }
    
    // Prevent the form from being submitted if there are any errors
    if((emailErr || passwordErr) == true) {
       return false;
    }
};