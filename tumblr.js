//query form
const form = document.getElementById("query-form");
//text input field
const query = document.getElementById("query");
const list = document.getElementById("list-data");
//setonsubmit
form.onsubmit = function (event) {
    event.preventDefault();
//get value in input field
    const queryTerm = query.value;
    console.log(queryTerm);
    getPhotos(queryTerm);
}
//ARRAYS//
const first = ["pool", "Europe", "zoo", "turbines", "mall", "yoga"];
const second = ["fruits", "beach", "mall", "car", "mosque", "apple"];
const third = ["cake", "Asia", "art", "pants", "ship", "mail"];
const fourth = ["gotham", "Africa", "sport", "home", "phone", "book"];
const fifth= ["forest","USA","coffee","planets","kinokuniya","surfing"];
// randomly select tag from each arrays//
var no1 = first[Math.floor(Math.random()*first.length)];
var no2 = second[Math.floor(Math.random()*second.length)];
var no3 = third[Math.floor(Math.random()*third.length)];
var no4 = fourth[Math.floor(Math.random()*fourth.length)];
var no5 = fifth[Math.floor(Math.random()*fifth.length)];
const buttons = ["btn1", "btn2", "btn3", "btn4", "btn5"];
const btn1 = document.getElementById('btn1')
btn1.innerHTML = no1
const btn2 = document.getElementById('btn2')
btn2.innerHTML = no2
const btn3 = document.getElementById('btn3')
btn3.innerHTML = no3
const btn4 = document.getElementById('btn4')
btn4.innerHTML = no4
const btn5 = document.getElementById('btn5')
btn5.innerHTML = no5
//function get photo tag
function getPhotos (word) {
	fetch ('https://api.tumblr.com/v2/tagged?tag=' + word + '&api_key=14elMpQWey16UeqFZ1EtHwX7y8UfQoOpcyTZLg2f98txcQs2Sh').then(function(response){
	return response.json()
})
	.then(function(result){
		const items = result.response;
		list.innerHTML = '';
		for(i=0; i<items.length; i++){
			const item = items[i];
			if (item.photos != undefined) {
			// const altSizes = item.photos[0].alt_sizes
			const ImgSrc = item.photos[0].original_size.url;
			const img = document.createElement('img');
			img.src = ImgSrc;	
			const li = document.createElement('li');
			li.appendChild(img);
			list.appendChild(li);
			}
		}
	})
	.catch(function(err){
		console.log(err);
	})
}
// select random tag
var words = [no1, no2, no3, no4, no5];
console.log(words)
var word = words[Math.floor(Math.random()*words.length)]
console.log(word)
getPhotos (word)
// alert onclick 
//btn1 alert onclick
btn1.onclick = function(event){
	event.preventDefault();
	if(btn1.innerHTML == word){
	alert('You are right!')
	}
	else {
    alert('Sorry! the correct answer is ' + word +'   Try Again!')
	}
	window.location.reload()
}
//btn2 alert onclick
btn2.onclick = function(event){
	event.preventDefault();
	if(btn2.innerHTML == word){
    alert('You are right!')
	}
	else {
    alert('Sorry! the correct answer is ' + word +'   Try Again!')
	}
	window.location.reload()
}
//btn3 alert onclick
btn3.onclick = function(event){
	event.preventDefault();
	if(btn3.innerHTML == word){
    alert('You are right!')
	}
	else {
    alert('Sorry! the correct answer is ' + word +'  Try Again!')
	}
	window.location.reload()
}
//btn4 alert onclick
btn4.onclick = function(event){
	event.preventDefault();
	if(btn4.innerHTML == word){
    alert('You are right!')	}
	else {
	alert('Sorry! the correct answer is ' + word +'  Try Again!')
	}
	window.location.reload()
}
//btn5 alert onclick
btn5.onclick = function(event){
	event.preventDefault();
	if(btn5.innerHTML == word){
	alert('You are right!')
	}
	else {
    alert('Sorry! the correct answer is ' + word +'  Try Again!')
	}
	window.location.reload()
}