import "./scss/style.scss";
import API from "./API";
import { getUsers } from "./API";
// import { clickLogin } from "./login";
import { renderUserInfo, clickNewTweet} from "./home-tweet"
//avatar_url
//name
//tweets


// Your code here
API.getTweets();
// clickNewTweet();


//DOM
const loginForm = document.querySelector(".loginForm")
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


const clickLogin = () =>{
  if (loginSubmit) {
    loginSubmit.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.clear()
      const inputUserName = document.querySelector("#userName");
      getUsers()
        .then((users) => {
          users.forEach((user) => {
            console.log(user);
            if (user.name === inputUserName.value) {
              localStorage.setItem("user",JSON.stringify(user))
              loginSuccess();
            } else {
              errorMessage.innerText = "";
              return loginFailed();
            }
          });
        });
    });
  }
    
}

clickLogin();




// <div class="userInfo">
//   <!--user-->
//   <div class="userImg">
//     <img src="../src/img/camera.png" alt="some image" />
//   </div>
//   <div class="twitterViewUser">
//     <h1></h1>
//     <div class="twitterUserDetails">
//       <div class="tagNameLocation">
//         <p class="tagName">&#64;name</p>
//         <p class="location">location</p>
//       </div>
//       <!--tagNameLocation-->
//       <div class="follows">
//         <p class="followers">
//           <strong class="number">1</strong> Followers
//         </p>
//         <p class="following">
//           <strong class="number">1</strong> Following
//         </p>
//       </div>
//       <!--follows-->
//     </div>
//     <!--twitterUserDetails-->
//   </div>
//   <!--twitterViewUser-->
// </div>
//   <!--userInfo-->   user