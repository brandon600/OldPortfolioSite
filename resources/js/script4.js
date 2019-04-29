document.getElementById('btnSubmit').addEventListener("click", function(event) {

  var error = "";

  var form = document.getElementById("myForm");

  var email = document.getElementById("email");

  var errorId = document.getElementById("error");

  var subject = document.getElementById("subject");

  var content = document.getElementById("content");


  if (email.value == "" || email.value.length == 0 || email.value == null) {
    error += "The email is required.<br>";
  }

  if (subject.value == "" || subject.value.length == 0 || subject.value == null) {
    error += "The subject is required.<br>";
  }
  if (content.value == "" || content.value.length == 0 || content.value == null) {
    error += "The content area is required.<br>";
  }

  if (error != "") {
    errorId.innerHTML = '<div class="alert alert-danger" role="alert"><p>Sorry, there were error(s) with this submission.</p>' + error + '</div>';
    return false;
  }

    else {
    myForm.submit
    console.log("Form submission successful");
    return true;
  }

});
