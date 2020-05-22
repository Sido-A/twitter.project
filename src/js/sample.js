// import API from "./API";
// import { API_ENDPOINT } from "./API";
// console.log(API_ENDPOINT);



// //DOM
// const userInfo = document.querySelector(".userInfo");
// const parseUser = JSON.parse(localStorage.getItem("user"));
// const userImgWrap = document.querySelector(".userImgWrap");
// const tweetContainer = document.querySelector(".tweetContainer");
// const newTweet = document.querySelector(".createNewTweet");
// console.log(parseUser);
// console.log("parse UserId", parseUser.id);
// let mapped = [];



// const patchComment = async (id, countUp) => {
//     const configObjectPatch = {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//         },
//         body: JSON.stringify(countUp),
//     };

//     return await fetch(`${API_ENDPOINT}/tweets/${id}`, configObjectPatch)
//         .then((res) => {
//             if (res.ok) {
//                 return res.json();
//             } else {
//                 throw "Oops we couldn't update that!";
//             }
//         })
//         .catch((error) => error);
// };

// const clickRetweets = () => {
//     const likes = document.querySelectorAll(".retweet");
//     likes.forEach((like) => {
//         if (like) {
//             like.addEventListener("click", (e) => {
//                 const tweets = document.querySelectorAll(".tweet");
//                 tweets.forEach((tweet) => {
//                     // need to find a solution to look for a number on array of string :/
//                     const targetId = e.target.classList[1];
//                     const hasClass = tweet.classList.contains(`tweet-id${targetId}`);
//                     const retweetCounter = document.querySelector(
//                         `.retweetNumber${targetId}`
//                     );
//                     if (hasClass) {
//                         const CurrentTotalRetweetNumber =
//                             parseInt(retweetCounter.innerText) + 1;
//                         const getUserIndexOfComment = parseUser.tweets[targetId - 1];
//                         getUserIndexOfComment["retweets"] = CurrentTotalRetweetNumber;
//                         localStorage.setItem("user", JSON.stringify(parseUser));
//                         // patchComment(targetId, {retweets: CurrentTotalRetweetNumber});
//                         retweetCounter.innerText = CurrentTotalRetweetNumber;
//                     }
//                 });
//             });
//         }
//     });
// };

// const clickLikes = () => {
//     const likes = document.querySelectorAll(".likes");
//     likes.forEach((like) => {
//         if (like) {
//             like.addEventListener("click", (e) => {
//                 const tweets = document.querySelectorAll(".tweet");
//                 tweets.forEach((tweet) => {
//                     // need to find a solution to look for a number on array of string :/
//                     const targetId = e.target.classList[1];
//                     const hasClass = tweet.classList.contains(`tweet-id${targetId}`);
//                     const likeCounter = document.querySelector(`.likesNumber${targetId}`);
//                     if (hasClass) {
//                         const CurrentTotalLikesNumber = parseInt(likeCounter.innerText) + 1;
//                         const getUserIndexOfComment = parseUser.tweets[targetId - 1];
//                         getUserIndexOfComment["likes"] = CurrentTotalLikesNumber;
//                         localStorage.setItem("user", JSON.stringify(parseUser));
//                         // patchComment(targetId, {likes: CurrentTotalLikesNumber});
//                         likeCounter.innerText = CurrentTotalLikesNumber;
//                     }
//                 });
//             });
//         }
//     });
// };

// //show comment input when click reply icon and hide with arrow click
// const clickReplyIcon = () => {
//     const replies = document.querySelectorAll("a.reply");
//     replies.forEach((reply) => {
//         if (reply) {
//             reply.addEventListener("click", (e) => {
//                 const tweets = document.querySelectorAll(".tweet");
//                 tweets.forEach((tweet) => {
//                     const targetId = e.target.id;
//                     const hasClass = tweet.classList.contains(`tweet-id${targetId}`);
//                     if (hasClass) {
//                         const uniqueId = document.querySelector(`.unique${targetId}`);
//                         const typeReplyWrapperClass = document.querySelector(
//                             `.typeReplyWrapper`
//                         );
//                         const goBack = document.querySelector(`.goBack${targetId}`);

//                         if (typeReplyWrapperClass) {
//                             uniqueId.classList.remove("typeReplyWrapper");
//                         }
//                         goBack.addEventListener("click", () => {
//                             uniqueId.classList.add("typeReplyWrapper");
//                         });
//                     }
//                 });
//             });
//         }
//     });
// };

