# Twitter clone Project

This site is NOT hosted.<br/>
Made with Vanila JS, HTML,CSS.<br/>
Used local database with json.

## Install and Run

```
npm install
```

```
npm start
```

This will start `json-server` at `localhost:3000` and a Webpack server at `localhost:8080`.

## `Features`

* Login
  * I"login" as a user if the username matches any in from the API (no functionality for password)
* Create a new tweet
  * Where the `userId` is the ID of the logged in user
* Update avatar on avatar click
  * On your profile page, click the avatar to open a file dialog, the user can select an image file, which is displayed as the new avatar(no backend to save the changes)
* Leave a comment
  * Where the `tweetId` is the tweet which the comment belongs to and the `userId` is the ID of the logged in user
* Like
  * Increase number (Can add likes infinite)
* Retweet
  * Increase number (Can add retweet infinite)

### API Relationships

To include children resources, add `_embed`

```
GET /tweets?_embed=comments
GET /tweets/1?_embed=comments
```


To include a parent resource, add `_expand`

```
GET /comments?_expand=tweet
GET /comments/1?_expand=tweet
```

To get or create nested resources

```
GET  /tweets/1/comments
POST /tweets/1/comments
```

