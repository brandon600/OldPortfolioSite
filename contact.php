<?php
echo '<style>';
include 'resources/css-sass/stylesp.css';
echo '</style>';
echo '<style>';
include 'resources/css-sass/styles.css';
echo '</style>';
echo '<style>';
include 'vendors/css/grid.css';
echo '</style>';
echo '<style>';
include 'resources/css-sass/queries.css';
echo '</style>';
echo '<link href="https://fonts.googleapis.com/css?family=Nunito:300,400,400i,700" rel="stylesheet">';
?>



<!DOCTYPE html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1,
  shrink-to-fit=no">
  <meta http-equiv="x-ua-compatible" content="ie=edge">

  <title>Contact</title>

  <link rel ="stylesheet" type = "text/css" href ="vendors/css/normalize.css">

  <link rel ="stylesheet" type = "text/css" href ="vendors/css/ionicons.min.css">

  <link rel ="stylesheet" type="text/css" href="vendors/css/animate.css">

  <link rel ="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">



</head>

<body>


  <nav>
    <div class="portfolio-background">
      <div class= "nav-bar conav">
        <ul class="nav-bar-list js--nav-bar">
          <li><a href="http://brandonartportfolio.net/home.html">Home</li>
          <li><a href="http://brandonartportfolio.net/portfolio.html">Portfolio</a></li>
          <li><a href="http://brandonartportfolio.net/about.html">About Me</a></li>
          <li><a href="http://brandonartportfolio.net/contact.php">Contact</a></li>
        </ul>
        <a class="navi-btn js--nav-icon"><i class="ion-navicon-round"></i></a>
        </div>
    </div>
  </nav>

  <?php

    $error = "";
    $successMessage = "";

    if ($_POST) {
      if (!$_POST["email"]) {
        $error .="An email is required.<br>";
      }

      if (!$_POST["subject"]) {
        $error .="A subject field is required.<br>";
      }

      if (!$_POST["content"]) {
        $error .="A content field is required.<br>";
      }

      if ($_POST['email'] && filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) === false) {
        $error .= "The email adress is invalid.<br>";

      }

      if ($error != "") {
        $error = '<div class="alert alert-danger" role="alert"><p>Sorry, there were error(s) with this submission.</p>' . $error . '</div>';
      }

      else {
        $emailTo = "brandonArt1224@gmail.com";
        $subject = $_POST['subject'];
        $content = $_POST['content'];
        $headers = "From: ".$_POST['email'];

        if (mail($emailTo, $subject, $content, $headers)) {
          $successMessage = '<div class="alert alert-success" role="alert"><p>Your message was sent successfully. Happy to hear from you!</p></div>';

        } else {
          $error = "We're sorry, but the message was not sent successfully. Please try again.";
        }
      }
    }

   ?>

   <div class="contact-header contact-color">
     <h1>Contact</h1>
   </div>

   <div class="contact-info">
     <div class="contract-intro">
       <p class="contract-intro-text">
       When running a business, it can be very difficult to keep up with all the technological needs
          for it, especially considering how fast technology keeps advancing and its huge impact on how
          customers use businesses for their needs. The internet, technology, and their use for business,
          are my ultimate passions. My main goal is to help your business establish and maintain an amazing
          online presence by being your number 1 consultant and developer for your web and online marketing needs.
          Contact me and lets get started. You can email me directly or fill out the form below. Whichever you prefer.
          I look forward to hearing from you.
       </p>
     </div>
     <div class="contact-info-bottom">
       <p class="contact-blue-text">Brandon Rodriguez</p>
       <p class="contact-blue-text">BrandonArt1224@gmail.com</p>
     </div>
   </div>


  <div class="container bs-contact">
      <div id="error"><? echo $error.$successMessage; ?></div>
  <form method="post" id="myForm">
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" name="email" placeholder="name@example.com">
    <label for="subject">Subject</label>
    <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject">
  </div>
  <div class="form-group">
    <label for="content">What would you like to ask us?</label>
    <textarea class="form-control" id="content" name="content" rows="3"></textarea>
  </div>
  <button type="submit" id="btnSubmit" name="btnSubmit" class="btn btn-primary">Submit</button>
</form>
  </div>



  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

  <script src="resources/js/script.js"></script>

  <script src="vendors/js/jquery.waypoints.min.js"></script>

  <script src="resources/js/script4.js"></script>



</body>




</html>
