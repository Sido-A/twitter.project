import API from "./API";
API.getTweets().then((res) => {
  res.forEach((r) => {
    // console.log(r.comments);
  });
});

//DOM
const tweetMessages = document.querySelectorAll(".tweetMessage");

// console.log(tweetMessages);

const allMessages = () => {
  if (tweetMessages) {
    tweetMessages.forEach((tweetMessage) => {
      tweetMessage.addEventListener("click", (e) => {
        // console.log(e);

        // location.replace("./comments.html")
      });
    });
  }
};

allMessages();