// // create tweet that has been stored in JSON
// const renderTweet = (parseUsers) => {
//     console.log(parseUsers);

//     const tweets = parseUsers;
//     tweets.forEach((tweet) => {
//         if (tweet.reply === undefined) {
//             tweet.reply = 0;
//         }

//         if (tweetContainer) {
//             const tweetBox = document.createElement("div");
//             tweetBox.classList.add("tweet", `tweet-id${tweet.id}`);
//             tweetBox.innerHTML = `
//           <div class="tweetHeader">
//             <p class="name">${parseUser.name}</p>
//             <p class="postDate">${tweet.date}</p>
//           </div>
//           <!--tweetHeader-->
//           <div class="tweetBody">
//             <div class="tweetMessage">
//               <p>${tweet.content}</p>
//             </div>
//             <!--tweetMessage-->
//             <div class="like-share-icons">
//               <div class="likes ${tweet.id}">
//                 <p class="likesNumber${tweet.id} ${tweet.id}">${tweet.likes}</p>
//               </div>
//               <!--likes-->
//               <div class="retweet ${tweet.id}">
//                 <p class="retweetNumber${tweet.id} ${tweet.id}">${tweet.retweets}</p>
//               </div>
//               <!--retweet-->
//               <div class="reply ${tweet.id}" id="${tweet.id}">
//                 <p>${tweet.comments.length}</p>
//               </div>
//               <!--reply-->
//             </div>
//             <!--like-share-icons-->
            
//             <div class="typeReplyWrapper unique${tweet.id}" id="typeReplyWrapperBlock">
//               <div class="typeReply">
//                 <textarea name="reply" id="replyBody" cols="30" rows="10"></textarea>
//                 <div class="typeReplyFooter">
//                   <div class="goBack"><span class="goBack${tweet.id}">←</span></div>
//                   <!--go-back-->
//                   <div class="postTweet">
//                     <button type="submit">Reply</button>
//                   </div>
//                   <!--post-tweet-->
//                 </div><!--typeReplyFooter-->
//               </div><!--typeReply-->
//             </div><!--typeReplyWrapper-->
//           </div><!--tweetBody-->
//         `;
//             tweetContainer.append(tweetBox);
//         }
//     });
// };

// //top user info
// export const renderUserInfo = (parseUser) => {
//     if (userInfo) {
//         const twitterViewUser = document.createElement("div");
//         twitterViewUser.classList.add("twitterViewUser");

//         twitterViewUser.innerHTML = `
//           <div class="twitterViewUser">
//             <h1>${parseUser.name}</h1>
//             <div class="twitterUserDetails">
//               <div class="tagNameLocation">
//                 <p class="tagName">&#64;${parseUser.name}</p>
//                 <p class="location">location</p>
//               </div>
//               <!--tagNameLocation-->
//               <div class="follows">
//                 <p class="followers">
//                   <strong class="number">1</strong> Followers
//                 </p>
//                 <p class="following">
//                   <strong class="number">1</strong> Following
//                 </p>
//               </div>
//               <!--follows-->
//             </div>
//             <!--twitterUserDetails-->
//           </div>
//           <!--twitterViewUser-->`;

//         userInfo.append(twitterViewUser);
//     }
// };

// const changeUserImg = (parseUser) => {
//     const profileImg = document.querySelector(".profileImg");
//     if (userImgWrap) {
//         userImgWrap.addEventListener("click", () => {
//             profileImg.id = "changeUserImg";
//             profileImg.src = parseUser.avatar_url;
//         });
//     }
// };

// export const clickNewTweet = () => {
//     if (newTweet) {
//         const newTweet = document.querySelector(".createNewTweet");
//         newTweet.addEventListener("click", (e) => {
//             console.log(e.target);
//         });
//     }
// };


// API.getTweets().then(res => {
//     console.log(res)
//     mapped = res.map(userId => {
//         if (parseUser.id == userId.userId) {
//             return userId;
//         }

//     }).filter(m => m !== undefined)
//     renderTweet(mapped)
// });


// // renderTweet(parseUser);
// renderUserInfo(parseUser);
// changeUserImg(parseUser);
// clickReplyIcon();
// clickLikes();
// clickRetweets();
