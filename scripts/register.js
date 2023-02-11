function User(firstName,lastName,age,email,password){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.password = password;
}

function register(){
    let inputFirstName = $('#inputFirstName').val();
    let inputLastName = $('#inputLastName').val();
    let inputAge = $('#inputAge').val();
    let inputEmail = $('#inputEmail').val();
    let inputPassword = $('#inputPassword').val();

    let newUser = new User(inputFirstName,inputLastName,inputAge,inputEmail,inputPassword);
    console.log(newUser);
}

function clear() {
    $("input").val('');
}

function init(){
    $('#btnSubmit').click(register);
    $('#btnSubmit').click(clear);
}
window.onload=init;