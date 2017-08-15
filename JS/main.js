let player = document.getElementById("player");
let search = document.getElementById("search");
let result = document.getElementById("result");

// Use addEventListener to clear search.
clear.addEventListener('click', function() {
  result.innerHTML = ' ';
});

// Use addEventListener to search
search.addEventListener('click', function() {

  // Use fetch request to display list of songs from a search
  fetch(`https://itunes.apple.com/search?term==${mySearch.value}`).then(
      function(response) {
        if (response.status === 200) {
          return response.json();
        }
      })
    .then(function(data) {
      console.log(data);
      result.innerHTML = '';

      // Loop through API data to retrieve search input
      let artist = document.getElementsByClassName("Artist_Bio")
      let results = data.results;
      for (i = 0; i < results.length; i++) {
        let innerBox = document.createElement("section");
        result.appendChild(innerBox);
        innerBox.className = "Artist_Bio"
        innerBox.value = `${results[i].previewUrl}`
        innerBox.innerHTML =
          `<h3>${results[i].artistName}</h3>
		<h4>${results[i].trackName}</h4>
		 <img src="${results[i].artworkUrl100}"></img>
		 <div style="display: none" class = "preview"  >${data.results[i].previewUrl}</div>`;
        console.log(artist.value);
        innerBox.addEventListener("click", function() {
          player.src = innerBox.value;
        })
      }
    })
});
