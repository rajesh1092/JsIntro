const users = async () => {
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
  var list = document.getElementById("list"),
    container,
    id,
    email,
    first_Name,
    user_Img,
    image;
  for (var i = 0; i < user_Obj.length; i++) {
    container = document.createElement("div");
    container.className = "container";
    container.style = "margin : 30px";
    list.append(container);
    
    id = document.createElement("div");
    id.className = "fw-bold";
    container.append(id);
    document.getElementsByClassName("fw-bold")[i].innerHTML = "User id: " + user_Obj[i].id;
    
    email = document.createElement("div");
    email.className = "fw-normal; email";
    email.id = "input_Email";
    container.append(email);
    document.getElementsByClassName("email")[i].innerHTML = "User E-mail: " + user_Obj[i].email;
   
    first_Name = document.createElement("div");
    first_Name.className = "fw-normal; first_Name";
    first_Name.id = "input_Firstname"
    container.append(first_Name);
    document.getElementsByClassName("first_Name")[i].innerHTML = "Name: " + user_Obj[i].first_name + " " + user_Obj[i].last_name;
   
    user_Img = document.createElement("div");
    user_Img.className = " user_Img";
    container.append(user_Img);
    image = document.createElement("img");
    image.style = "margin : 10px";
    image.src = user_Obj[i].avatar;
    user_Img.appendChild(image);

    var button_Update = document.createElement("button");
    button_Update.type = "button";
    button_Update.className = "btn btn-primary; update_User";
    button_Update.style = "width : 200px; margin:10px; background-color: gainsboro";
    button_Update.id = "update_User";
    button_Update.setAttribute("data-bs-toggle","modal");
    button_Update.setAttribute("data-bs-target","#exampleModal");
    container.append(button_Update);
    document.getElementsByClassName("update_User")[i].innerHTML = "Update user";
    
    
    
   
  }
  var button = document.createElement("div");
    button.className = "button; list-group list-group-flush";
    button.style = "margin : 30px; display: grid!imprtant;width : 100%;";
    list.append(button);

  var user_Mail = document.createElement("input");
  var user_firstName = document.createElement("input");
  var user_lastName = document.createElement("input");
  var user_Image = document.createElement("input");
  user_Mail.placeholder = "Enter User Mail Id";
  user_firstName.placeholder = "Enter User First Name";
  user_lastName.placeholder = "Enter User Last Name";
  user_Image.placeholder = "Enter Image reference";
  user_Mail.className = "list-group-item";
  user_firstName.className = "list-group-item";
  user_lastName.className = "list-group-item";
  user_Image.className = "list-group-item";
  user_Mail.id = "user_Mail";
  user_firstName.id = "user_firstName";
  user_lastName.id = "user_lastName";
  user_Image.id = "user_Image"; 
  user_Image.style = "size: 128 * 128 px"
  
  button.append(user_Mail);
  button.append(user_firstName);
  button.append(user_lastName);
  button.append(user_Image);


  var button_Add = document.createElement("button");
    button_Add.type = "submit";
    button_Add.className = "btn btn-secondary ms-3";
    button_Add.style = "width : 200px; margin:10px";
    button_Add.id = "add_User";
    button.append(button_Add);
    document.getElementById("add_User").innerHTML = "Add user";
    
    document.getElementById("add_User").onclick = function add_Newuser(){
        var data = {
          "email" : document.getElementById("user_Mail").value,
          "first_name" : document.getElementById("user_firstName").value,
          "last_name" : document.getElementById("user_lastName").value,
          "avatar": document.getElementById("user_Image").value
        }
        const Add_User = async () => {

          const response = await fetch("https://reqres.in/api/users", {
            method: "POST",
            headers: {
               "content-type" : "application/json; charset=UTF-8"},
            body: JSON.stringify(data),
          });
          var res = await response.json();
          console.log(typeof(res));
           var  new_user = res;
           console.log(new_user);
          if (response.status == 201){
            console.log(user_Obj); 
          }    
        }
        Add_User();
    }; 
   
    // document.getElementById("update_User").onclick = function update_user(){
    //   element = document.parentElement;
    //   console.log(element);
    // }
    const child = document.getElementById('update_User');

child.addEventListener('click', function handleClick(event) {
  // 👇️ "parent"
  console.log(event.target.parentElement.className);
});
  };


var token = sessionStorage.getItem("token");
if (token != null) {
  users();
} else {
  window.location.replace("http://127.0.0.1:5500/login%20page/loginpage.html");
}
