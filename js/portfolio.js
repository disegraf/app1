/******************************************************************************************************************* */
/******************************************************************************************************************* */
/******************************************************************************************************************* */

window.onload = function (e) {
    const firstElement = document.getElementsByTagName("body")[0].firstElementChild;
    const lastElement = document.getElementsByTagName("body")[0].lastElementChild;
    /*firstElement.remove();
    lastElement.remove();*/
    $('body').addClass('loaded');
  }

/******************************************************************************************************************* */
/******************************************************************************************************************* */
/******************************************************************************************************************* */

function seeGame() {
    $("#iframe").attr("src", $("#iframe").attr("data-url-game")).show();
    $("#container-iconos").hide();
    $("#container-btnPlay").hide();
  }