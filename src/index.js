// Requires the hbs template to list wombles on initial page load
var wombleList = require('./templates/womble-list.hbs')
// Requires the hbs template for the additional drop down when click on one of the list items created by the above hbs template
var detailsTemplate = require('./templates/details.hbs')

// Add event listener to whole doc to activate when 'DOMContentLoaded'
document.addEventListener('DOMContentLoaded', function () {
  // Declare womble variables to be add to wombleList
  var wombles = [
    { name: 'Orinocco', email: 'orinocco@wimbledoncommon.net', details: 'Tin cans' },
    { name: 'Tomsk', email: 'tomsk@wimbledoncommon.net', details: 'Plastic bags' },
    { name: 'Bungo', email: 'bungo@wimbledoncommon.net', details: 'Discarded wombat poop' }
  ]
// Call the function refreshContent with the 'wombles' variable
  refreshContent(wombles)
})

function refreshContent (wombles) {
  // When refreshContent is called, the function creates a new html div element
  var div = document.createElement('div')
  // Inside the div element we insert some innerHTML which is the womble-list hbs template, with the wombles variable passed to wombles key
  div.innerHTML = wombleList({ wombles: wombles })
  // Call the function to attach the newly created div into the DOM
  document.body.appendChild(div)
  // Call the bindEventListeners with the wombles variable
  bindEventListeners(wombles)
}

function bindEventListeners (wombles) {
  // Grabs all the <li> elements on the page
  var lis = document.getElementsByTagName('li')
  // Loops through all ot the <li> elements one at a time
  for (var i = 0; i < lis.length; i++) {
    // Adds 'click' eventlisteners to ALL <li> elements on the page
    lis[i].addEventListener('click', function (e) {
      // When the eventlistneers are clicked, the wombleToggle function will be called passing the target element and the wombles variable.
      wombleToggle(e.target, wombles)
    })
  }
}

function wombleToggle (target, wombles) {
  // Check's the lastChild of the target element to determine if the nested list already exists
  console.log(target.lastChild.tagName)
  // If lastChild of the target element === UL, then a nested list does exist.
  if (target.lastChild.tagName === 'UL') {
    // If a nested list exists then we run the removeChild function and delete the list.
    target.removeChild(target.lastChild)
    // And then use the return to stop the execution of the function
    return
  }
  // Then calls the appendDetails function passing the target element and the wombles variable.
  appendDetails(target, wombles)
}

function appendDetails (target, wombles) {
  // Reset the match counter to 'null'
  var match = null
  // Loops through the wombles variables
  for (var i = 0; i < wombles.length; i++) {
    // Checks each womble in the object array against the target element calling it
    if (wombleMatch(target.innerHTML, wombles[i])) {
      // When it find's the woble object that matches the target element it passes it to the match var.
      match = wombles[i]
    }
  }
  // expandWomble function called passing it the matched womble object and the target element being clicked
  expandWomble(match, target)
}

function wombleMatch (innerHTML, wombat) {
  return innerHTML.includes(wombat.email)
}

function expandWomble (match, target) {
  // If a match has been found (and match var !== 'null')
  if (match) {
    // Creates a new <ul></ul> element
    var ul = document.createElement('ul')
    // Inside the <ul> element we insert some innerHTML which is the details.hbs template, with the matched wombles Object passed to it. The details.hbs will find the details key withint he matched wombles object and add it to the newly made list.
    ul.innerHTML = detailsTemplate(match)
    // The newly created list is then added to the target element, therefpre creating a nested list.
    target.appendChild(ul)
  }
}
