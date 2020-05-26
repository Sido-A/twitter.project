import { countUpNumbers, addComment } from "./json.constructor";
import API from "./API";
import { newDate } from "./create.new.tweet";
import "./comment.tree";
import { goToCommentTree } from "./comment.tree";

//DOM
const userInfo = document.querySelector(".userInfo");
export const parseUser = JSON.parse(localStorage.getItem("user"));
export const EveryTweets = JSON.parse(localStorage.getItem("EveryTweets"));

const userImgWrap = document.querySelector(".userImgWrap");
const tweetContainer = document.querySelector(".tweetContainer");
const newTweet = document.querySelector(".createNewTweet");


const clickRetweets = () => {
  const retweets = document.querySelectorAll(".retweet");
  const EveryTweets = JSON.parse(localStorage.getItem("EveryTweets"));

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
            countUpNumbers(parseInt(targetId), {
              retweets: CurrentTotalRetweetNumber,
            });
            retweet.classList.add("colouredRetweet")
            retweetCounter.innerText = CurrentTotalRetweetNumber;
          }
        });
      });
    }
  });
};

const clickLikes = () => {
  const likes = document.querySelectorAll(".likes");
  const EveryTweets = JSON.parse(localStorage.getItem("EveryTweets"));
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
            countUpNumbers(parseInt(targetId), {
              likes: CurrentTotalLikesNumber,
            });
            like.classList.add("colouredHeart")
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
        const targetId = e.target.classList[1];
        const hasClass = replyButton.classList.contains(
          `replyButton-id${targetId}`
        );

        if (hasClass) {
          const textValue = document.querySelector(`.textValue-id${targetId}`)
            .value;
          const replyBodyValue = textValue;
          const userId = parseUser.id;

          if (replyBodyValue !== "") {
            const newReplyCommentObj = {
              userId: userId,
              tweetId: parseInt(targetId),
              content: replyBodyValue,
              date: newDate,
            };

            addComment(newReplyCommentObj);
          }

          location.reload();
        }
      });
    }
  });
};

//show comment input when click reply icon and hide with arrow click
const clickCommentToTweet = () => {
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
            reply.classList.add("colouredReply")
            if (typeReplyWrapperClass) {
              uniqueId.classList.remove("typeReplyWrapper");
            }
            goBack.addEventListener("click", () => {
              uniqueId.classList.add("typeReplyWrapper");
              reply.classList.remove("colouredReply")

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
            <div class="tweetMessage ${tweet.id} tweetMessage-id${tweet.id}">
              <p class="content ${tweet.id} content-id${tweet.id}">${tweet.content}</p>
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
              <div class="typeReply ${tweet.id} typeReply-id${tweet.id}">
                <textarea class="textValue-id${tweet.id} ${tweet.id}" name="reply" id="replyBody" cols="30" rows="10"></textarea>
                <div class="typeReplyFooter">
                  <div class="goBack"><span class="goBack${tweet.id}">←</span></div>
                  <!--go-back-->
                  <div class="postReply">
                    <button class="replyButton-id${tweet.id} ${tweet.id}" type="submit">Reply</button>
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

  clickCommentToTweet();
  clickLikes();
  clickRetweets();
  goToCommentTree();
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

const changeUserImg = () => {
  if (userImgWrap) {
    window.addEventListener("load", function () {
      document.querySelector('input[type="file"]').addEventListener("change", function () {              
          if (this.files && this.files[0]) {
            const profileImg = document.querySelector(".profileImg");
            profileImg.id = "changeUserImg"
            profileImg.src = URL.createObjectURL(this.files[0]); // set src to blob url
          }
        });
    });
  }
};

API.getTweets().then((tweets) => {
  localStorage.setItem("EveryTweets", JSON.stringify(tweets));

  renderTweet(tweets);
});

renderUserInfo(parseUser);
changeUserImg();
