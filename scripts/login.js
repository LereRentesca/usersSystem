function login(){
    let user = $("#txtUsername").val();
    let pass = $("#txtPassword").val();
    let flag=true;
    console.log(user,pass);
    $("input").val('');

    let registerdUsers = readUsers();
    if(registerdUsers==""){
        $(".alert-warning").removeClass("hide");
        setTimeout(function(){
            $(".alert-warning").addClass("hide");
        },5000);
    }
    for (const item of registerdUsers) {
        if(user==item.email&&pass==item.password){
            flag=true;
            console.log("You're in!");
            window.location.replace("../pages/users.html");
        } else{
            flag=false;
            console.log("Wrong Password!");
        }
    }
    if(!flag){
        $(".alert-error").removeClass("hide");
        setTimeout(function(){
            $(".alert-error").addClass("hide");
        },5000);
    }
}

$("#loginBtn").click(login);