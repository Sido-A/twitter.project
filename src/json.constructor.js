import { API_ENDPOINT } from "./API";
console.log(API_ENDPOINT);


export const patchComment = async (id, countUp) => {
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

export const postComment = async (id, newComment) => {
    const configObjectPatch = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(newComment),
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
}