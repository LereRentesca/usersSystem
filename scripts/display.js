function display(usersArray){
    const TABLE = $("#users");
    let tr="";
    let i=0;
    for (const item of usersArray) {
        i++;
        tr=`
        <tr>
            <th scope="row">${i}</th>
            <td>${item.email}</td>
            <td>${item.password}</td>
            <td>${item.firstName}</td>
            <td>${item.lastName}</td>
            <td>${item.age}</td>
            <td>${item.gender}</td>
            <td style="background-color:${item.color}"></td>
            <td>${item.payment}</td>
        </tr>`;
        TABLE.append(tr);
    }
}

function back(){
    window.location.replace("../index.html");
}

$("#backBtn").click(back);

function initDisplay(){
    console.log("Listing users....");
    let users = readUsers();
    display(users);
    console.log(users);
}
window.onload=initDisplay;