import { parseUser } from "./home-tweet";
import { createNewTweet } from "./json.constructor";


const dateObj = new Date();
const month = dateObj.getUTCMonth() + 1; //months from 1-12
const day = dateObj.getUTCDate();
const year = dateObj.getUTCFullYear();

export const newDate = day + "/" + month + "/" + year;

const postNewTweet = () => {
  const postTweetButton = document.querySelector(".postTweet button");
  if (postTweetButton) {
    postTweetButton.addEventListener("click", (e) => {
      const tweetBodyText = document.querySelector(".tweetBodyText");
      const textValue = tweetBodyText.value;
      const userId = parseUser.id;
      const newTweetObj = {

        userId: userId,
        content: textValue,
        likes: 0,
        retweets: 0,
        date: newDate,
      };
      localStorage.setItem("user", JSON.stringify(parseUser));
      createNewTweet(newTweetObj);
    });
  }
};

postNewTweet();
