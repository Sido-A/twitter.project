/* <div class="tweet">
          <div class="tweetHeader">
            <p class="name">name</p>
            <p class="postDate">post date</p>
          </div>
          <!--tweetHeader-->
          <div class="tweetBody">
            <div class="tweetMessage">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                illo? Excepturi id totam accusantium at obcaecati deserunt
                dolor. Minima, placeat laudantium maiores rem alias ad quos
                suscipit impedit quia similique?
              </p>
            </div>
            <!--tweetMessage-->
            <div class="like-share-icons">
              <div class="likes">
                <img src="#" alt="" />
                <p>25</p>
              </div>
              <!--likes-->
              <div class="retweet">
                <img src="#" alt="" />
                <p>150</p>
              </div>
              <!--retweet-->
              <div class="reply">
                <img src="#" alt="" />
                <p>30</p>
              </div>
              <!--reply-->
            </div>
            <!--like-share-icons-->
          </div>
          <!--tweetBody-->
        </div>
        <!--tweet--><div class="tweet">
          <div class="tweetHeader">
            <p class="name">name</p>
            <p class="postDate">post date</p>
          </div>
          <!--tweetHeader-->
          <div class="tweetBody">
            <div class="tweetMessage">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                illo? Excepturi id totam accusantium at obcaecati deserunt
                dolor. Minima, placeat laudantium maiores rem alias ad quos
                suscipit impedit quia similique?
              </p>
            </div>
            <!--tweetMessage-->
            <div class="like-share-icons">
              <div class="likes">
                <img src="#" alt="" />
                <p>25</p>
              </div>
              <!--likes-->
              <div class="retweet">
                <img src="#" alt="" />
                <p>150</p>
              </div>
              <!--retweet-->
              <div class="reply">
                <img src="#" alt="" />
                <p>30</p>
              </div>
              <!--reply-->
            </div>
            <!--like-share-icons-->
          </div>
          <!--tweetBody-->
        </div>
        // <!--tweet--> */

//DOM
const userInfo = document.querySelector(".userInfo");
const parseUser = JSON.parse(localStorage.getItem("user"));
const userImgWrap = document.querySelector(".userImgWrap");
const tweetContainer = document.querySelector(".tweetContainer");
const newTweet = document.querySelector(".createNewTweet");

const clickReply = ()=> {
  const reply = document.querySelector("a.reply");


    reply.addEventListener("click", (e) => {
      console.log(e.target);
      
      // const typeReplyWrapperId = document.querySelector("#typeReplyWrapperBlock")
      // const typeReplyWrapperClass = document.querySelector(".typeReplyWrapper")

      // if (typeReplyWrapperClass) {
      //   console.log("HELLO");
      //   typeReplyWrapperId.classList.remove("typeReplyWrapper")
      // } else {
      //   typeReplyWrapperId.classList.add("typeReplyWrapper")
      // }

    })
}


const renderTweet = (parseUser) => {
  const tweets = parseUser.tweets;
  tweets.forEach((tweet) => {
    if (tweet.reply === undefined) {
      tweet.reply = 0;
    }

    if (tweetContainer) {
      const tweetBox = document.createElement("div");
      tweetBox.classList.add("tweet");
      tweetBox.innerHTML = `
          <div class="tweetHeader">
            <p class="name">${parseUser.name}</p>
            <p class="postDate">${tweet.date}</p>
          </div>
          <!--tweetHeader-->
          <div class="tweetBody">
            <div class="tweetMessage">
              <p>${tweet.content}</p>
            </div>
            <!--tweetMessage-->
            <div class="like-share-icons">
              <div class="likes">
                <p>${tweet.likes}</p>
              </div>
              <!--likes-->
              <div class="retweet">
                <p>${tweet.retweets}</p>
              </div>
              <!--retweet-->
              <a class="reply" id="${tweet.id}" href="#">
                <p>${tweet.reply}</p>
              </a>
              <!--reply-->
            </div>
            <!--like-share-icons-->
            
            <div class="typeReplyWrapper" id="typeReplyWrapperBlock">
              <div class="typeReply">
                <textarea name="reply" id="replyBody" cols="30" rows="10"></textarea>
                <div class="typeReplyFooter">
                  <div class="goBack"><a href="#">←</a></div>
                  <!--go-back-->
                  <div class="postTweet">
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
};

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

renderTweet(parseUser);
renderUserInfo(parseUser);
changeUserImg(parseUser);
clickReply();
