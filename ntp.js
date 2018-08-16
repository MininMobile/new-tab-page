let search = document.getElementById("search");
let wrapper = document.getElementById("wrapper");
let shortcuts = document.getElementsByTagName("a");

search.addEventListener("input", (e) => search.value ? wrapper.classList.add("focus") : wrapper.classList.remove("focus"));

document.addEventListener("keydown", (e) => {
	if (search.value) return;

	if (!isNaN(parseInt(e.key)))
		if (parseInt(e.key) <= 6 && parseInt(e.key) >= 1)
			shortcuts[parseInt(e.key) - 1].click();
});


search.focus();
