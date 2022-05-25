document.getElementById("submit").onclick = function popup_message() {
  const email = userfield();
  const login_Pass = passfield();
  if (email == true && login_Pass == true) {
    loginpage();
  }
};

function userF(msg) {
  document.getElementById("myPopup").innerHTML = msg;
}
function passF(msg) {
  document.getElementById("myPop").innerHTML = msg;
}

function userfield() {
  var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  var user = document.getElementById("username").value;
  var a = user.length;
  if (user == "") {
    userF("Fill Email");
    return false;
  }
  if (a > 0 && a >= 20) {
    userF("Email must be less than  20 characters");
    return false;
  }
  // if (a > 0 && !(!/[a-z]/.test(user) || /[A-Z]/.test(user))) {
  //   userF("Username must have at least one upper case letter");
  //   return false;
  // }
  if (a > 0 && !(/[a-z]/.test(user) || !/[A-Z]/.test(user))) {
    userF("email must have  lower case letter");
    return false;
  }
  // if (a > 0 && /[0-9]/.test(user)) {
  //   userF("Username must only consist of alphabets");
  //   return false;
  // }
  if (a > 0 && !format.test(user)) {
    userF("email should contain special character");
    return false;
  } else {
    document.getElementById("myPopup").innerHTML = "";
    return true;
  }
}

function passfield() {
  var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  var pass = document.getElementById("password").value;

  var b = pass.length;
  if (pass == "") {
    passF("Fill Password");
    return false;
  }
  if (b > 0 && b >= 15) {
    passF("Password must be of less than 15 characters");
    return false;
  }
  // if (b > 0 && !(!/[a-z]/.test(pass) || /[A-Z]/.test(pass))) {
  //   passF("password must have at least one upper case letter");
  //   return false;
  // }
  if (b > 0 && (!/[a-z]/.test(pass) || /[A-Z]/.test(pass))) {
    passF("Password must have  lower case letter");
    return false;
  }
  // if (b > 0 && !/[0-9]/.test(pass)) {
  //   passF("Password must have at least one  numeric character");
  //   return false;
  // }

  // if (b > 0 && !format.test(pass)) {
  //   passF("Password must have at least one  special character");
  //   return false;
  //}
  else {
    document.getElementById("myPop").innerHTML = "";
    return true;
  }
}

const loginpage = async () => {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;

  const response = await fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: user,
      password: pass,
    }),
  });
  if(response.status == 200){
  const res = await response.json(); 
  const token = JSON.stringify(res);
  console.log(token);
    localStorage.setItem("token", token);
    console.log(token);
    window.location.href = "http://127.0.0.1:5500/login%20page/users.html";
}
}
