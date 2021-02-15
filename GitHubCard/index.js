import axios from "axios"

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

//const URL = 'https://api.github.com/users/aSkylitDriveYO';


  axios
    .get(`https://api.github.com/users/aSkylitDriveYO`)
    .then(response => {
      
      console.log(response.data)
      console.log(cardMaker(response.data));
      
    })
    .catch(error => {
      console.log(error)
    });



  const followersArray = ['tetondan',
    'dustinmyers',
    'justsml',
    'luishrd',
    'bigknell',
  'BrityHemming'];
  
  axios
    .get(`https://api.github.com/users/aSkylitDriveYO/following`)
    .then(res => {
      res.data.forEach(newUser => {
        cardMaker(newUser);
      })
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  
    followersArray.forEach(user => {
      axios
        .get(`https://api.github.com/users/`+user)
        .then(res => {
          console.log(res);
          cardMaker(res.data);
        })
        .catch(err => {
          console.log(err);
        })
    })
    



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker (userObj) {
  const card = document.createElement('div');
  card.classList.add("card");

  const img = document.createElement("img");

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  const name = document.createElement("h3");
  name.classList.add("name");

  const userName = document.createElement("p");
  userName.classList.add("username");

  const location = document.createElement("p");

  const profile = document.createElement("p");

  const githubAddress = document.createElement("a");

  const followers = document.createElement("p");

  const following = document.createElement("p");

  const bio = document.createElement("p");

  const cards = document.querySelector('.cards');

  profile.appendChild(githubAddress);
  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  img.setAttribute('src', userObj.avatar_url);
  name.innerText = userObj.name;
  userName.innerText = userObj.login;
  location.innerText = `Location: ${userObj.location}`;
  profile.textContent = 'Github: '
  githubAddress.setAttribute('href',`${userObj.html_url}`);
  followers.innerText = `Followers: ${userObj.followers}`;
  following.innerText = `Following: ${userObj.following}`;
  bio.innerText = `Bio: ${userObj.bio}`;

  cards.appendChild(card);
  console.log(card);
  return card;
  
  



}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
