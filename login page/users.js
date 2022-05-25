
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
  console.log(userlist);
  //console.log(JSON.parse(userlist));
  var user_Data = JSON.parse(userlist);
  var user_Obj = user_Data["data"];
  console.log(user_Obj);
  var list = $('#list'), container;
  for(var key in user_Obj){
    container = $('<div id="user_Obj" class="container"></div>');
    list.append(container);
    container.append('<div class="item">' + key +'</div>');
    container.append('<div class="id">' + grocery_list[key].id +'</div>');
    container.append('<div class="email">' + grocery_list[key].email +'</div>');
    container.append('<div class="first_name">' + grocery_list[key].first_name +'</div>');
    container.append('<div class="last_name">' + grocery_list[key].last_name +'</div>');
}  
  //return user_Obj
};
users();
