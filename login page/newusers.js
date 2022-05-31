var users = async () => {
  const response = await fetch("https://reqres.in/api/users?page=2", {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const res = await response.json();
  const userlist = JSON.stringify(res);
  var user_Data = JSON.parse(userlist);
  var user_Obj = user_Data["data"];
  console.log(user_Obj);
  for (var i = 0; i < user_Obj.length; i++) {
    var table = document
      .getElementById("employeeList")
      .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = user_Obj[i].email;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = user_Obj[i].first_name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = user_Obj[i].last_name;
    myImg = document.createElement("img");
    myImg.src = user_Obj[i].avatar;
    myImg.className = "img_User";
    myImg.style = "width: 128px; height: 128px";
    cell4 = newRow.insertCell(3).appendChild(myImg);
    cell4.innerHTML = myImg;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                         <a onClick="onDelete(this)">Delete</a>`;
  }
};
users();

var selectedRow = null;

function onFormSubmit() {
    url = document.getElementById("Image").value;
    const email = emailvalidation();
    const urlimg =  is_url(url);
    if (email != true && urlimg == true){
        document.getElementById("urlValidationError").innerHTML= "";
    }
  if (email == true && urlimg == true) {
    document.getElementById("urlValidationError").innerHTML= "";
    var formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
  }
}

function readFormData() {
  var formData = {};
  formData["email"] = document.getElementById("Email_Id").value;
  formData["firstName"] = document.getElementById("First_Name").value;
  formData["lastName"] = document.getElementById("Last_Name").value;
  formData["Image"] = document.getElementById("Image").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.email;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.firstName;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.lastName;
  myImg = document.createElement("img");
  myImg.src = data.Image;
  myImg.className = "img_User";
  myImg.style = "width: 128px; height: 128px";
  cell4 = newRow.insertCell(3).appendChild(myImg);
  cell4.innerHTML = myImg;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById("Email_Id").value = "";
  document.getElementById("First_Name").value = "";
  document.getElementById("Last_Name").value = "";
  document.getElementById("Image").value = "";
  selectedRow = null;
}

function onEdit(td) {
    document.getElementById("urlValidationError").innerHTML= "";
  selectedRow = td.parentElement.parentElement;
  document.getElementById("Email_Id").value = selectedRow.cells[0].innerHTML;
  document.getElementById("First_Name").value = selectedRow.cells[1].innerHTML;
  document.getElementById("Last_Name").value = selectedRow.cells[2].innerHTML;
  document.getElementById("Image").value = selectedRow.cells[3].children[0].src;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.email;
  selectedRow.cells[1].innerHTML = formData.firstName;
  selectedRow.cells[2].innerHTML = formData.lastName;
  selectedRow.cells[3].innerHTML = "";
  myImg = document.createElement("img");
  myImg.src = formData.Image;
  myImg.style = "width: 128px; height: 128px";
  selectedRow.cells[3].appendChild(myImg).innerHTML = myImg;
}

function onDelete(td) {
    document.getElementById("urlValidationError").innerHTML= "";
    if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
  }
}

function userF(msg) {
  document.getElementById("emailValidationError").innerHTML = msg;
}
function emailvalidation() {
  var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  var email = document.getElementById("Email_Id").value;
  var a = email.length;
  if (email == "") {
    userF("Fill Email");
    return false;
  }
  if (a > 0 && a >= 45) {
    userF("Email must be less than  20 characters");
    return false;
  }

  if (a > 0 && !(/[a-z]/.test(email) || !/[A-Z]/.test(email))) {
    userF("email must have  lower case letter");
    return false;
  }

  if (a > 0 && !format.test(email)) {
    userF("email should contain special character");
    return false;
  } else {
    userF("");
    return true;
  }
}
function is_url(str) {

  let regexp = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
  if (regexp.test(str)) {
    return true;
  } 
  if (str == "") {
    document.getElementById("urlValidationError").innerHTML = "Enter Image URL";
    return false;
  }
  else {
    document.getElementById("urlValidationError").innerHTML = "Invalid Url";
    return false;
  }
}
