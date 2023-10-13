// Created by Hygyjffghy Studios, all rights reserved. \\
// September, 2023                                     \\

// Hey Judah, please see the list of correct logins below. Secure, am I right?



// Logins \\
const logins = [
    {
        Email: "jogbusiness17@gmail.com",
        Password: "JogosSoftware23"
    },
    {
        Email: "andrewccountryman@gmail.com",
        Password: "IntrigueDev23"
    },
    {
        Email: "BraydenCattaneo@gmail.com",
        Password: "Commie☭☭☭"
    }
]

// 2FA Code \\
const TwoFactorAuthCode = "6481023";

// Wait \\
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Send 2FA Codes (Yes Judah, it actually works) \\
function sendCodes(sendEmail) {
    console.log("Sending Mail")

    var data = {
        service_id: 'service_y4ce2nh',
        template_id: 'template_p8t3wbe',
        user_id: "FYD0oVK-s3Z0JAxiT",
        template_params: {
            'email': sendEmail
        }
    }

    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: "application/json"
    }).done(function() {
        console.log("Sent, YAY");
    }).fail(function() {
        console.log("Well frick");
    })

}

function loginattempt() {
    var EmailInput = document.getElementById("emailinput").value;
    var PasswordInput = document.getElementById("passwordinput").value;
    var SigninDiv = document.getElementById("signin")
    var VerifyDiv = document.getElementById("verify")

    var login_info = false;

    if (EmailInput !== "" && PasswordInput !== "") {
        logins.forEach(function(row) {
            if (row.Email === EmailInput && row.Password == PasswordInput) {
                login_info = true;
                

                SigninDiv.style.display = "none";

                VerifyDiv.style.display = "block";
                

                //sendCodes(document.getElementById("emailinput").value);
            } 

            
        })
        
        if (login_info === false) {
            alert("Incorrect username or password.");
        }
    }
    
}

function twofa() {
    
    var verificationinput = document.getElementById("verificationinput").value;
    var invalidcode = document.getElementById("invalidcode")

    if (verificationinput !== "") {
        
        
        if (verificationinput === TwoFactorAuthCode) {
            console.log("WOAH");
            location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
            //
        } else {
            invalidcode.style.display = "block";
        }
    }
}

function resendCode() {
    //sendCodes();
    console.log(document.getElementById("emailinput").value);
    document.getElementById("resendcode").style.display = "none";
}