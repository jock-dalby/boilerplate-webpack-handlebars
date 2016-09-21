var userprofile = require('./templates/userprofile.hbs')
var newsfeed = require('./templates/newsfeed.hbs')
var followList = require('./templates/followees.hbs')
var bizList = require('./templates/bizs.hbs')
// Add event listener to whole doc to activate when 'DOMContentLoaded'
document.addEventListener('DOMContentLoaded', function () {
  // Declare womble variables to be add to wombleList
  var user = [
    {   userName: "Panhead Custom Ales",
        logo: "http://panheadcustomales.com/images/BeerImages/Badges/xpa.png",
        password: "password123"
    }
  ]
  var posts = [{
      user_id: 1,
      post: "Hey, what a great day!"
      },
  {
      user_id: 3,
      post: "Chicken sarnies!"
  },
  {
      user_id: 7,
      post: "Potato!"
  }]
  var followees = [{
      user_id: 10,
      followee_id: 10
  },
  {
      user_id: 10,
      followee_id: 2,
  },
  {
      user_id: 10,
      followee_id: 4
  }]
  var biz = [{
      userName: "ParrotDog",
      logo: "http://idealog.co.nz/media/VERSIONS/images/blog/2012/02/parrotdog_lcolour_hi_950x700--upscale.jpg",
      password: "password123"
  },
  {
      userName: "Croucher Brewing",
      logo: "https://pbs.twimg.com/profile_images/627365960/croucher_logo_-_no_star_400x400.jpg",
      password: "password123"
  },
  {
      userName: "Tuatara",
      logo: "https://pbs.twimg.com/profile_images/563610998754390016/jcUTpdbT.jpeg",
      password: "password123"
  },
  {
      userName: "Liberty Brewing",
      logo: "https://pbs.twimg.com/profile_images/673928067736166400/yYpYqfH7.jpg",
      password: "password123"
  }]
  refreshContent(user, posts, followees, biz)
})

function refreshContent (user, posts, followees, biz) {
  document.getElementById('profile').innerHTML = userprofile({ user: user })
  document.getElementById('news').innerHTML = newsfeed({ posts: posts })
  document.getElementById('followlist').innerHTML = followList({ followees: followees })
  document.getElementById('bizList').innerHTML = bizList({ biz: biz })
  // bindEventListeners(wombles)
}

// function bindEventListeners (wombles) {
//   // Grabs all the <li> elements on the page
//   var lis = document.getElementsByTagName('li')
//   // Loops through all ot the <li> elements one at a time
//   for (var i = 0; i < lis.length; i++) {
//     // Adds 'click' eventlisteners to ALL <li> elements on the page
//     lis[i].addEventListener('click', function (e) {
//       // When the eventlistneers are clicked, the wombleToggle function will be called passing the target element and the wombles variable.
//       wombleToggle(e.target, wombles)
//     })
//   }
// }
//
// function wombleToggle (target, wombles) {
//   // Check's the lastChild of the target element to determine if the nested list already exists
//   console.log(target.lastChild.tagName)
//   // If lastChild of the target element === UL, then a nested list does exist.
//   if (target.lastChild.tagName === 'UL') {
//     // If a nested list exists then we run the removeChild function and delete the list.
//     target.removeChild(target.lastChild)
//     // And then use the return to stop the execution of the function
//     return
//   }
//   // Then calls the appendDetails function passing the target element and the wombles variable.
//   appendDetails(target, wombles)
// }
//
// function appendDetails (target, wombles) {
//   // Reset the match counter to 'null'
//   var match = null
//   // Loops through the wombles variables
//   for (var i = 0; i < wombles.length; i++) {
//     // Checks each womble in the object array against the target element calling it
//     if (wombleMatch(target.innerHTML, wombles[i])) {
//       // When it find's the woble object that matches the target element it passes it to the match var.
//       match = wombles[i]
//     }
//   }
//   // expandWomble function called passing it the matched womble object and the target element being clicked
//   expandWomble(match, target)
// }
//
// function wombleMatch (innerHTML, wombat) {
//   return innerHTML.includes(wombat.email)
// }
//
// function expandWomble (match, target) {
//   // If a match has been found (and match var !== 'null')
//   if (match) {
//     // Creates a new <ul></ul> element
//     var ul = document.createElement('ul')
//     // Inside the <ul> element we insert some innerHTML which is the details.hbs template, with the matched wombles Object passed to it. The details.hbs will find the details key withint he matched wombles object and add it to the newly made list.
//     ul.innerHTML = detailsTemplate(match)
//     // The newly created list is then added to the target element, therefpre creating a nested list.
//     target.appendChild(ul)
//   }
// }
