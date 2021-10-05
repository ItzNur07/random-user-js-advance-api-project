
// selector

let userPic = document.getElementById('pic');
let fname  = document.getElementById('fname');
let lname = document.getElementById('lname');
let randomBtn = document.querySelector('.random');


// Api Handling
fetch('https://randomuser.me/api/')
	.then(res => res.json())
	.then(data => randomUser(data))


const randomUser = (data) => {
	let user = data.results[0];
	let profieImg = user.picture.medium;
	let title = `hey, I'm ${user.name.title} ${user.name.first}`
	let lastName = user.name.last;
	// set value
	userPic.src = profieImg;
	fname.innerText = title;
	lname.innerText = lastName;
}

// random button handler

randomBtn.addEventListener('click',() => {
	location.reload(window)
})