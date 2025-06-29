// hamburger
const ham = document.querySelector(".hamburger"),
	bar = document.querySelector(".bar"),
	nav = document.querySelector(".navbar"),
	Bar = document.querySelector(".bar");

ham.addEventListener('click', () =>{
	ham.classList.toggle("active");
	nav.classList.toggle("active");
	Bar.classList.toggle("active")
});

// dark mdoe
const body = document.querySelector("body"),
	darkToggle = document.querySelector("#darkmode"),
	lightToggle = document.querySelector("#lightmode");
	// for dark mode
	darkToggle.addEventListener("click", () => {
		body.classList.replace("light-mode", "dark-mode");
	});
	// for light mode
	lightToggle.addEventListener("click", () =>{
		body.classList.replace("dark-mode", "light-mode")
	});

// debug to console
	const bodyClass = body.classList.contains("light-mode") ? "Yess" : "No";
	console.log(bodyClass);