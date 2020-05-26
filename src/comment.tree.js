import { API_ENDPOINT } from "./API";
import { parseUser } from "./home-tweet";
import { createNewTweet, addComment } from "./json.constructor";
import { newDate } from "./create.new.tweet";

//DOM
const getSubCommentStringify = JSON.parse(localStorage.getItem("subComment"));
const getMainCommentStringify = JSON.parse(localStorage.getItem("mainComment"));

const submitComment = () => {
  const postReply = document.querySelector(".postReply");
  if (postReply) {
    postReply.addEventListener("click", () => {
      const replyBody = document.querySelector("#replyBody");
      const textValue = replyBody.value;
      const tweetId = getSubCommentStringify[0].tweetId;
      const userId = parseUser.id;

      if (textValue !== "") {
        const newReplyCommentObj = {
          userId: userId,
          tweetId: tweetId,
          content: textValue,
          date: newDate,
        };
        addComment(newReplyCommentObj);
      }
      location.reload();
    });
  }
};

const closeAddComment = () => {
  const addCommentGoBack = document.querySelector(".addCommentGoBack");

  if (addCommentGoBack) {
    addCommentGoBack.addEventListener("click", (e) => {
      const replyToCommentBlock = document.querySelector(
        ".replyToCommentBlock"
      );
      replyToCommentBlock.classList.add("replyToComment");
    });
  }
};

const openAddComment = () => {
  const reply = document.querySelector(".reply");
  if (reply) {
    reply.addEventListener("click", (e) => {
      const replyToCommentBlock = document.querySelector(
        ".replyToCommentBlock"
      );
      replyToCommentBlock.classList.remove("replyToComment");
    });
  }
  submitComment();
  closeAddComment();
};

const renderTreeComments = () => {
  const commentsTree = document.querySelector(".commentsTree");
  const mainComment = document.querySelector(".mainComment");
  if (mainComment) {
    getSubCommentStringify.forEach((sub) => {
      console.log(sub);
      const treeComment = document.createElement("div");
      treeComment.classList.add("treeComment");
      treeComment.innerHTML = `<div class="treeCommentHeader">
                <div class="profilePhoto">
                  <img src="${sub.user.avatar_url}" alt="profile photo" />
                </div>
                <!--profilePhoto-->
                <div class="userDetails">
                  <h1>${sub.user.name}</h1>
                  <p>@${sub.user.name}</p>
                </div>
                <!--userDetails-->
              </div>
              <!--treeCommentHeader-->
              <div class="treeCommentBody">
                <p>
                  ${sub.content}</p>
              </div>
              <!--treeCommentBody-->`;

      commentsTree.append(treeComment);
    });
  }
};

const renderMainComment = () => {
  const mainCommentWrapper = document.querySelector(".mainCommentWrapper");
  if (mainCommentWrapper) {
    const main = getMainCommentStringify;
    console.log("getStringify", main);
    const mainComment = document.createElement("div");
    mainComment.classList.add(`mainComment`, `${main.id}`);
    mainComment.innerHTML = `
  <div class="mainCommentHeader">
    <div class="profilePhoto">
      <img src="${main.url}" alt="profile photo" />
    </div>
    <!--profilePhoto-->
    <div class="userDetails">
      <h1>${main.userName}</h1>
      <p>@${main.userName}</p>
    </div>
    <!--userDetails-->
            </div>
  <!--mainCommentHeader-->
            <div class="mainCommentBody">
    <p>${main.content}</p>
  </div>
  <!--mainCommentBody-->
            <!--commentBody-->
            <div class="mainCommentFooter">
    <div class="like-share-icons">
      <div class="likes">
        <p class="likesNumber">
          ${main.likes}
                  </p>
      </div>
      <!--likes-->
                <div class="retweet">
        <p class="retweetNumber">
          ${main.retweets}
                  </p>
      </div>
      <!--retweet-->
                <div class="reply">
        <p>${main.replies}</p>
      </div>
      <!--reply-->
              </div>
    <!--like-share-icons-->
            </div>
  <!--commentFooter-->
            <div class="replyToComment replyToCommentBlock">
    <textarea name="" id="replyBody" cols="30" rows="10"></textarea>
    <div class="replyToCommentFooter">
      <div class="addCommentGoBack"><p>←</p></div>
      <!--go-back-->
                <div class="postReply">
        <button type="submit">Tweet</button>
      </div>
      <!--postReply-->
              </div>
    <!--replyToCommentFooter-->
            </div>
  <!--replyToComment-->`;
    mainCommentWrapper.append(mainComment);
  }
  openAddComment();
};

const storeMainComment = (mainCommentObj) => {
  const mainCommentStringify = JSON.stringify(mainCommentObj);
  localStorage.setItem("mainComment", mainCommentStringify);
};

const storeSubComments = (subCommentObj) => {
  const subCommentStringify = JSON.stringify(subCommentObj);
  localStorage.setItem("subComment", subCommentStringify);
  replaceLocation();
};

const replaceLocation = () => {
  location.replace("./comments.html");
};

const getSubCommentTree = async (id) => {
  await fetch(`${API_ENDPOINT}/comments?_expand=user&_expand=tweet`)
    .then((res) => res.json())
    .then((res) => {
      const comments = res
        .map((r) => {
          if (r.tweetId == id) {
            return r;
          }
        })
        .filter((r) => r !== undefined);
      storeSubComments(comments);
    });
};

 const getMainUserComment = async (id) => {
  await fetch(`${API_ENDPOINT}/tweets/${id}?_expand=user&_embed=comments`)
    .then((res) => res.json())
    .then(
      (res) => {
        console.log(res);

        const mainCommentObj = {
          id: res.id,
          content: res.content,
          userName: res.user.name,
          atMarkUserName: res.user.name,
          likes: res.likes,
          retweets: res.retweets,
          replies: res.comments.length,
          url: res.user.avatar_url,
        };
        console.log(mainCommentObj);

        storeMainComment(mainCommentObj);
      }
      // .content
      // user.name// user.name(@)
    );
};

export const goToCommentTree = () => {
  const tweetMessages = document.querySelectorAll(".tweetMessage");
  tweetMessages.forEach((tweetMessage) => {
    if (tweetMessage) {
      tweetMessage.addEventListener("click", (e) => {
        console.log(tweetMessage);

        const targetId = e.target.classList[1];
        const hasClass = tweetMessage.classList.contains(
          `tweetMessage-id${targetId}`
        );
        if (hasClass) {
          getMainUserComment(targetId);
          getSubCommentTree(targetId);
        }
      });
    }
  });
};
goToCommentTree();
renderMainComment();
renderTreeComments();
