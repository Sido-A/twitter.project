import { patchComment } from "./json.constructor";
import API from "./API";
import { newDate } from "./create.new.tweet";

//DOM
const userInfo = document.querySelector(".userInfo");
export const parseUser = JSON.parse(localStorage.getItem("user"));
const EveryTweets = JSON.parse(localStorage.getItem("EveryTweets"));
const userImgWrap = document.querySelector(".userImgWrap");
const tweetContainer = document.querySelector(".tweetContainer");
const newTweet = document.querySelector(".createNewTweet");
// console.log(parseUser);
// console.log("fast", EveryTweets);

const clickRetweets = () => {
  const retweets = document.querySelectorAll(".retweet");
  retweets.forEach((retweet) => {
    if (retweet) {
      retweet.addEventListener("click", (e) => {
        const tweets = document.querySelectorAll(".tweet");
        tweets.forEach((tweet) => {
          // need to find a solution to look for a number on array of string :/
          const targetId = e.target.classList[1];

          const hasClass = tweet.classList.contains(`tweet-id${targetId}`);
          const retweetCounter = document.querySelector(
            `.retweetNumber${targetId}`
          );
          if (hasClass) {
            const CurrentTotalRetweetNumber =
              parseInt(retweetCounter.innerText) + 1;
            const getUserIndexOfComment = EveryTweets[targetId - 1];
            getUserIndexOfComment["retweets"] = CurrentTotalRetweetNumber;

            localStorage.setItem("EveryTweets", JSON.stringify(EveryTweets));
            patchComment(targetId, { retweets: CurrentTotalRetweetNumber });
            retweetCounter.innerText = CurrentTotalRetweetNumber;
          }
        });
      });
    }
  });
};

const clickLikes = () => {
  const likes = document.querySelectorAll(".likes");
  likes.forEach((like) => {
    if (like) {
      like.addEventListener("click", (e) => {
        const tweets = document.querySelectorAll(".tweet");
        tweets.forEach((tweet) => {
          // need to find a solution to look for a number on array of string :/
          const targetId = e.target.classList[1];
          const hasClass = tweet.classList.contains(`tweet-id${targetId}`);
          const likeCounter = document.querySelector(`.likesNumber${targetId}`);
          if (hasClass) {
            const CurrentTotalLikesNumber = parseInt(likeCounter.innerText) + 1;
            const getUserIndexOfComment = EveryTweets[targetId - 1];
            getUserIndexOfComment["likes"] = CurrentTotalLikesNumber;

            localStorage.setItem("EveryTweets", JSON.stringify(EveryTweets));
            patchComment(targetId, { likes: CurrentTotalLikesNumber });
            likeCounter.innerText = CurrentTotalLikesNumber;
          }
        });
      });
    }
  });
};

const postReply = () => {
  const replyButtons = document.querySelectorAll(".postReply button");
  replyButtons.forEach((replyButton) => {
    if (replyButton) {
      replyButton.addEventListener("click", (e) => {
        const replyBodies = document.querySelectorAll("#replyBody");
        replyBodies.forEach((replyBody) => {
          const targetId = replyBody.classList[1];
          const hasClass = replyBody.classList.contains(
            `textValue-id${targetId}`
          );
          if (hasClass) {
            const replyBodyValue = replyBody.value;
            const userId = parseUser.id;
            console.log(targetId, replyBodyValue);
            const newReplyCommentObj = {
              userId: userId,
              tweetId: targetId,
              content: replyBodyValue,
              date: newDate,
            };            
          }
        });
      });
    }
  });
};


// const currentReplies = document.querySelectorAll(".reply p")
// currentReplies.forEach(currentReply => {
//   const currentTotalReplies = parseInt(currentReply.innerText) + 1;
//   console.log("update", currentTotalReplies);
//   currentReply.innerText = currentTotalReplies;
// })
//show comment input when click reply icon and hide with arrow click
const clickReplyIcon = () => {
  const replies = document.querySelectorAll(".reply");
  replies.forEach((reply) => {
    if (reply) {
      reply.addEventListener("click", (e) => {
        const tweets = document.querySelectorAll(".tweet");
        tweets.forEach((tweet) => {
          const targetId = e.target.id;
          const hasClass = tweet.classList.contains(`tweet-id${targetId}`);
          if (hasClass) {
            const uniqueId = document.querySelector(`.unique${targetId}`);
            const typeReplyWrapperClass = document.querySelector(
              `.typeReplyWrapper`
            );
            const goBack = document.querySelector(`.goBack${targetId}`);

            if (typeReplyWrapperClass) {
              uniqueId.classList.remove("typeReplyWrapper");
            }
            goBack.addEventListener("click", () => {
              uniqueId.classList.add("typeReplyWrapper");
            });
          }
        });
      });
    }
  });
  postReply();
};

