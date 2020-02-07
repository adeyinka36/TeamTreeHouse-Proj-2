// Here i store the list of students using the classname and select the necessary elements 
const list = document.getElementsByClassName("student-item");
const pagination_div = document.getElementById("pagination-div");
const body = document.getElementById("doc-body");
body.addEventListener("load", elementCreator())
const search_box = document.getElementById("search_box");
const studentList = document.getElementById("student-list")
const sorry = document.getElementById("sorry-element");
search_box.addEventListener("keyup", search)
search_box.addEventListener("keypress",submitByPressingEnter)
// This function hides all students then shows selected ones

function submitByPressingEnter(e){
  if(e.keyCode==13){
     search()
  }
}
function displaySelectedStudents(page) {
	for (i = 0; i < list.length; i++) {
		list[i].style.display = "none"
	}
	let itemsPerPage = 10
	let startIndex = (page * itemsPerPage) - itemsPerPage
	let endIndex = page * itemsPerPage
	for (i = startIndex; i < endIndex; i++) {
		if (list[i] != undefined) {
			list[i].style.display = "block"
		}
	}
}
// this is a function that loads the first ten studets onces the document loads
function firstPage() {
	for (i = 0; i < list.length; i++) {
		list[i].style.display = "none"
	}
	for (i = 0; i <= 9; i++) {
		list[i].style.display = "block"
	}
}
// 
// this is a function that creates the links for the pages
function elementCreator() {
	firstPage()
	let pageNumbers = Math.ceil(list.length / 10)
	for (i = 0; i < pageNumbers; i++) {
		// create element and give ID of page number 
		let P_element = document.createElement("p")
		P_element.className = "pagination-links";
		P_element.id = i + 1;
		P_element.innerText = i + 1;
		pagination_div.appendChild(P_element);
		P_element.addEventListener("click", () => {
			displaySelectedStudents(parseInt(P_element.id))
		})
	}
}
// This is the function for the search-box
function search(e) {
	let searchResult = []
	for (i = 0; i < list.length; i++) {
		if (list[i].firstElementChild.firstElementChild.nextElementSibling.innerText.toUpperCase().split(" ").join("").indexOf(search_box.value.toUpperCase()) > -1) {
			searchResult.push(list[i])
		}
	}
	if (searchResult.length == 0) {
		for (i = 0; i < list.length; i++) {
			list[i].style.display = "none"
		}
		while (pagination_div.firstChild) {
			pagination_div.removeChild(pagination_div.firstChild)
		}
		sorry.style.display = "block"
	} else if (searchResult.length > 0 && searchResult.length <= 10) {
		sorry.style.display = "none"
		for (i = 0; i < list.length; i++) {
			list[i].style.display = "none"
		}
		while (pagination_div.firstChild) {
			pagination_div.removeChild(pagination_div.firstChild)
		}
		for (i = 0; i < searchResult.length; i++) {
			searchResult[i].style.display = "block"
		}
	} else {
		sorry.style.display = "none"
		while (pagination_div.firstChild) {
			pagination_div.removeChild(pagination_div.firstChild)
		}
		let pageNumbers = Math.ceil(searchResult.length / 10)
		for (i = 0; i < pageNumbers; i++) {
			// create element and give it an  ID of page number 
			let P_element = document.createElement("p")
			P_element.className = "pagination-links";
			P_element.innerText = i + 1;
			pagination_div.appendChild(P_element);
			P_element.id = i + 1;
			elementId = P_element.id
			let itemsPerPage = 10
			let startIndex = (P_element.id * itemsPerPage) - itemsPerPage
			let endIndex = P_element.id * itemsPerPage
			for (x = 0; x < 10; x++) {
				searchResult[x].style.display = "block"
			}
			P_element.addEventListener("click", (e) => {
				for (i = 0; i < list.length; i++) {
					list[i].style.display = "none"
				}
				for (i = startIndex; i < endIndex; i++) {
					if (searchResult[i] != undefined) {
						searchResult[i].style.display = "block"
					}
				}
			})
		}
	}
}