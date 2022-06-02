// var token = localStorage.getItem("token");
// if (token != null) {
//    console.log(true);
// } else {
//   window.location.replace("http://127.0.0.1:5500/school/attendance1.html");
// }
  
  var selectedRow = null;
  function studentsList(){
    var student_Obj = localStorage.getItem("students");
    student_Obj = JSON.parse(student_Obj);
    if(student_Obj != null){
        for (var i = 0; i < student_Obj.length; i++) {
          var table = document
            .getElementById("employeeList")
            .getElementsByTagName("tbody")[0];
          var newRow = table.insertRow(table.length);
          cell0 = newRow.insertCell(0);
          cell0.innerHTML = i + 1;
          cell1 = newRow.insertCell(1);
          cell1.innerHTML = student_Obj[i].FirstName;
          cell2 = newRow.insertCell(2);
          cell2.innerHTML = student_Obj[i].LastName;
          cell3 = newRow.insertCell(3);
          cell3.innerHTML = student_Obj[i].FathersName;
          cell4 = newRow.insertCell(4);
          cell4.innerHTML = student_Obj[i].Class;
          cell5 = newRow.insertCell(5);
          cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                            <a onClick="onDelete(this)">Delete</a>`;
        }
    }
  }
  studentsList();

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
    cell1.innerHTML = 1;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.email;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.firstName;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.lastName;  
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.Image;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                         <a onClick="onDelete(this)">Delete</a>`;
    add_Student();
    location.reload();
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
    document.getElementById("Email_Id").value = selectedRow.cells[1].innerHTML;
    document.getElementById("First_Name").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Last_Name").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Image").value = selectedRow.cells[4].innerHTML;
  }
  function updateRecord(formData) {
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.firstName;
    selectedRow.cells[3].innerHTML = formData.lastName;
    selectedRow.cells[4].innerHTML = formData.Image;
    var students = new student( 
      Math.floor(Math.random()*(999-100+1)+100),
      formData.email,
      formData.firstName,
      formData.lastName,
      formData.Image  
    );
    var data = [];
      data = data.concat(students);
      var student_Data= localStorage.getItem("students"); 
      student_Data = JSON.parse(student_Data);
      console.log(data);
      console.log( student_Data);
      console.log(selectedRow.cells[0].innerHTML);
      var index = selectedRow.cells[0].innerHTML - 1;
      student_Data[index] = data[0];
      console.log(student_Data);
      student_Data = JSON.stringify(student_Data);
      localStorage.setItem("students", student_Data);
      location.reload();
  }
  

  function onDelete(td) {
      document.getElementById("urlValidationError").innerHTML= "";
      if (confirm("Are you sure to delete this record ?")) {
      row = td.parentElement.parentElement;
      var index = row.rowIndex -1; 
      document.getElementById("employeeList").deleteRow(row.rowIndex);
      var student_Data= localStorage.getItem("students"); 
      student_Data = JSON.parse(student_Data);
      console.log( student_Data);
      student_Data.splice(index , index);
      console.log( student_Data);
      student_Data = JSON.stringify(student_Data);
      localStorage.setItem("students", student_Data);
      resetForm();
      location.reload();
      
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
          Math.floor(Math.random()*(999-100+1)+100),
          formData.email,
          formData.firstName,
          formData.lastName,
          formData.Image  
        );
        var data = [];
        data = data.concat(students);
        var student_Data= localStorage.getItem("students"); 
        student_Data = JSON.parse(student_Data);
          if(student_Data != null){
            data = data.concat(student_Data);
            data = JSON.stringify(data);         
            localStorage.setItem("students", data);          
          }
          else{
            data = JSON.stringify(data);
            localStorage.setItem("students", data); 
          }
        
  }