function unhover(element) {
  element.setAttribute('src', 'https://bubeez.github.io/bthd/images/discord_sm_blurple.png');
}
  
function hover(element) {
  element.setAttribute('src', 'https://bubeez.github.io/bthd/images/discord_sm.png');
}

function modal(year) {
  if (year === 2020) {
    // Get the modal
    let modal2020 = document.getElementById("modal-2020");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    modal2020.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal2020.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal2020) {
        modal2020.style.display = "none";
      }
    }
  } else if (year === 2019) {
    // Get the modal
    let modal2019 = document.getElementById("modal-2019");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[1];

    // When the user clicks on the button, open the modal
    modal2019.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal2019.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal2019) {
        modal2019.style.display = "none";
      }
    }
  } else if (year === 2018) {
    // Get the modal
    let modal2018 = document.getElementById("modal-2018");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[2];

    // When the user clicks on the button, open the modal
    modal2018.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal2018.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal2018) {
        modal2018.style.display = "none";
      }
    }
  }
  
}

