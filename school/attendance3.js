// var token = localStorage.getItem("token");
// if (token != null) {
//    console.log(true);
// } else {
//   window.location.replace("http://127.0.0.1:5500/school/attendance1.html");
// }
var student_Obj = localStorage.getItem("students");
student_Obj = JSON.parse(student_Obj);

function studentsList(Obj) {
    clear();
    if (Obj != null) {
    for (var i = 0; i < Obj.length; i++) {
        var table = document
            .getElementById("employeeList")
            .getElementsByTagName("tbody")[0];
        var newRow = table.insertRow(table.length);
        cell0 = newRow.insertCell(0);
        cell0.innerHTML = i + 1;
        cell0 = newRow.insertCell(1);
        cell0.innerHTML = Obj[i].StudentId;
        cell1 = newRow.insertCell(2);
        cell1.innerHTML = Obj[i].FirstName;
        cell2 = newRow.insertCell(3);
        cell2.innerHTML = Obj[i].LastName;
        cell3 = newRow.insertCell(4);
        cell3.innerHTML = Obj[i].FathersName;
        cell4 = newRow.insertCell(5);
        cell4.innerHTML = Obj[i].Class;
        cell5 = newRow.insertCell(6);
        cell5.innerHTML = `<div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="present" onclick="attendance(this)">
        <label class="form-check-label" for="formCheckDefault" id="absent">ABSENT</label>
      </div>`;
    }} 
}
getSpecObj();

function getSpecObj() {
  var class_1 = [],
    class_2 = [],
    class_3 = [],
    class_4 = [],
    class_5 = [],
    class_6 = [],
    class_7 = [],
    class_8 = [],
    class_9 = [],
    class_10 = [],
    class_11 = [],
    class_12 = [];
  //console.log(student_Obj);
  for (var i = 0; i < student_Obj.length; i++) {
    if (student_Obj[i].Class == 1) {
      class_1 = class_1.concat(student_Obj[i]);
      //console.log(class_1);
    }
    if (student_Obj[i].Class == 2) {
      class_2 = class_2.concat(student_Obj[i]);
      //console.log(class_2);
    }
    if (student_Obj[i].Class == 3) {
      class_3 = class_3.concat(student_Obj[i]);
      //console.log(class_3);
    }
    if (student_Obj[i].Class == 4) {
      class_4 = class_4.concat(student_Obj[i]);
      //console.log(class_4);
    }
    if (student_Obj[i].Class == 5) {
      class_5 = class_5.concat(student_Obj[i]);
      //console.log(class_5);
    }
    if (student_Obj[i].Class == 6) {
      class_6 = class_6.concat(student_Obj[i]);
      //console.log(class_6);
    }
    if (student_Obj[i].Class == 7) {
      class_7 = class_7.concat(student_Obj[i]);
      //console.log(class_7);
    }
    if (student_Obj[i].Class == 8) {
      class_8 = class_8.concat(student_Obj[i]);
      //console.log(class_8);
    }
    if (student_Obj[i].Class == 9) {
      class_9 = class_9.concat(student_Obj[i]);
      //console.log(class_9);
    }
    if (student_Obj[i].Class == 10) {
      class_10 = class_10.concat(student_Obj[i]);
      //console.log(class_10);
    }
    if (student_Obj[i].Class == 11) {
      class_11 = class_11.concat(stdent_Obj[i]);
      // console.log(class_11);
    }
    if (student_Obj[i].Class == 12) {
      class_12 = class_12.concat(student_Obj[i]);
      //console.log(class_12);
    }
  }

  document.getElementById("class_1").addEventListener("click", function () {
    studentsList(class_1);
  });
  document.getElementById("class_2").addEventListener("click", function () {
    studentsList(class_2);
  });
  document.getElementById("class_3").addEventListener("click", function () {
    studentsList(class_3);
  });
  document.getElementById("class_4").addEventListener("click", function () {
    studentsList(class_4);
  });
  document.getElementById("class_5").addEventListener("click", function () {
    studentsList(class_5);
  });
  document.getElementById("class_6").addEventListener("click", function () {
    studentsList(class_6);
  });
  document.getElementById("class_7").addEventListener("click", function () {
    studentsList(class_7);
  });
  document.getElementById("class_8").addEventListener("click", function () {
    studentsList(class_8);
  });
  document.getElementById("class_9").addEventListener("click", function () {
    studentsList(class_9);
  });
  document.getElementById("class_10").addEventListener("click", function () {
    studentsList(class_10);
  });
  document.getElementById("class_11").addEventListener("click", function () {
    studentsList(class_11);
  });
  document.getElementById("class_12").addEventListener("click", function () {
    studentsList(class_12);
  });
}
function clear() {
    const obj = document.getElementById('tbody');
    while (obj.hasChildNodes()) {
        obj.removeChild(obj.firstChild);
      }
    }
function attendance(td){
    selectedRow = td.parentElement.parentElement;   
const attend = td.checked;
if(attend == true){
    selectedRow.children[0].children[1].innerHTML = "PRESENT";
}
else{
    selectedRow.children[0].children[1].innerHTML = "ABSENT";
}
}