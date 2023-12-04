// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.signinForm.name.value;
    var email = document.signinForm.email.value;
    var mobile = document.signinForm.mobile.value;
    var password = document.signinForm.password.value;
    
    // Defining error variables with a default value
    var nameErr = emailErr = mobileErr = passwordErr = true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
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
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    //Validate password
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
    if((nameErr || emailErr || mobileErr || passwordErr) == true) {
       return false;
    } 
};