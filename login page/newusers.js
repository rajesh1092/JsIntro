
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
    var table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = user_Obj[i].email;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = user_Obj[i].first_name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = user_Obj[i].last_name;
   // document.getElementsByClassName("myImg")[i].src = user_Obj[i].avatar;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = user_Obj[i].avatar;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                         <a onClick="onDelete(this)">Delete</a>`;

  }
};
users();

var selectedRow = null;

function onFormSubmit() {
  if (validate()) {
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
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.Image;
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
  selectedRow = td.parentElement.parentElement;
  document.getElementById("Email_Id").value = selectedRow.cells[0].innerHTML;
  document.getElementById("First_Name").value = selectedRow.cells[1].innerHTML;
  document.getElementById("Last_Name").value = selectedRow.cells[2].innerHTML;
  document.getElementById("Image").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.email;
  selectedRow.cells[1].innerHTML = formData.firstName;
  selectedRow.cells[2].innerHTML = formData.lastName;
  selectedRow.cells[3].innerHTML = formData.Image;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
  }
}
function validate() {
  isValid = true;
  if (document.getElementById("Email_Id").value == "") {
    isValid = false;
    document.getElementById("emailValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("emailValidationError")
        .classList.contains("hide")
    )
      document.getElementById("emailValidationError").classList.add("hide");
  }
  return isValid;
}
