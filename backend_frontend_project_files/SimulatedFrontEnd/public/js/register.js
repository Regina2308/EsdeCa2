let $registerFormContainer = $('#registerFormContainer');
if ($registerFormContainer.length != 0) {
    console.log('Registration form detected. Binding event handling logic to form elements.');
    //If the jQuery object which represents the form element exists,
    //the following code will create a method to submit registration details
    //to server-side api when the #submitButton element fires the click event.
    $('#submitButton').on('click', function(event) {
        event.preventDefault();
        const baseUrl = 'http://localhost:5000';
        let fullName = $('#fullNameInput').val();
        let email = $('#emailInput').val();
        let password = $('#passwordInput').val();
        let webFormData = new FormData();
        webFormData.append('fullName', fullName);
        webFormData.append('email', email);
        webFormData.append('password', password);
    
        axios({
            method: 'post',
            url: baseUrl + '/api/user/register',
            data: webFormData,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(function (response) {
                //Handle success
                console.dir(response);
                new Noty({
                    type: 'success',
                    timeout: '6000',
                    layout: 'topCenter',
                    theme: 'bootstrap-v4',
                    text: 'You have registered. Please <a href="login.html" class=" class="btn btn-default btn-sm" >Login</a>',
                }).show();
            })
            .catch(function (response) {
                //Handle error
                console.dir(response);
                new Noty({
                    timeout: '6000',
                    type: 'error',
                    layout: 'topCenter',
                    theme: 'sunset',
                    text: 'Unable to register.',
                }).show();
            });
    });

    // var password = document.getElementById("password");
    // var letter = document.getElementById("letter");
    // var capital = document.getElementById("capital");
    // var number = document.getElementById("number");
    // var length = document.getElementById("length");
    // // When the user clicks on the password field, show the message box
    // myInput.onfocus = function () {
    //     document.getElementById("message").style.display = "block";
    // }

    // // When the user clicks outside of the password field, hide the message box
    // myInput.onblur = function () {
    //     document.getElementById("message").style.display = "none";
    // }

    // // When the user starts to type something inside the password field
    // myInput.onkeyup = function () {
    //     // Validate lowercase letters
    //     var lowerCaseLetters = /[a-z]/g;
    //     if (myInput.value.match(lowerCaseLetters)) {
    //         letter.classList.remove("invalid");
    //         letter.classList.add("valid");
    //     } else {
    //         letter.classList.remove("valid");
    //         letter.classList.add("invalid");
    //     }

    //     // Validate capital letters
    //     var upperCaseLetters = /[A-Z]/g;
    //     if (myInput.value.match(upperCaseLetters)) {
    //         capital.classList.remove("invalid");
    //         capital.classList.add("valid");
    //     } else {
    //         capital.classList.remove("valid");
    //         capital.classList.add("invalid");
    //     }

    //     // Validate numbers
    //     var numbers = /[0-9]/g;
    //     if (myInput.value.match(numbers)) {
    //         number.classList.remove("invalid");
    //         number.classList.add("valid");
    //     } else {
    //         number.classList.remove("valid");
    //         number.classList.add("invalid");
    //     }

    //     // Validate length
    //     if (myInput.value.length >= 8) {
    //         length.classList.remove("invalid");
    //         length.classList.add("valid");
    //     } else {
    //         length.classList.remove("valid");
    //         length.classList.add("invalid");
    //     }
    // }

} //End of checking for $registerFormContainer jQuery objects