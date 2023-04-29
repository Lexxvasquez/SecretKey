let btn = document.getElementById("generate");

const getPass = () => {
  let length = prompt("How long would your password be (8-128)?");

  if (length < 8 || length > 128) {
    alert("Wrong length! Please try again!");
    return getPass();
  }

  let num = confirm("Would you like numbers in your password?");
  let lower = confirm("Would you like lowercase in your password?");
  let upper = confirm("Would you like uppercase in your password?");
  let special = confirm("Would you like special characters in your password?");

  let temp = "";

  if (num) temp += "0123456789";
  if (lower) temp += "abcdefhgijklmnopqrstuvwxyz";
  if (upper) temp += "ABCDEFHGIJKLMNOPQRSTUVWXYZ";
  if (special) temp += "!@#$%^&*";

  let passwd = "";
  for (let i = 0; i < length; i++) {
    passwd += temp[Math.floor(Math.random() * temp.length)];
  }

  document.getElementById("password").innerHTML = passwd;
  console.log(temp);
};

btn.onclick = getPass;