// create tweet that has been stored in JSON
const renderTweet = (tweetsArray) => {
  tweetsArray.forEach((tweet) => {    
    const userName = tweet.user.name;

    if (tweet.reply === undefined) {
      tweet.reply = 0;
    }

    if (tweetContainer) {
      const tweetBox = document.createElement("div");
      tweetBox.classList.add("tweet", `tweet-id${tweet.id}`);
      tweetBox.innerHTML = `
          <div class="tweetHeader">
            <p class="name">${userName}</p>
            <p class="postDate">${tweet.date}</p>
          </div>
          <!--tweetHeader-->
          <div class="tweetBody">
            <div class="tweetMessage">
              <p>${tweet.content}</p>
            </div>
            <!--tweetMessage-->
            <div class="like-share-icons">
              <div class="likes ${tweet.id}">
                <p class="likesNumber${tweet.id} ${tweet.id}">${tweet.likes}</p>
              </div>
              <!--likes-->
              <div class="retweet ${tweet.id}">
                <p class="retweetNumber${tweet.id} ${tweet.id}">${tweet.retweets}</p>
              </div>
              <!--retweet-->
              <div class="reply reply-id${tweet.id} ${tweet.id}" id="${tweet.id}">
                <p>${tweet.comments.length}</p>
              </div>
              <!--reply-->
            </div>
            <!--like-share-icons-->

            <div class="typeReplyWrapper unique${tweet.id}" id="typeReplyWrapperBlock">
              <div class="typeReply">
                <textarea class="textValue-id${tweet.id} ${tweet.id}" name="reply" id="replyBody" cols="30" rows="10"></textarea>
                <div class="typeReplyFooter">
                  <div class="goBack"><span class="goBack${tweet.id}">←</span></div>
                  <!--go-back-->
                  <div class="postReply">
                    <button type="submit">Reply</button>
                  </div>
                  <!--post-tweet-->
                </div><!--typeReplyFooter-->
              </div><!--typeReply-->
            </div><!--typeReplyWrapper-->
          </div><!--tweetBody-->
        `;
      tweetContainer.append(tweetBox);
    }
  });

  clickReplyIcon();
  clickLikes();
  clickRetweets();
};

//top user info
export const renderUserInfo = (parseUser) => {
  if (userInfo) {
    const twitterViewUser = document.createElement("div");
    twitterViewUser.classList.add("twitterViewUser");

    twitterViewUser.innerHTML = `
          <div class="twitterViewUser">
            <h1>${parseUser.name}</h1>
            <div class="twitterUserDetails">
              <div class="tagNameLocation">
                <p class="tagName">&#64;${parseUser.name}</p>
                <p class="location">location</p>
              </div>
              <!--tagNameLocation-->
              <div class="follows">
                <p class="followers">
                  <strong class="number">1</strong> Followers
                </p>
                <p class="following">
                  <strong class="number">1</strong> Following
                </p>
              </div>
              <!--follows-->
            </div>
            <!--twitterUserDetails-->
          </div>
          <!--twitterViewUser-->`;

    userInfo.append(twitterViewUser);
  }
};

const changeUserImg = (parseUser) => {
  const profileImg = document.querySelector(".profileImg");
  if (userImgWrap) {
    userImgWrap.addEventListener("click", () => {
      profileImg.id = "changeUserImg";
      profileImg.src = parseUser.avatar_url;
    });
  }
};

export const clickNewTweet = () => {
  if (newTweet) {
    const newTweet = document.querySelector(".createNewTweet");
    newTweet.addEventListener("click", (e) => {
      console.log(e.target);
    });
  }
};

API.getTweets().then((tweets) => {
  localStorage.setItem("EveryTweets", JSON.stringify(tweets));

  renderTweet(tweets);
});

renderUserInfo(parseUser);
changeUserImg(parseUser);
