function saveUser(user){
    let oldUsers = readUsers();
    oldUsers.push(user);
    let val = JSON.stringify(oldUsers);
    localStorage.setItem("users",val);
}

function readUsers(){
    let users = localStorage.getItem("users");
    if(!users){
        return [];
    } else{
        let listUser = JSON.parse(users)
        return listUser;
    }
}