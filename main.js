/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

// Take what is entered in the search field and foward it to the api once the search button is selected
var body = document.querySelector("body");
// var div = document.createElement("div")
// body.appendChild(div);

document.getElementById('searchButton').addEventListener('click', function () {
  alert("whoops!");
});

// TODO: modify URL so that it is populated by the search field.
fetch('https://itunes.apple.com/search?term=jack+johnson')
  // Data is fetched and we get a promise.
  .then(
    // The promise returns a response from the server.
    function (response) {
      // We process the response accordingly.
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function (data) {
        // TODO: iterate over the json object so that each element is caputred here.
        
        for (let i = 0; i < data.results.length; i++) {

          var div = document.createElement("div");
          body.appendChild(div);
          div.innerHTML =
            `<li><img id="image" src=${data.results[i].artworkUrl100}></li>`

          var ul = document.createElement("ul");
          var li1 = document.createElement("li");
          var li2 = document.createElement("li");

          div.appendChild(ul);
          ul.appendChild(li1);
          ul.appendChild(li2);

          li1.innerHTML = data.results[i].artistId;
          li2.innerHTML = data.results[i].kind;
        }
        // document.getElementById('one').innerHTML = `artistId: ` + data.results[i].artistId;
        // document.getElementById('two').innerHTML = `kind: ` + data.results[i].kind;
        // var pic = document.getElementById('pic')
        // pic.setAttribute("src", data.results[i].artworkUrl30);
        // var pic2 = document.getElementById('pic2')
        // pic2.setAttribute("src", data.results[i].artworkUrl60);
        // var pic3 = document.getElementById('pic3')
        // pic3.setAttribute("src", data.results[i].artworkUrl100);

        // console.log(data.results.length);
        // console.log(data.results[i])
        // console.log(data.results[i].collectionName);
        // console.log(data.results[i].collectionId);
        // console.log("Here is the data:", data);
        // console.log(data.results[i].trackName);
      });
    }
  )
  .catch(function (err) {
    console.log("Fetch Error :-S", err);
  });