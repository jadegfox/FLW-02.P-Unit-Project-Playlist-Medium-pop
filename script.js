// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
let imageArts = ["https://m.media-amazon.com/images/M/MV5BN2ZkYzkzYmUtNzFjOC00YTRmLWIwYjEtMWZiYjI4Mzg4ZTJjXkEyXkFqcGdeQXVyNjk5NzY4OTk@._V1_.jpg","https://mir-s3-cdn-cf.behance.net/projects/404/ed188b144786865.Y3JvcCwxMDgwLDg0NCwwLDI1MQ.jpg","https://ih1.redbubble.net/image.2537238537.6267/aps,504x498,medium,transparent-pad,600x600,f8f8f8.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-0u2_BtHLmeFodM4OzN442knYIP50L8-YA&usqp=CAU"];
let artists = ["BTS","enhypen","TXT","seventeen"]; 
let songTitle = ["spring day","polaroid love","anti-romantic","world"]; 
let songMusic = ["https://www.youtube.com/watch?v=OUutARJgw-g","https://www.youtube.com/watch?v=sdsPWMCKIkA","https://www.youtube.com/watch?v=d1w5eJozVjo"
,"https://www.youtube.com/watch?v=VCDWg0ljbFQ"];

//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
let newImage = image.vaule 
let newSongName = song-name.vaule 
let newArist = artist.vaule 
let newSongLink = song-link.vaule 

// task 10: use `.push()` to add each input value to the correct array.

}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {
imageArts.forEach(function(image){
displayImage.insertAdjacentHTML("beforeend",`<img src=${image}/>`)
})  
artists.forEach(function(artist){
displayArtist.insertAdjacentHTML("beforeend",`<p>${artist}</p>`)
})  
songTitle.forEach(function(Title){
displaySong.insertAdjacentHTML("beforeend",`<p>${Title}</p>`) 
})  
 songMusic.forEach(function(Music){
displayLink.insertAdjacentHTML("beforeend",`<p><a href=${Music}>link</a></p>`) 
})   
// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.



}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
