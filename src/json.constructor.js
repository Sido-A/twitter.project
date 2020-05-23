import { API_ENDPOINT } from "./API";
console.log(API_ENDPOINT);

//count up likes, retweets,reply numbers
export const countUpNumbers = async (id, countUp) => {
  const configObjectPatch = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(countUp),
  };

  return await fetch(`${API_ENDPOINT}/tweets/${id}`, configObjectPatch)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw "Oops we couldn't update that!";
      }
    })
    .catch((error) => error);
};

export const createNewTweet = async (newCommentBody) => {
  const configObjectPatch = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newCommentBody),
  };

  return await fetch(`${API_ENDPOINT}/tweets`, configObjectPatch)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw "Oops we couldn't update that!";
      }
    })
    .catch((error) => error);
};

export const sendReplies = async (commentToTweet) => {
  const configObjectPatch = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(commentToTweet),
  };

  return await fetch(`${API_ENDPOINT}/comments`, configObjectPatch)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw "Oops we couldn't update that!";
      }
    })
    .catch((error) => error);
};

//post
// export const postComment = async (id, newComment) => {
//     const configObjectPatch = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//         },
//         body: JSON.stringify(newComment),
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

//delete replies
// export const deletedReplies = async (id) => {
//     const configObjectPatch = {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//         },
//     };

//     return await fetch(`${API_ENDPOINT}/comments/${id}`, configObjectPatch)
//         .then((res) => {
//             if (res.ok) {
//                 return res.json();
//             } else {
//                 throw "Oops we couldn't update that!";
//             }
//         })
//         .catch((error) => error);
// };

// deletedReplies(101)
