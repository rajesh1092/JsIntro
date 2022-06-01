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
      userF("**Enter User Name");
      return false;
    }
    if (a > 0 && a >= 30) {
      userF("Username must be less than  20 characters");
      return false;
    }
    
    if (a > 0 && !(/[a-z]/.test(user))) {
      userF("Username must have  lower case letter");
      return false;
    }

    
    if (a > 0 && (!/[A-Z]/.test(user))) {
      userF("Username must have upper case letter");
      return false;
    }
  
    else {
      document.getElementById("myPopup").innerHTML = "";
      return true;
    }
  }
  
  function passfield() {
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var pass = document.getElementById("password").value;
  
    var b = pass.length;
    if (pass == "") {
      passF("**Enter Password");
      return false;
    }
    if (b > 0 && b >= 15) {
      passF("Password must be of less than 15 characters");
      return false;
    }
    
    if (b > 0 && (!/[A-Z]/.test(pass))) {
      passF("Password must have upper case letter");
      return false;
    }

    if (b > 0 && !/[a-z]/.test(pass)) {
      passF("Password must have  lower case letter");
      return false;
    }

    if (b> 0 && !format.test(pass)) {
      passF("Password should contain special character");
      return false;
    }
    
    else {
      document.getElementById("myPop").innerHTML = "";
      return true;
    }
  }
  
  const loginpage = async () => {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var Username = "Dpssurat";
    var Password = "DPS@surat";
    if (Username == user && Password == pass) {
      var token = "QpwL5tke4Pnpja7X4";
     //localStorage.setItem("token", token);
      window.location.href = "http://127.0.0.1:5500/school/attendence3.html";
    } else {
      passF("*Enter correct Email and password!!");
    }
  };
  