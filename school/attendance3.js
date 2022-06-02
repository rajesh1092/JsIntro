// var token = localStorage.getItem("token");
// if (token != null) {
//    console.log(true);
// } else {
//   window.location.replace("http://127.0.0.1:5500/school/attendance1.html");
// }
var student_Obj = localStorage.getItem("students");
    student_Obj = JSON.parse(student_Obj);


    function studentsList(Obj){   
        if(Obj != null){
            for (var i = 0; i < Obj.length; i++) {
                var table = document
                    .getElementById("employeeList")
                    .getElementsByTagName("tbody")[0];
                var newRow = table.insertRow(table.length);
                    cell0 = newRow.insertCell(0);
                    cell0.innerHTML = i+1;
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
                    cell5.innerHTML = "";
            }
    }
  }
getSpecObj(); 
function getSpecObj(){
    var class_1 = [];
    console.log(student_Obj);
    for (var i=0; i< student_Obj.length; i++){
        if ( student_Obj[i].Class == 1){    
            class_1 = class_1.concat(student_Obj[i]);
            console.log(class_1);         
        }
        
    } 
    document.getElementById("class_1").addEventListener('click', studentsList(class_1));  
}

  