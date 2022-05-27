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
  var num_User = user_Obj.length;
  var list = document.getElementById("list"),
    container,
    key,
    id,
    email,
    first_Name,
    user_Img,
    image;
  for (var i = 0; i < num_User; i++) {
    container = document.createElement("div");
    container.className = "container";
    container.style = "margin : 30px";
    list.append(container);
    key = document.createElement("div");
    key.className = "fw-bolder";
    container.append(key);
    document.getElementsByClassName("fw-bolder")[i].innerHTML = "key: " + i;
    id = document.createElement("div");
    id.className = "fw-bold";
    container.append(id);
    document.getElementsByClassName("fw-bold")[i].innerHTML = "User id: " + (i +7 );
    
      email = document.createElement("div");
    email.className = "fw-normal; email";
    container.append(email);
    document.getElementsByClassName("email")[i].innerHTML = "User E-mail: " + user_Obj[i].email;
   
    first_Name = document.createElement("div");
    first_Name.className = "fw-normal; first_Name";
    container.append(first_Name);
    document.getElementsByClassName("first_Name")[i].innerHTML = "Name: " + user_Obj[i].first_name + " " + user_Obj[i].last_name;
   
    user_Img = document.createElement("div");
    user_Img.className = " user_Img";
    container.append(user_Img);
    image = document.createElement("img");
    image.style = "margin : 10px";
    image.src = user_Obj[i].avatar;
    user_Img.appendChild(image);
   
  }
  var button = document.createElement("div");
    button.className = "button; list-group list-group-flush";
    button.style = "margin : 30px; display: grid!imprtant;width : 100%;";
    list.append(button);

  var user_Id = document.createElement("input");
  var user_Mail = document.createElement("input");
  var user_firstName = document.createElement("input");
  var user_lastName = document.createElement("input");
  var user_Image = document.createElement("input");
  user_Id.placeholder = "Enter User id you wish to update ";
  user_Mail.placeholder = "Enter User Mail Id";
  user_firstName.placeholder = "Enter User First Name";
  user_lastName.placeholder = "Enter User Last Name";
  user_Image.placeholder = "Enter Image reference";
  user_Id.className = "list-group-item";
  user_Mail.className = "list-group-item";
  user_firstName.className = "list-group-item";
  user_lastName.className = "list-group-item";
  user_Image.className = "list-group-item";
  user_Id.id = "user_Id";
  user_Mail.id = "user_Mail";
  user_firstName.id = "user_firstName";
  user_lastName.id = "user_lastName";
  user_Image.id = "user_Image"; 
  user_Image.style = "size: 128 * 128 px"
  
  button.append(user_Id);
  button.append(user_Mail);
  button.append(user_firstName);
  button.append(user_lastName);
  button.append(user_Image);

  var button_Update = document.createElement("button");
    button_Update.type = "submit";
    button_Update.className = "btn btn-primary";
    button_Update.style = "width : 200px; margin:10px";
    button_Update.id = "update_User";
    button.append(button_Update);
    document.getElementById("update_User").innerHTML = "Update user";
  var button_Add = document.createElement("button");
    button_Add.type = "submit";
    button_Add.className = "btn btn-secondary ms-3";
    button_Add.style = "width : 200px; margin:10px";
    button_Add.id = "add_User";
    button.append(button_Add);
    document.getElementById("add_User").innerHTML = "Add user";
    
    document.getElementById("add_User").onclick = function add_Newuser(){
        var data = {
          "id" : num_User + 7,
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
          if (response.status == 201){
             window.location.reload();
          }    
        }
        Add_User();
    };

    document.getElementById("update_User").onclick = function update_User(){

      function Person(id_user,e_Mail,first,last,img) {
        this.id = id_user;
        this.email = e_Mail;
        this.first_name = first;
        this.last_name = last;
        this.avatar= img;
      }
        var update_Obj = new Person(
          document.getElementById("user_Id").value,
          document.getElementById("user_Mail").value,
          document.getElementById("user_firstName").value,
          document.getElementById("user_lastName").value,
          document.getElementById("user_Image").value)
       console.log(user_Obj);
        console.log(update_Obj);
          var index = update_Obj.id - 7;
        if (update_Obj.id == user_Obj[index].id){
          user_Obj[index] = update_Obj;
          console.log(user_Obj);
        }
    };

    
};

var token = sessionStorage.getItem("token");
if (token != null) {
  users();
} else {
  window.location.replace("http://127.0.0.1:5500/login%20page/loginpage.html");
}
