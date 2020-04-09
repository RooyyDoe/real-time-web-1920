#  Bad word chat app

<img width="676" alt="Schermafdruk 2020-04-09 19 50 42" src="https://user-images.githubusercontent.com/40355914/78925243-72a29a80-7a9b-11ea-960a-a4b146ba1d13.png">

## Install

**Clone the repository of the project**

```
git clone https://github.com/RooyyDoe/real-time-web-1920.git
```

**Navigate to the map**

```
cd real-time-web-1920
```

**Install dependencies**

```
npm install 
```

**Run server in terminal**

```
npm run dev
```

Server running on **localhost:5000**

**Demo** also will be running live at [Bad word chat app](https://switch-chat-app.herokuapp.com/)

## Tech 

### _chat related events_

> new-user

When a new user joins it will pop-up in chat.

___

> own-chat-message

These are the chat messages from the user it self.

___

> their-chat-message

These are the chat messages from the other users in the chat.

___

> someone-is-typing

When a user is typing the other users in the chat will see this at the bottom.

___

### _general related events_

> user-disconnected

When a user disconnects it will show a message in the chat of the user leaving.

___

> user-connected

When a new user connects to the chat it will show a message in the chat.

___

## Special Feature

I've created a app that sensors bad words, so there will be no hate on my unique chat app. The messages will go through a filter and if there is any bad word in the message it will automaticly put *******

For this I've used a NPM package that has a bad-word library, so if one of the words in a message is also in the library it will get filterd to a bad-word.

<img width="256" alt="Schermafdruk 2020-04-09 20 53 08" src="https://user-images.githubusercontent.com/40355914/78930313-2c9e0480-7aa4-11ea-9dc6-769a8ffcea9b.png">


## Sources

* [Mozilla Developer Network](https://developer.mozilla.org/en-US/) - I mostly used this site to obtain my sources
* [First tutorial I have watched](https://www.youtube.com/watch?v=rxzOqP9YwmM&t=926s) - Helped me alot by understanding socket.io
* [Second tutorial I have watched](https://www.youtube.com/watch?v=vQjiN8Qgs3c) - Gave me a better understanding what socket.io does and how to implement ...typing

## Credits

* [Stefan Gerrits](https://github.com/StefanGerrits2/) - Showed me how to add classes to my emits.

