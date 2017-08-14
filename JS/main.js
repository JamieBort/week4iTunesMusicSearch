let player = document.getElementById(player);
let search = document.getElementById(search);
let results = document.getElementById(results);

// Use addEventListener to clear search.

// let clear = document.getElementById(clear); // not necessary
clear.addEventListener('click', function() {
  results.innerHTML = ' ';
})

// Use addEventListener to search

search.addEventListener('click', function() {
  something
})


// Use fetch request to display list of songs from a search

fetch()

fetch(`https://itunes.apple.com/search?term==${input.value}`).then(
    function(response) {
      if (response.status === 200) {
        return response.json();
      }
    })
  .then(function(data) {
    console.log(data);
    results.innerHTML = ' ';

    // Loop through API data to retrieve search input
  });









// The following is from Kelly's assignment.
//
// 1. Select and store elements
// 2. create submit event for getting the users search term
// 3. create fetch request that is called after a submission
// 4. create way to append the fetch results to your page
// 5. create a way to listen for a click that will play the song in the audio play.

// SELECT AND STORE ELEMENTS FROM HTML PAGE ================


// CREATE EVENT LISTENER FOR SEARCH BUTTON ===========


// Setup FETCH TO ACCESS API ==============



// Get the element, add a click listener...
document.getElementById("parent-list").addEventListener("click", function(e) {
  // e.target is the clicked element!
  // If it was a list item
  if (e.target && e.target.nodeName == "LI") {
    // List item found!  Output the ID!
    console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
  }
});


// =================================
// The following is from the Git Hub Data V Card assignment
//
//
// let container = document.querySelector('#apiInfo');
//
// let request = new XMLHttpRequest();
// request.addEventListener("load", displayGitHubInfo);
// request.open('GET', 'https://api.github.com/users/jamiebort');
// request.send();
//
// function displayGitHubInfo() {
//
//   let data = JSON.parse(this.responseText);
//
//
//   document.getElementById('name').innerHTML = `Name: ` + data.name;
// =================================





// ==========================================
// the following is from: https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/


// The fully-qualified URL must have the following format:
//
// https://itunes.apple.com/search?parameterkeyvalue
//
// Where parameterkeyvalue can be one or more parameter key and value pairs indicating the details of your query.
//
// To construct a parameter key and value pair, you must concatenate each parameter key with an equal sign (=) and a value string. For example: key1=value1. To create a string of parameter key and value pairs, you must concatenate each pair using an ampersand (&). For example:
//
// key1=value1&key2=value2&key3=value3
//
// Note: When creating search fields and scripts for your website, you should use dynamic script tags for your xmlhttp script call requests. For example:
//
// <script src="https://.../search?parameterkeyvalue&callback="{name of JavaScript function in webpage}"/>
// ==========================================
