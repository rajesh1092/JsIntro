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
  var list = document.getElementById("list"), container, key, id, email, first_Name, user_Img, image;
  for (var i = 0; i < user_Obj.length; i++) {
    container = document.createElement("div");
      container.className = "container";
      container.style = "margin : 30px";
      list.append(container);
        key = document.createElement("div");
          key.className = "key";
          container.append(key);
          document.getElementsByClassName('key')[i].innerHTML = "key: " + i;
        id = document.createElement("div");
          id.className = "id";
          container.append(id);
          document.getElementsByClassName('id')[i].innerHTML = "User id: " + user_Obj[i].id;
        email = document.createElement("div");
          email.className = "email";
          container.append(email);
          document.getElementsByClassName('email')[i].innerHTML = "User E-mail: " + user_Obj[i].email;
        first_Name = document.createElement("div");
          first_Name.className = "first_Name";
          container.append(first_Name);
          document.getElementsByClassName('first_Name')[i].innerHTML = "Name: " + user_Obj[i].first_name+" "+ user_Obj[i].last_name;
        user_Img = document.createElement("div");
          user_Img.className = " user_Img";
          container.append( user_Img);
        //document.getElementsByClassName('user_Img')[i].innerHTML = "User Image";
        image = document.createElement("img");
          image.style = "margin : 10px";
          image.src = user_Obj[i].avatar;
          user_Img.appendChild(image);
  }
};
var token = sessionStorage.getItem('token');
if (token != null){
  users();
}else{
  window.location.replace("http://127.0.0.1:5500/login%20page/loginpage.html");
}

