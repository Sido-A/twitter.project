import "./scss/style.scss";
import API from "./API";
import { getUsers } from "./API";
import { renderUserInfo} from "./home-tweet"
import { clickNewTweet } from "./home-tweet"
//avatar_url
//name
//tweets

// Your code here
API.getTweets();
// console.log(getUsers().then(res=> console.log(res)));
// clickNewTweet();


// //DOM
const loginForm = document.querySelector(".loginForm")
const loginSubmit = document.querySelector("#loginSubmit");
const errorMessage = document.createElement("p");


const loginFailed = () => {
  errorMessage.classList.add("loginFailed");
  errorMessage.innerText = "Your user name or password did not match";
  loginForm.append(errorMessage);
};

const loginSuccess = (user) => {
  console.log("hi");
  console.log("login USER", user);
  renderUserInfo(user);

  location.replace("./home.html");
  clickNewTweet();
};


const clickLogin = () =>{

  loginSubmit.addEventListener("click", () => {
    const inputUserName = document.querySelector("#userName");
    getUsers()
      .then((users) => users)
      .then((users) => {
        users.forEach((user) => {
          console.log(user);
          if (user.name === inputUserName.value) {
            console.log(user);
            
             loginSuccess(user);
          } else {
            errorMessage.innerText = "";
            return loginFailed();
          }
        });
      });
  });

}

clickLogin();


