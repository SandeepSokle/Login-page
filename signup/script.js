


let nextBtn = document.querySelector(".nextBtn");

let name = document.querySelector(".name");
let email = document.querySelector(".mail");
let phoneNo = document.querySelector(".contect");
let address = document.querySelector(".address");
let password = document.querySelector(".password");
let confirmPassword = document.querySelector(".confirmPassword");
let checkBox = document.querySelector(".check");

checkBox.addEventListener("click", function (e) {
  if (e.currentTarget.value == "on") e.currentTarget.value = "off";
  else e.currentTarget.value = "on";
});

nextBtn.addEventListener("click", function () {
  console.log(checkBox.value)
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
  let tasks = JSON.parse(localStorage.getItem("openBoardSignupData"));
  if (tasks == null) tasks = [];
  tasks.push(obj);
  localStorage.setItem("openBoardSignupData", JSON.stringify(tasks));

  name.value = "";
  email.value = "";
  phoneNo.value = null;
  address.value = "";
  password.value = "";
  confirmPassword.value = "";

});

function onRefresh() {
  let tasks = JSON.parse(localStorage.getItem("openBoardSignupData"));
  if (tasks == null) return;
  if (!confirm("You Want fatch your older data:")) return;
    task = tasks[tasks.length-1];
  name.value = task.name;
  email.value = task.email;
  phoneNo.value = task.phoneNo;
  address.value = task.address;
  password.value = task.password;
}

onRefresh();
