// Get the element, add a click listener...
document.getElementById("parent-list").addEventListener("click", function(e) {
	// e.target is the clicked element!
	// If it was a list item
	if(e.target && e.target.nodeName == "LI") {
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
