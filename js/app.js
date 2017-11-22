window.onscroll = function() { myFunction() };

function myFunction() {
    if (document.body.scrollTop > 50) {
        document.getElementByClassName("header").className = "white";
    } else {
        document.getElementByClassName("header").className = "";
    }
}