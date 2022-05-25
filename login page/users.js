
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
  return user_Obj
 // document.getElementById("one").innerHTML= JSON.stringify(user_Obj[1]);
};
users();
//document.getElementById("one").innerHTML= user_Obj[1];