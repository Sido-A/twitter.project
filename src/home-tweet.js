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

import API from "./API";
import { getUsers } from "./API";
import { loginSuccess} from "./login"
//DOM
const newTweet = document.querySelector(".createNewTweet")
console.log(newTweet);



export const renderUserInfo = (user) => {
    console.log(user);
    const userInfo = document.createElement("div")
    userInfo.classList.add("userInfo")
    
    userInfo.innerHTML = `
          <div class="userImg">
            <img src="${user.avatar_url}" alt="some image" />
          </div>
          <div class="twitterViewUser">
            <h1>${user.name}</h1>
            <div class="twitterUserDetails">
              <div class="tagNameLocation">
                <p class="tagName">&#64;${user.name}</p>
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
          <!--twitterViewUser-->`


}

const renderUser = () => {

}

export const clickNewTweet = () => {
    const newTweet = document.querySelector(".createNewTweet")
    newTweet.addEventListener("click", (e) => {
        console.log(e.target);
    })
}