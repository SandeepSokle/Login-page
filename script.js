


let emailPhone = document.querySelector(".userName");
let pass = document.querySelector(".pass");
let submitBtn = document.querySelector(".submitBtn");
let isEmail = false;
let isPhone = false;
let isPass = false;
let call = false;
let forget = document.querySelector(".forget");
let joinNow = document.querySelector(".joinNow");
let body = document.querySelector("body");

joinNow.addEventListener("click", function () {

  body.innerHTML = "";
  body.innerHTML=`    <div class="container">
  <img class="image" src="/socialMediaIcons/signup.jpg" />
  <div class="signupBox">
    <div class="text" class="text">Sign Up</div>
    <input type="text" class="name" placeholder="Name" />
    <input type="email" class="mail" placeholder="Enter Email" />
    <input
      type="number"
      class="contect"
      max="10"
      placeholder="Contect Number"
    />
    <textarea
      class="address"
      cols="30"
      rows="5"
      placeholder="Address"
    ></textarea>
    <input type="password" class="password" placeholder="Enter Password " />
    <input
      type="password"
      class="confirmPassword"
      placeholder="Confirm Password"
    />

    <div class="checkBox">
      <input type="checkbox" class="check" value="off" />
      <p>Accept the term and policies</p>
    </div>
    <div class="Btn">
    <button type="reset" class = "signUpBackBtn">Back</button>
    <button type="submit" class="nextBtn">Next</button>
  </div>
    <div class="space"></div>
  </div>


  <div class="passdis">Enter unique and Strong Password in range 8 to 20</div>
  <div class="welcome">
    <div class="welcomeTitle">Welcome</div>
    <div class="des">
      It helps to teach students through online classes.
    </div>
    <div class="desk">Enjoy My Project</div>
  </div>
</div>

`;



let nextBtn = document.querySelector(".nextBtn");
let name = document.querySelector(".name");
let email = document.querySelector(".mail");
let phoneNo = document.querySelector(".contect");
let address = document.querySelector(".address");
let password = document.querySelector(".password");
let confirmPassword = document.querySelector(".confirmPassword");
let checkBox = document.querySelector(".check");
// let body = document.querySelector("body");
let backBtn =document.querySelector(".signUpBackBtn");

backBtn.addEventListener("click",function(){
  location.reload(true);
})

checkBox.addEventListener("click", function (e) {
  if (e.currentTarget.value == "on") e.currentTarget.value = "off";
  else e.currentTarget.value = "on";
});

nextBtn.addEventListener("click", function () {
  // console.log(checkBox.value)

  if (
    name.value == "" ||
    email.value == "" ||
    phoneNo.value == null ||
    address.value == "" ||
    password.value == "" ||
    confirmPassword.value == ""
  ) {
    alert("Please filled up all fields:");
    return;
  }

if(phoneNo.value.length != 10 ) {
  alert("You Enter Wrong Phone Number:");
  return;
}

  if(password.value.length < 8 ){
    alert("pasword too short");
    return;
  }else   if(password.value.length > 20 ){
    alert("pasword too long:");
    return;
  }


  if(password.value != confirmPassword.value) {
    alert("password and confirmPassword not match");
    return;
  }

  if (checkBox.value == "off") {
    alert("Agree terms and Condition");
    return;
  }

  let obj = {
    name: name.value,
    email: email.value,
    phoneNo: phoneNo.value,
    address: address.value,
    password: password.value,
  };
  let tasks = JSON.parse(localStorage.getItem("SignupData"));
  if (tasks == null) tasks = [];
  tasks.push(obj);
  localStorage.setItem("SignupData", JSON.stringify(tasks));

  name.value = "";
  email.value = "";
  phoneNo.value = null;
  address.value = "";
  password.value = "";
  confirmPassword.value = "";
});

});

forget.addEventListener("click", function () {
  let div = document.createElement("div");
  div.classList.add("forgetContainer");
  div.innerHTML = `<div class="style"></div>
  <div class="content">
      <div class="forgetText">Forget <br>Password</div>
      <div class="des">Enter the Email address associated with your account</div>
      <div class="input">
          <input class = "email" type="email" placeholder="Email">
      </div>
      <div class="btn">
      <button type="reset" class = "forgetBackBtn">Back</button>
          <button class="forgetNextBtn" type="submit">Next</button>
      </div>
  </div>`;

  body.innerHTML = "";
  body.appendChild(div);
  let isId = false;
  let givenMail = document.querySelector(".email");
  let nextBtn = document.querySelector(".forgetNextBtn");
  let backBtn = document.querySelector(".forgetBackBtn");
  nextBtn.addEventListener("click", function () {
    let tasks = JSON.parse(localStorage.getItem("SignupData"));
    if (tasks == null) tasks = [];
    for (let i = 0; i < tasks.length; i++) {
      if (givenMail.value == "") {
        alert("Enter Your email address.");
        return;
      }
      if (tasks[i].email == givenMail.value) {
        isId = true;
        confirm(`Your Password is : ${tasks[i].password}`);
      }
    }
    if (!isId) {
      alert("Your email is Not Registered with My Board.");
      location.reload(true);
    }
  });
  
  backBtn.addEventListener("click", function () {
    location.reload(true);
  });

});

submitBtn.addEventListener("click", function () {
  // if (emailPhone.Value == null|| pass.Value == null) return;

  let tasks = JSON.parse(localStorage.getItem("SignupData"));
  if (tasks == null) tasks = [];

  if (isNaN(emailPhone.value)) {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].email == emailPhone.value) {
        isEmail = true;
        // console.log("Hello Email");
        // console.log(pass.value);
        // console.log(tasks[i].password);
        
        if (tasks[i].password == pass.value) {
          // window.location.replace(newUrl);
          ////
          window.location.href = "/openBoard/index.html";
          // console.log("congratulation:");
          // refresh();
          return;
          //
        }
      }
    }
    if (!isEmail) {
      alert("The email address you entered is not connected to My board.");
      refresh();
    } else {
      alert("The password you entered is incorrect");
      refresh();
    }
  } else {
    for (let i = 0; i < tasks.length; i++)
    if (tasks[i].phoneNo == emailPhone.value) {
      isPhone = true;
      // console.log("Hello phone");
      
      if (tasks[i].password == pass.value) {
        // window.location.replace(newUrl);
        
        window.location.href = "/openBoard/index.html";
        ////
        // console.log("congratulation:");
          // refresh();
          return;
          //
        }
      }
    if (!isPhone) {
      alert("The Phone number you entered is not connected to My board.");
      refresh();
    } else {
      alert("The password you entered is incorrect");
      refresh();
    }
  }
});

function refresh() {
  // body.innerHTML = "";
  location.reload(true);
}
