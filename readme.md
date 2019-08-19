![project logo](../media/logo-horizontal.png?raw=true)
> Web app for rock-climbers that allows to record all climbed routes and provides some visualized statistics about them.

# Introduction

**Crag-log** app was started as a training project to learn React and Redux. I'm a passionate climber so I decided to create an app connected with this sport, that could be helpful for me or other climbers. Current version is quite basic, but it works and has all the functionality that I initially planned. I learned a lot while coding it and had a lot of fun, so I'm planning not to stop at this point and improve it, add more functionality, make it more complex.

### **Demo:**
Live demo of the app is available **[HERE](http://crag-log.herokuapp.com)**

![Heroku](http://heroku-badge.herokuapp.com/?app=crag-log&style=flat)

If you just want to check how it works and not create new account, you can just log in with these credentials:
> **login**: *testuser*
>
> **password**: *password123*

***

![screenshots](../media/animation.gif?raw=true)

# General info and features

### **Frontend**:
Frontend side of the app is built on *React* using *Create React App*. It uses *react-router* for routing, *styled-components* for styling, *redux* for managing app state.

Components were made with *Atomic Design* methodology - they are divided into atoms, molecules, organisms, templates and views for better consistency and scalability. During development, *storybook* was used to test individual components.

The app is generally divided into two main parts:
* **Climbs section** - in this view, the user can see all climbing routes that he/she finished, presented as cards on a grid. Each card has some basic info about the route, clicking "see more" button shows a more detailed view of selected climb. Clicking "plus" button on the bottom of the screen shows a panel for adding a new climb.
* **Stats section** - in this view the data about all added climbs is presented in form of charts and lists. For displaying charts I used *nivo* library. In current version the presented statistics are quite basic, but there is a room for more complex analysis and presentation of the data, which can be implemented in next versions of the app.

The app is responsive to some extent - unfortunatelly it doesn't support smartphones yet. For widths 768px and more it is fully responsive, while on smaller devices it shows an info saying that the app requires bigger screen.

### **Backend**
I am not a backend developer and this project was made mostly to learn React, therefore backend side of the app is very basic and can't be considered as a ready product. Big part of the code was taken from a backend provided to the React course by [helloroman](https://github.com/helloroman) (thank you!) and then modified by me. It is built on *Node.js* and *Express* with a database on *MongoDB Atlas*.

There is definitelly a room for big improvements on the backend side of this app and I am planning to work on it in the future development.

# Technologies

Following technologies, libraries and packages were used to create this app:
* **Frontend**:
  * React
  * react-router
  * styled.components
  * redux.
  * redux-thunk
  * nivo
  * moment.js
  * Formik
  * Axios
* **Backend**:
  * Node.js
  * Express
  * Mongoose
  * Morgan
  * passport

# Setup
If you want run this project on your machine, here is the instruction:

1. Install packages:
```bash
## from main directory:
$ yarn install
$ yarn run client-install
```
2. Add a .env file to the main directory with an adress to your MongoDB database:
```javascript
NODE_DATABASE= [your database adress]
```
3. Run the project in development mode (following command will run the react app and server concurrently):
```bash
## from main directory:
$ yarn run dev
```

# Issues and to-do

First version of the app is quite basic and has a lot of room for future improvements. Here is my to-do list for this project, if you find any bug or have idea for improvement - feel free to submit an issue.

* RWD - need to create proper mobile version
* Error handling for API requests- currently there is none :/
* ~~User is logged out after every refresh~~ *DONE 19.08.19 - basic fix with localstorage*
* Routing doesn't work properly on Heroku deployed build
* Forms validation (login, register and new item) - in Formik and Yup
* Proper authentication - currently API routes are not protected, after login, user gets the ID, it is stored and then used for making the requests, so it is not very safe...
* Inputs type "select" don't appear properly on Firefox and Safari

### **Ideas for new features**
* Possibility to upload photos of the route
* Map showing the route location in the climb details view
* Line chart showing progress made in time (eg. highest level climbed in every month, average level in every month, etc.)
* Social network functionalities - possibility to see other peoples climbs, etc.

# Credits
* Icons from [Noun Project](https://thenounproject.com/):
  * Carabiner by *Jeremie Sommet*
  * Stats by *Barracuda*
  * Logout by *Manivasakan*
* Background pattern by Steve Schoger from [HeroPatterns](https://www.heropatterns.com/)
* Backend code based on the one by [helloroman](https://github.com/helloroman) provided to [React Course on Eduweb](https://eduweb.pl/kursy/javascript/react-w-praktyce.html)
* Thanks to Klaudia Sziller for help in the design






