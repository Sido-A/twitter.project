import "./scss/style.scss";
import API from "./API";
import { getUsers } from "./API";
import "./home-tweet";
import "./create.new.tweet";
//avatar_url
//name
//tweets

// Your code here

API.getTweets();
// clickNewTweet();

//DOM
const loginForm = document.querySelector(".loginForm");
const loginSubmit = document.querySelector("#loginSubmit");
const errorMessage = document.createElement("p");

const loginFailed = () => {
  errorMessage.classList.add("loginFailed");
  errorMessage.innerText = "Your user name or password did not match";
  loginForm.append(errorMessage);
};

const loginSuccess = () => {
  location.replace("./home.html");
};

const clickLogin = () => {
  if (loginSubmit) {
    loginSubmit.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.clear();
      const inputUserName = document.querySelector("#userName");
      getUsers().then((users) => {
        users.forEach((user) => {
          console.log(user);
          if (user.name === inputUserName.value) {
            localStorage.setItem("user", JSON.stringify(user));
            loginSuccess();
          } else {
            errorMessage.innerText = "";
            return loginFailed();
          }
        });
      });
    });
  }
};

clickLogin();