// import { getUsers } from "./API";
// import {renderUserInfo} from "./home-tweet"


// //DOM
// const loginForm = document.querySelector(".loginForm")
// const loginSubmit = document.querySelector("#loginSubmit");
// const errorMessage = document.createElement("p");

// export const loginSuccess = (user) => {
//     console.log("HI");
    
    
//     location.replace("./home.html");
//     console.log(user);
//     renderUserInfo(user)

// };

// export const loginFailed = () => {
//     errorMessage.classList.add("loginFailed");
//     errorMessage.innerText = "Your user name or password did not match";
//     loginForm.append(errorMessage);
// };

// export const clickLogin = () => {

//     loginSubmit.addEventListener("click", () => {
//         const inputUserName = document.querySelector("#userName");
//         getUsers()
//             .then((users) => users)
//             .then((users) => {
//                 users.forEach((user) => {
//                     console.log(user);
//                     if (user.name === inputUserName.value) {
//                          loginSuccess(user);
//                     } else {
//                         errorMessage.innerText = "";
//                         return loginFailed();
//                     }
//                 });
//             });
//     });

// }