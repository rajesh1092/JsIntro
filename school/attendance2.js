// var token = localStorage.getItem("token");
// if (token != null) {
//    console.log(true);
// } else {
//   window.location.replace("http://127.0.0.1:5500/school/attendance1.html");
// }

  var data=[]; 
  localStorage.setItem("student", data);
  var selectedRow = null;
  var count = 1;
  function onFormSubmit() {
       num = document.getElementById("Image").value;
       const email = emailvalidation();
       const urlimg =  is_url(num);
        if (email != true && urlimg == true){
            document.getElementById("urlValidationError").innerHTML= "";
        }
     if (email == true && urlimg ==true ) {
      document.getElementById("urlValidationError").innerHTML= "";
      var formData = readFormData();
      if (selectedRow == null) insertNewRecord(formData);
      else updateRecord(formData);
      console.log()
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
    add_Student();
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
    document.getElementById("Image").value = selectedRow.cells[3].innerHTML;
  }
  function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.email;
    selectedRow.cells[1].innerHTML = formData.firstName;
    selectedRow.cells[2].innerHTML = formData.lastName;
    selectedRow.cells[3].innerHTML = formData.Image;
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
      userF("Enter student Name");
      return false;
    }
     else {
      userF("");
      return true;
    }
  }
  function is_url(num) {
  
    
    if (num >0 && num < 13) {
      return true;
    } 
    if (num == "") {
      document.getElementById("urlValidationError").innerHTML = "Enter student class";
      return false;
    }
    else {
      document.getElementById("urlValidationError").innerHTML = "Invalid class";
      return false;
    }
  }
  function student(student_Id,first_Name,last_Name,fathers_Name,student_Class){
    this.StudentId =student_Id, 
    this.FirstName = first_Name,
    this.LastName = last_Name,
    this.FathersName = fathers_Name,
    this.Class = student_Class
  }
  function add_Student(){
    var formData = readFormData();
        var students = new student( 
          count,
          formData.email,
          formData.firstName,
          formData.lastName,
          formData.Image  
        );
        count++;
        students_Data = JSON.stringify(students);
        localStorage.setItem("Students",students_Data)
  }