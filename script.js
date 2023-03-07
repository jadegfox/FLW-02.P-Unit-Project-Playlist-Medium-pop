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
//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.
let song1 ={ 
  artists:"BTS",
   songTitle: "spring day",
    Link:"https://www.youtube.com/watch?v=OUutARJgw-g",  
   artistsImage:"https://m.media-amazon.com/images/M/MV5BN2ZkYzkzYmUtNzFjOC00YTRmLWIwYjEtMWZiYjI4Mzg4ZTJjXkEyXkFqcGdeQXVyNjk5NzY4OTk@._V1_.jpg"
} 
let song2 ={
   artists:"enhypen",
   songTitle:"polaroid love",
    Link:"https://www.youtube.com/watch?v=sdsPWMCKIkA",   artistsImage:"https://ih1.redbubble.net/image.2537238537.6267/aps,504x498,medium,transparent-pad,600x600,f8f8f8.jpg"
}
let song3 ={
   artists:"TXT",
   songTitle: "anti-romantic",
    Link:"https://www.youtube.com/watch?v=d1w5eJozVjo",  
   artistsImage:"medium,transparent-pad,600x600,f8f8f8.jpg"
} 
 let song4 ={
   artists:"seventeen",
   songTitle: "world",
    Link:"https://www.youtube.com/watch?v=VCDWg0ljbFQ",  
   artistsImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-0u2_BtHLmeFodM4OzN442knYIP50L8-YA&usqp=CAU"
}
//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
let newImage = image.value 
let newSongName = songName.value 
let newArist = artist.value 
let newSongLink =  songLink.value 

// task 10: use `.push()` to add each input value to the correct array.
imageArts.push(newImage); 
artists.push(newArist); 
songTitle.push(newSongName); 
 songMusic.push(newSongLink)
  emptyDisplay();
}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";  
}

let songList=[ { 
  artists:"BTS",
   songTitle: "spring day",
    Link:"https://www.youtube.com/watch?v=OUutARJgw-g",  
   artistsImage:"https://m.media-amazon.com/images/M/MV5BN2ZkYzkzYmUtNzFjOC00YTRmLWIwYjEtMWZiYjI4Mzg4ZTJjXkEyXkFqcGdeQXVyNjk5NzY4OTk@._V1_.jpg"
},
{
   artists:"enhypen",
   songTitle:"polaroid love",
    Link:"https://www.youtube.com/watch?v=sdsPWMCKIkA",    artistsImage:"https://i.pinimg.com/736x/13/43/2f/13432ff43e58b601ba5a4358f93d997d.jpg"
},
{
   artists:"TXT",
   songTitle: "anti-romantic",
    Link:"https://www.youtube.com/watch?v=d1w5eJozVjo",  
   artistsImage:"medium,transparent-pad,600x600,f8f8f8.jpg"
}, 
 {
   artists:"seventeen",
   songTitle: "world",
    Link:"https://www.youtube.com/watch?v=VCDWg0ljbFQ",  
   artistsImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-0u2_BtHLmeFodM4OzN442knYIP50L8-YA&usqp=CAU"
}
];
 console.log(hello);
function displaySongInfo(){
songList.forEach(function(song){
displayImage.insertAdjacentHTML("beforeend",`<img src=${song.artistsImage}/>`)
displayArtist.insertAdjacentHTML("beforeend",`<p>${song.artists}</p>`)
displaySong.insertAdjacentHTML("beforeend",`<p>${song.songTitle}</p>`)displayLink.insertAdjacentHTML("beforeend",`<p><a href=${song.Link}>link</a></p>`) })    
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
