document.addEventListener("DOMContentLoaded", () => {
  
  document.addEventListener("click", function (event) {
    if (event.target.matches('minus')) {
      // document.getElementById("minus");
      let a = document.getElementById("counter");
      a.innerText =  -1000;
      
    }
    
    // formSubmit.addEventListener("submit", event);
    // listens for user to click submit 
    // if (event.target.matches('comment-input')) {
      // const newForm = document.getElementById("comment-form");
      // grabs the form for manipulation
      // Run your code to close a modal
      // }
    
  }, false);
  
});


  /*
On Load - A Counter that increases by 1 each second
Plus and Minus buttons that increment or decrement the counter
A 'like' button (❤️) that adds a 'like' for the number that is currently displayed by the timer
A comment box that adds comments when submitted
pause the counter - disables all buttons except the pause button
the pause button shows the text "resume."
When 'resume' is clicked, restarts the counter and re-enables the buttons.
*/