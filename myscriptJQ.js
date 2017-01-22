/**
 * Created by zivlevy on 20/01/2017.
 */
var counter = 1;

$('body').on('click', 'li', listItemClicked);
$("#myButton").click(addListItem);



function addListItem() {
    var text = $("#myInput").val() === "" ? "New item " + counter : $("#myInput").val();
    counter+=1;

    $('#myList').append("<li>" + text + "</li>");


}

function listItemClicked(e) {
    e.stopPropagation();
    $("li").removeClass("active");
    //add event listener to this item
    $(this).addClass("active");

    if (e.shiftKey) {
        deleteListItem(this);
    } else {
        //change the header
        $("#myHeader").html($(this).text());
    }


}


function deleteListItem(element) {
    element.parentNode.removeChild(element);
}
document.addEventListener('click', documentClicked);

function documentClicked() {
    console.log('doc clicked')
}