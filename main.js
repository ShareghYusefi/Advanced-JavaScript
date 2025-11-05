// What is JQuery
// jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

// The document needs to be ready before we can access and manipulate elements
// Anonymous function: no name, no parameter function used to execude a code block
$(document).ready(function () {
  // Handler for .ready() called.
  console.log("Doment is Ready!");
  // Use jQuery to access elements
  // Syntax: $("selector").action();

  //   select form element with name="sign-in-form" and listen for submit event with .on()
  $("form[name='sign-in-form']").on("submit", function (event) {
    //   // prevent the default form submission to the current page/reload
    event.preventDefault();
    // get element value using .val()
    var email = $("#email").val();
    var password = $("#password").val();
    console.log(email, password);

    // validate form data before displaying
    if (email.trim() === "" || password.trim() === "") {
      $("body").append(
        `<div id='message' class='alert alert-danger mt-2'>Please fill out all fields.</div>`
      );
      // return early in function to exit here
      return;
    }

    if (password.length < 6) {
      $("body").append(
        `<div id='message' class='alert alert-danger mt-2'>Password must be at least 6 characters.</div>`
      );
      return;
    }

    // submit data to API
    $.ajax({
      method: "POST",
      url: "http://localhost:3000/api/login",
      data: { email, password }, // {email: email, password: password}
    }).done(function (msg) {
      // add a div element with id of message to body  using .append()
      $("body").append(`<div id='message'>${msg}</div>`);
      // update the class list of message div
      $("#message").addClass("alert alert-success mt-2");
    });
  });
});

// function signIn(event) {
//   // prevent the default form submission to the current page/reload
//   event.preventDefault();

//   // We can use the document object to access the html document form
//   console.log(document.form);

//   var form = document.forms["sign-in-form"];

//   // get the form data
//   var email = form["email"].value;
//   var password = form["password"].value;

//   // create div element with id of 'message'
//   var div = document.createElement("div");
//   // add attribute to element
//   div.setAttribute("id", "message");
//   // update the text value of div element
//   // div.textContent = `You have signed in as ${email}!`;
//   // append the div element to the body of document
//   document.body.appendChild(div);

//   // validate form data before displaying
//   if (email.trim() === "" || password.trim() === "") {
//     div.textContent = "Please fill out all fields.";
//     // adding style to elements
//     div.style.color = "red";
//     // adding classes to elements
//     div.classList = "alert alert-danger mt-2";
//     // return early in function to exit here
//     return;
//   }

//   if (password.length < 6) {
//     div.textContent = "Password must be at least 6 characters.";
//     // adding style to elements
//     div.style.color = "red";
//     // adding classes to elements
//     div.classList = "alert alert-danger mt-2";
//     return;
//   }

//   // retrieving elements using the following methods/functions:
//   // getElementByID, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll
//   var divByID = document.getElementById("message");
//   var divByQuerySelector = document.querySelector("#message");
//   divByQuerySelector.classList = "alert alert-success mt-2";
//   divByID.textContent = `You have signed in as ${email}!`;

//   // submit the data to a database
//   console.log("Email: ", email);
//   console.log("Password: ", password);
// }
