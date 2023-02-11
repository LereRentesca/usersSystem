//JS vs JQuery
//Select an html element and hide it

//Hiding by Id

// let inputCheckbox = document.getElementById("exampleCheck1");
// inputCheckbox.style.display="none";

// let checkboxLabel = $("#checkLabel");
// checkboxLabel.hide();

//Hiding by TagName

// let labels = document.getElementsByTagName("label");
// for (const iterator of labels) {
//     iterator.style.display="none";
// }

// $("label").hide();

//Hiding by ClassName

// let className = document.getElementsByClassName("form-check");
// for (const iterator of className) {
//     iterator.style.display="none";
// }

// $(".form-check").hide();

$("#btnSubmit").click(example);
function example() {
    $("#form").hide();
}
