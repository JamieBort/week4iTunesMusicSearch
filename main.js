/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

// Take what is entered in the search field and foward it to the api once the search button is selected

document.getElementById('searchButton').addEventListener('click', function(){
  alert("whoops!");
});



// Working query:      https://itunes.apple.com/search?media=movie&term=comedy

// and    https://itunes.apple.com/search?term=jack+johnson

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

        document.getElementById('one').innerHTML = `artistId: ` + data.results[0].artistId;
        document.getElementById('two').innerHTML = `kind: ` + data.results[0].kind;
        // document.getElementById('email').innerHTML = `Email: ` + data.email;
        // document.getElementById('company').innerHTML = `Company: ` + data.company;
        // document.getElementById('blog').innerHTML = `Website: ` + data.blog;
        // document.getElementById('bio').innerHTML = data.bio;
        // var pic = document.getElementById('pic')
        // pic.setAttribute("src", data.avatar_url);

        console.log(data.results[0])
        console.log(data.results[0].artistId);
        console.log(data.results[0].kind);
        // console.log("Here is the data:", data);
        console.log(data.results[0].wrapperType);
      });
    }
  )
  .catch(function (err) {
    console.log("Fetch Error :-S", err);
  });