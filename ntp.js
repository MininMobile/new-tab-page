let search = document.getElementById("search");
let wrapper = document.getElementById("wrapper");

search.addEventListener("input", (e) => search.value ? wrapper.classList.add("focus") : wrapper.classList.remove("focus"));

search.focus();
