// Here i store lists of studens and other necessary elements
const list = document.getElementsByClassName("student-item");
const body = document.getElementById("doc-body");
const containerPage = document.getElementsByClassName("page")

body.addEventListener("load", createPaginationLinks(list))
const searh_box = document.getElementById("searh_box");

// I add the search features here 
search_box.addEventListener("keyup", search)
search_box.addEventListener("keypress", submitEnter)

function submitEnter(e) {
    if (e.keyCode == 13) {
        search()
    }
}
// this function is called by search  event
function search(e) {
    let searchResult = []
    for (i = 0; i < list.length; i++) {
        if (list[i].firstElementChild.firstElementChild.nextElementSibling.innerText.toUpperCase().split(" ").join("").indexOf(search_box.value.toUpperCase()) > -1) {
            searchResult.push(list[i])
        }
    }

    if (searchResult.length < 1) {

        showPages(searchResult, 0)
        if (containerPage[0].lastElementChild.tagName == "DIV") {
            containerPage[0].lastElementChild.remove()
        }

        let notFound = document.createElement("h2")
        notFound.innerText = "Sorry student not found"
        if (containerPage[0].lastElementChild.tagName != "H2") {
            containerPage[0].appendChild(notFound)
        }
    } else {
        createPaginationLinks(searchResult)
    }

}



// this function removes all students and renders the appropraite ones
function showPages(listParameter, pageClicked) {
    // remove all studets 
    for (i = 0; i < list.length; i++) {
        list[i].style.display = "none"
    }

    // display appropraite students
    let startIndex = (pageClicked * 10) - 10
    let endIndex = pageClicked * 10
    for (i = startIndex; i < endIndex; i++) {
        if (listParameter[i] != undefined) {
            listParameter[i].style.display = "block"
        }
    }
}

// this function dynamically generates and removes links 
function createPaginationLinks(currentList) {
    if (containerPage[0].lastElementChild.tagName == "DIV" || containerPage[0].lastElementChild.tagName == "H2") {
        containerPage[0].lastElementChild.remove()
    }
    showPages(currentList, 1)
    let numberOfPages = Math.ceil(currentList.length / 10)
    let newDiv = document.createElement("div")
    newDiv.className = "pagination";
    let ul = document.createElement("ul")
    newDiv.appendChild(ul)
        // check if page is correct
    containerPage[0].appendChild(newDiv)

    for (i = 0; i < numberOfPages; i++) {
        let newA = document.createElement("a")
        if (i == 0) {
            newA.className = "active"
        }
        newA.addEventListener("click", (e) => {
            let listOfElementsToDeactivate = document.getElementsByTagName("A")
            for (i = 0; i < listOfElementsToDeactivate.length; i++) {
                listOfElementsToDeactivate[i].classList.remove("active")
            }
            e.target.className = "active"
                //  call function to render correct page after click
            showPages(currentList, e.target.innerText)
        })

        newA.href = `#`
        let li = document.createElement("li");
        li.appendChild(newA)
        li.id = i + 1
        newA.innerText = i + 1
        ul.appendChild(li)



    }
}