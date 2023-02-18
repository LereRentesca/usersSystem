function User(firstName,lastName,age,email,password){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.password = password;
}

function validation(user){
    let valid = true;

    if(user.email==""){
        valid=false;
        if(!valid){
            $("#inputEmail").addClass("alert-error");
            setTimeout(function(){
                $("#inputEmail").removeClass("alert-error");
            },5000);
        }
    }

    if(user.firstName==""){
        valid=false;
        if(!valid){
            $("#inputFirstName").addClass("alert-error");
            setTimeout(function(){
                $("#inputFirstName").removeClass("alert-error");
            },5000);
        }
    }

    if(user.lastName==""){
        valid=false;
        if(!valid){
            $("#inputLastName").addClass("alert-error");
            setTimeout(function(){
                $("#inputLastName").removeClass("alert-error");
            },5000);
        }
    }

    if(user.age==""&&user.age==0){
        valid=false;
        if(!valid){
            $("#inputAge").addClass("alert-error");
            setTimeout(function(){
                $("#inputAge").removeClass("alert-error");
            },5000);
        }
    }

    if(user.password==""){
        valid=false;
        if(!valid){
            $("#inputPassword").addClass("alert-error");
            setTimeout(function(){
                $("#inputPassword").removeClass("alert-error");
            },5000);
        }
    }

    return valid;
}

function register(){
    let inputFirstName = $('#inputFirstName').val();
    let inputLastName = $('#inputLastName').val();
    let inputAge = $('#inputAge').val();
    let inputEmail = $('#inputEmail').val();
    let inputPassword = $('#inputPassword').val();

    let newUser = new User(inputFirstName,inputLastName,inputAge,inputEmail,inputPassword);

    if(validation(newUser)){
        $("input").val('');
        saveUser(newUser);
        window.location.replace("../index.html");
    }
}

function validatePass(){
    let inputPassword = $("#inputPassword");
    let password = inputPassword.val();
    if(password.length<6){
        inputPassword.css("border","1px solid red");
    } else{
        inputPassword.css("border","1px solid green");
    }
}

function init(){
    $('#btnSubmit').click(register);
    $("#inputPassword").keyup(validatePass);
}
window.onload=init;