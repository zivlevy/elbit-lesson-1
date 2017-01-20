/**
 * Created by zivlevy on 20/01/2017.
 */
var myHeader = document.getElementById("myHeader");
var myButton = document.getElementById("myButton");
var myList = document.getElementById("myList");
var myListItems = myList.getElementsByTagName("li");
var myInput = document.getElementById("myInput");

var counter = 1;

for (var i =0; i<myListItems.length ; i++) {
    // myListItems[i].innerHTML = "this is list item " + i;
    myListItems[i].addEventListener('click',listItemClicked);
    myListItems[i].addEventListener('dblclick',deleteListItem);
}



myButton.addEventListener('click', addListItem);

function addListItem() {
    var li = document.createElement('li');

    if (myInput.value === ""){
        li.innerHTML =  "New item " + counter;
        counter++;
    } else {

        li.innerHTML =  myInput.value;

    }
    li.classList.add ('nonselectable');
    li.addEventListener('click',listItemClicked);
    li.addEventListener('',deleteListItem);
    myList.appendChild(li);


}

function listItemClicked(e) {
    //remove active class from others
    for (i =0; i<myListItems.length ; i++) {
        myListItems[i].classList.remove("active");
    }
    //add event listener to this item
    this.classList.add("active");

    if (e.shiftKey) {
        deleteListItem(this);
    } else {
        //change the header
        myHeader.innerHTML = this.innerHTML;
    }


}

// adding event listener
function addLiEventListener (li) {
    li.addEventListener('click',listItemClicked);
    li.addEventListener('dblclick',deleteListItem);
}

function deleteListItem (element){
    element.parentNode.removeChild(element);
}
document.addEventListener('click',documentClicked);

function documentClicked(){
    console.log('doc clicked')
}