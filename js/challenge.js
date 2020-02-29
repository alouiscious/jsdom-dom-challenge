

  let num = []
document.addEventListener("DOMContentLoaded", () => {
  let a = document.getElementById("counter")
  function startTimer () {
    return setInterval(function () {
      b=parseInt(a.innerText);
      a.innerText = b+1;
    }, 1000)
  };
  let counts = startTimer();
  
  function stopTimer () {
    clearInterval(counts)
    a.innerText = b+1
  };
  
  let lks = {};

  document.addEventListener("click", function (event) { 
    // console.log(event.target);

    if (event.target.matches("#minus")) {
    c = parseInt(a.innerText);
      a.innerText = c-1;
    }
    else if (event.target.matches("#plus")) {
      c = parseInt(a.innerText);
      a.innerText = c+1;
    } 
    else if (event.target.matches("#heart")) {
      num.push(parseInt(a.innerText));
      // Loop through every element in the array
      for(let i = 0; i < num.length; i++){
        // If the number is a key inside the object
        if ([num[i]]){
          // Add 1 to the counter
          lks[num[i]] += parseInt(1)
        } 
        else {
          // Otherwise, create a new counter for that new number
          // lks.push(num);
          lks[num[i]] = parseInt(1)
          
        }
      }

      // Print in the console
      console.log(lks);
      console.log(num);

      let likeUl = document.getElementById("likes");
      let newLike = document.createElement("li");
      newLike.innerHTML = `Great choice! The # ${a.innerText} is liked _ times.`
      likeUl.appendChild(newLike);
    };
    
    if (event.target.matches("#pause")) {
      document.querySelectorAll("button").forEach(button => button.disabled = true)
      counts = stopTimer();
      let pause = document.getElementById("pause")
      pause.insertAdjacentHTML('afterend', '<button id="resume">Resume</button>');
      document.querySelector("button#submit").disabled = false;
      document.querySelector("button#heart").disabled = false;

    };
    

    if (event.target.matches("#resume")) {
      let resume = document.getElementById("resume")
      counts = startTimer();
      resume.remove();
      document.querySelectorAll("button").forEach(button => button.disabled = false)

    };

    if (event.target.matches("#submit")) {
      event.preventDefault()
      // stops the submit
      // debugger
      document.getElementById("list").insertAdjacentHTML('afterend', '<ul id="comment-ul"></ul>');
      let commentLi = document.createElement("li");
      commentUl = document.querySelector("#comment-ul");
      commentUl.appendChild(commentLi);
      
      let commentInput = document.getElementById("comment-input");
      // grabs the text description for this event
  
      commentLi.innerText = commentInput.value;
      // add content to the li element
      commentInput.value = ""
    }
  }, false);
  
});

/*
X On Load - A Counter that increases by 1 each second
X Plus and Minus buttons that increment or decrement the counter
X A 'like' button (❤️) that adds a 'like' for the number that is currently displayed by the timer
X A comment box that adds comments when submitted
  I should see count of the number of 'likes' associated with that number.
X pause the counter - 
X Disables all buttons except the pause button
X the pause button shows the text "resume."
X When 'resume' is clicked, restarts the counter and re-enables the buttons.
*/