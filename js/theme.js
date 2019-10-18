document.body.style.backgroundColor = sessionStorage.getItem('bg');
document.body.style.color = sessionStorage.getItem('cc');
function theme() {
     if ( sessionStorage.getItem('bg') === 'rgb(255, 255, 255)') {

            sessionStorage.setItem('bg', 'rgb(6, 23, 37)');
            sessionStorage.setItem('cc', '#f5f5f5');


     }
    else if (sessionStorage.getItem('bg') == null || undefined) {
        sessionStorage.setItem('bg', 'rgb(6, 23, 37)');
        sessionStorage.setItem('cc', '#777');

    }
    else if( sessionStorage.getItem('bg') === 'rgb(6, 23, 37)') {

        sessionStorage.setItem('bg', 'rgb(255, 255, 255)');
        sessionStorage.setItem('cc', '#333');


    }

document.body.style.backgroundColor = sessionStorage.getItem('bg');
document.body.style.color = sessionStorage.getItem('cc');

}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
