//array for the photos I have 
let arr2 = [
	{
		src: "https://i.pinimg.com/originals/0f/7b/fa/0f7bfa4e6775b5977694a6036fc85b48.png",
		id: 1
	}, 
	{
		src: "https://i.pinimg.com/originals/94/45/95/9445956962f3542e303e51215552f625.png",
		id: 2
	}, 
	{
		src: "http://pluspng.com/img-png/cartoon-sea-animals-png-bebe-mar-animal-clipart-1800.png", 
		id: 3
	}, 
	{
		src: "http://pngriver.com/wp-content/uploads/2017/11/Dolphin-free-PNG-transparent-background-images-free-download-clipart-pics-Cute-Whale-Transparent-PNG.png",
		id: 4
	}, 
	{
		src: "https://myrealdomain.com/images/clipart-ocean-animals-4.png",
		id: 5
	}, 
	{
		src: "https://www.trzcacak.rs/myfile/full/447-4477683_jellyfish-animal-drawing-fish-transparent-cartoon-ocean-animals.png",
		id: 6
	},
	{
		src: "http://www.clipartpanda.com/clipart_images/cute-fish-clipart-72677808/download",
		id: 7
	},
	{
		src: "https://content.mycutegraphics.com/graphics/sea/cute-fat-fish.png",
		id: 8
	}
	
];  //for the initial photos


//let level = prompt('what level do you want? (1, 2, 3)','');


let arr = [];  //the array with which we are working with 
var l = 1; //for levels in HTML
var sl = 2;
var arr1;
var score;

var lev = document.getElementById("writtenLevel");
var sc = document.getElementById("writtenScore");


 
arr = arr2.slice(0, sl);
arr1 = arr.slice();
arr = arr.concat(arr1);
sc.innerHTML = score;
lev.innerHTML = l;
score = 500;


if (ending === arr.length) {
	setTimeout(function() {
		myFunction();
	}, 900);
}

//mix the array 
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
arr = shuffle(arr);



//Timer 
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
	if(ending !== arr.length){
		++totalSeconds;
	}else{
		return totalSeconds; 
	}
	secondsLabel.innerHTML = pad(totalSeconds % 60);
	minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60)); 
}


function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}



// paint the screen 
var screen = document.querySelector(".screen");
var count = 0;
var openedImg;
var clickable = true; 
var ending = 0;


function a(){

	for( let i=0; i < arr.length; i++ ) {
		var img = document.createElement("img"); 
		img.src = "https://www.accountwarehouse.com/images/info.png";	
		img.dataset.id = arr[i].id;
		screen.appendChild(img);
		
		img.onclick = function (event) {
				
			if(!clickable || event.target.src == arr[i].src) return;

			event.target.src = arr[i].src;
			count++;	
			score -= 50; 
			sc.innerHTML = score;

			if(count == 1) {
				openedImg = event.target; 

			} else {
				count = 0;

				if(openedImg.dataset.id != arr[i].id) {
					clickable = false;

					setTimeout(function() {
						ending-=2;
						event.target.src = "https://www.accountwarehouse.com/images/info.png";
						openedImg.src = "https://www.accountwarehouse.com/images/info.png";
						clickable = true;
					}, 900);
				

				} else {
					score += 150; 
					sc.innerHTML = score;
				}
				ending+=2;
	
				if(ending === arr.length){

					setTimeout(function() {
						document.getElementById("memoryGame").innerHTML = "YOU WON!!!";
						document.getElementById("screen").innerHTML = ""; 	
					}, 900);

					document.getElementById("button").addEventListener("click", myFunction);

					// document.getElementById("button").addEventListener("click", function a () {
						// removeEventListener("click",a);
					// });
					
				}

			}
			
		}
	}

}  //function a() ending 

a()	

function myFunction(){
	
	removeEventListener("click", myFunction);

	if(arr.length <= arr2.length * 2){
		ending = 0;
		score += 500;
		l += 1; 
		document.getElementById("memoryGame").innerHTML = `CHECK YOUR MEMEORTY AT LEVEL  ${l}`;
		lev.innerHTML = l;
		sl += 2;
		arr = arr2.slice(0, sl);	
		arr1 = arr.slice();
		arr = arr.concat(arr1);
		shuffle(arr);
		a();
	} //function myFunction ending brackets 					

}


///////////////////////////////////////////PREVIOUS ONE 

// let count = 0;
// //open the photos
// function detectImg(elem,a, e) {
// 	elem.src=arr[a];
// 	count++;
// 	console.log(e)
// 	if(count%2 == 0){
// 		elem.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAYoyuvxn4bIcfmtjrDHRiI9gsSIUodHd4nMVl-Q7ELw1ZMUjg';
// 	}
// 	else {
// 		setTimeout( function(){
// 		elem.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAYoyuvxn4bIcfmtjrDHRiI9gsSIUodHd4nMVl-Q7ELw1ZMUjg';
// 		}, 6000);
// 	}
	
	
// };







