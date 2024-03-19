$(document).ready(function(){
    // console.log("Connected");
    
    $('#signUp').validate({
        rules: {
            firstName: {
                required: true,
            },
            lastName: {
                required: true,
            },
            email: {
                required: true,
                minlength: 6,
                email: true
            },
            password: {
                required: true,
            }
        },
        messages: {
            firstName: {
                required: "First Name cannot be empty",
            },
            lastName: {
                required: "Last Name cannot be empty",
            },
            email: {
                required: "Email cannot be empty",
                email: "Looks like this is not an email",
            },
            password: {
                required: "Password cannot be empty",
            }
        }
    });
    
});
