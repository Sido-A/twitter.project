import API from "./API";
API.getTweets().then((res) => {
  res.forEach((r) => {
    // console.log(r.comments);
  });
});

export const goToCommentTree = () => {
  const tweetMessages = document.querySelectorAll(".tweetMessage");
  tweetMessages.forEach((tweetMessage) => {
    if (tweetMessage) {
      tweetMessage.addEventListener("click", (e) => {
        console.log(e.target);
      });
    }
  });
};
goToCommentTree();
