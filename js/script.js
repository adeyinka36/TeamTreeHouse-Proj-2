/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/




/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.

// Here i store the list of students using the classname
const list =document.getElementsByClassName("student-item");
const pagination_div =document.getElementById("pagination-div");
const body=document.getElementById("doc-body");
body.addEventListener("load",elementCreator())

// function that creates element with ID of number
function elementCreator(){
   firstPage()
   let elementList=[]
   let pageNumbers=Math.ceil(list.length/10)
   for(i=0;i<pageNumbers;i++){
      // create element and give ID of page number 
      let P_element=document.createElement("p")
      P_element.className="pagination-links";
      P_element.id=i+1;
      P_element.innerText=i+1;
      pagination_div.appendChild(P_element);
      elementList.push(P_element);
      P_element.addEventListener("click",()=>{
         displaySelectedStudents(parseInt(P_element.id))
      })
   }
   // for(i=0;i<elementList.length;i++){
   //    elementList[i].addEventListener("click",()=>{
   //       displaySelectedStudents(i+1)
   //    })
   // }
}

function firstPage(){
   for(i=0;i<list.length;i++){
      list[i].style.display="none"
   }
   for(i=0;i<=9;i++){
      list[i].style.display="block"
   }
}

// This function hides all students then shows selected ones
function displaySelectedStudents(page){
   for(i=0;i<list.length;i++){
      list[i].style.display="none"
   }
let itemsPerPage = 10
let startIndex = (page * itemsPerPage) - itemsPerPage
let endIndex = page * itemsPerPage
 
for(i=startIndex;i<endIndex;i++){
  list[i].style.display="block"
}
}

// Create a function that makes a new page link button for every group of 10 student
