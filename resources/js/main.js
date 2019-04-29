var webVideo = document.getElementById('web-dev-video-section');
var webVideo2 = document.getElementById('web-dev-video-section2');
var webVideo3 = document.getElementById('web-dev-video-section3');
var webVideo4 = document.getElementById('web-dev-video-section4');
var webvideo7 = document.getElementById('web-dev-video-section7');
var webvideo8 = document.getElementById('web-dev-video-section8');
var webvideo9 = document.getElementById('web-dev-video-section9');
var webvideo10 = document.getElementById('web-dev-video-section10');
var popup = document.getElementById('popup');
var vidInfo = document.getElementById('video-info');
var vidLarge = document.getElementById('large-video-info');
var vidIcon = document.querySelector('.vid-icon');
var el = document.querySelectorAll('.vid-icon');
var nav = document.querySelector('.nav-bar');
var v1 = document.getElementById('v1');
var v2 = document.getElementById('v2');
var v3 = document.getElementById('v3');
var v4 = document.getElementById('v4');
var v5 = document.getElementById('v5');
var v6 = document.getElementById('v6');
var v7 = document.getElementById('v7');
var v8 = document.getElementById('v8');
var v9 = document.getElementById('v9');
var v10 = document.getElementById('v10');
var v11 = document.getElementById('v11');
var v12 = document.getElementById('v12');
var v13 = document.getElementById('v13');
var v14 = document.getElementById('v14');
var v15 = document.getElementById('v15');
var v16 = document.getElementById('v16');
var v17 = document.getElementById('v17');
var v18 = document.getElementById('v18');
var v19 = document.getElementById('v19');
var v20 = document.getElementById('v20');
var v21 = document.getElementById('v21');
var v22 = document.getElementById('v22');
var videoText = document.querySelector('.video-info-text');
var largeVideoURL = document.querySelector('.largeVideoURL');
var gitURL = document.querySelector('.git-link');


  for(var i=0; i < el.length; i++) {
    v1.addEventListener('click', function() {
      videoText.innerHTML = "This dice game here is a web game I developed using Jacascript and it is known by many that have played as the “pig game.” Watch the video to see how it is played."
      largeVideoURL.innerHTML = '<iframe width="700" height="400" src="https://www.youtube.com/embed/2AaVUfi3-Io" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen="allowFullScreen"></iframe>'
      gitURL.innerHTML = '<a href="https://github.com/beeerod?tab=repositories" target="_blank">Click Here To Visit This Project On GitHub.</a>'
    });
    v2.addEventListener('click', function() {
      videoText.innerHTML = "“Budgety” is a web application I developed that works as a budget app and allows users to track their incomes and expenses. It uses JavaScript for all of it’s functionality. Watch the video to see it’s full capabilities."
      largeVideoURL.innerHTML = '<iframe width="700" height="400" src="https://www.youtube.com/embed/uqnFWCc3m80" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
      gitURL.innerHTML = '<a href="https://github.com/beeerod/budgety" target="_blank">Click Here To Visit This Project On GitHub.</a>'
    });
    v3.addEventListener('click', function() {
      videoText.innerHTML = "This is a landing page I designed and developed as my first experience with using SASS. The word content is mostly all filler text and not very meaningful."
      largeVideoURL.innerHTML = '<iframe width="700" height="400" src="https://www.youtube.com/embed/4Q7A0gxHt2E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
      gitURL.innerHTML = '<a href="https://github.com/beeerod/SASS_Landing-Page" target="_blank">Click Here To Visit This Project On GitHub.</a>'
    });
    v4.addEventListener('click', function() {
      videoText.innerHTML = "This is website made around a fictional food delivery service. This is a very modern looking website that is mobile responsive as well."
      largeVideoURL.innerHTML = '<iframe width="700" height="400" src="https://www.youtube.com/embed/Szr2JGecoOA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
      gitURL.innerHTML = '<a href="https://github.com/beeerod/Omnifood" target="_blank">Click Here To Visit This Project On GitHub.</a>'
    });
    v5.addEventListener('click', function() {
      videoText.innerHTML = "This is a website created for a fictional doctor. I created this website to get more experience with designing, properly laying things out and also using animations."
      largeVideoURL.innerHTML = '<iframe width="700" height="400" src="https://www.youtube.com/embed/lanfwSwNwv4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
      gitURL.innerHTML = '<a href="https://github.com/beeerod/Doctor_Website" target="_blank">Click Here To Visit This Project On GitHub.</a>'
    });
    v6.addEventListener('click', function() {
      videoText.innerHTML = "This is a simple web game that allows users to test their reaction time by clicking random size shapes that pop up on random areas of the screen and looking at how much time it took them to click."
      largeVideoURL.innerHTML = '<iframe width="700" height="400" src="https://www.youtube.com/embed/Yn9tPJJ0JsA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
      gitURL.innerHTML = '<a href="https://github.com/beeerod/TestReactions_Game" target="_blank">Click Here To Visit This Project On GitHub.</a>'
    });
    v7.addEventListener('click', function() {
      videoText.innerHTML = "This is a calculator application I designed and developed for IOS software. The app has limited functionality and was one of my first development projects, but it works well can do solve simple math."
      largeVideoURL.innerHTML = '<iframe width="700" height="400" src="https://www.youtube.com/embed/LRpnBjMe8ws" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
      gitURL.innerHTML = '<a href="https://github.com/beeerod/Calculator" target="_blank">Click Here To Visit This Project On GitHub.</a>'
    });
    v8.addEventListener('click', function() {
      videoText.innerHTML = "This is a “wish-list” type app that allows users to add items they hope to attain to a list for them to see. They can sort the items in multiple ways and it uses core data for it’s functionality."
      largeVideoURL.innerHTML = '<iframe width="700" height="400" src="https://www.youtube.com/embed/Qmk1czSsvjA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
      gitURL.innerHTML = '<a href="https://github.com/beeerod?tab=repositories" target="_blank">Click Here To Visit This Project On GitHub.</a>'
    });
    v9.addEventListener('click', function() {
      videoText.innerHTML = "This is a weather based location app that allows users to see what the current weather is in their current location."
      largeVideoURL.innerHTML = '<iframe width="700" height="400" src="https://www.youtube.com/embed/cJdavBVDmHs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
      gitURL.innerHTML = '<a href="https://github.com/beeerod?tab=repositories" target="_blank">Click Here To Visit This Project On GitHub.</a>'
    });
    v10.addEventListener('click', function() {
      videoText.innerHTML = "Simple animation app I created when I first began learning to make more dynamic and animated applications."
      largeVideoURL.innerHTML = '<iframe width="700" height="400" src="https://www.youtube.com/embed/wEXAmdg6U44" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
      gitURL.innerHTML = '<a href="https://github.com/beeerod?tab=repositories" target="_blank">Click Here To Visit This Project On GitHub.</a>'
    });
    v11.addEventListener('click', function() {
      videoText.innerHTML = "This is a music application that allows users to search their favorite music and watch the videos to the songs on Youtube."
      largeVideoURL.innerHTML = '<iframe width="700" height="400" src="https://www.youtube.com/embed/uYS8MT0Pvbk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
      gitURL.innerHTML = '<a href="https://github.com/beeerod/TestReactions_Game" target="_blank">Click Here To Visit This Project On GitHub.</a>'
    });
    v12.addEventListener('click', function() {
      videoText.innerHTML = "Here is the IOS application version of the web project I am currently building that will allow music producers to get recognition for their instrumentals and artists can easily find them."
      largeVideoURL.innerHTML = '<iframe width="700" height="400" src="https://www.youtube.com/embed/BNBfltENCUw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
      gitURL.innerHTML = '<a href="https://github.com/beeerod?tab=repositories" target="_blank">Click Here To Visit This Project On GitHub.</a>'
    });
    v13.addEventListener('click', function() {
      videoText.innerHTML = "This is a simple website I build around 'Shake Special' that I made to try and better my design skills."
      largeVideoURL.innerHTML = '<iframe width="700" height="400" src="https://www.youtube.com/embed/U1o21XsDxcc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
      gitURL.innerHTML = '<a href="https://github.com/beeerod?tab=repositories" target="_blank">Click Here To Visit This Project On GitHub.</a>'
    });
    v14.addEventListener('click', function() {
      videoText.innerHTML = "Here is a basic landing page I built with a modern and resposive design that I made to showcase an app I have that will be coming out soon."
      largeVideoURL.innerHTML = '<iframe width="700" height="400" src="https://www.youtube.com/embed/siDZlSXb7Q4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
      gitURL.innerHTML = '<a href="https://github.com/beeerod?tab=repositories" target="_blank">Click Here To Visit This Project On GitHub.</a>'
    });
    v15.addEventListener('click', function() {
      videoText.innerHTML = "This here is a posrtfolio page I designed that I thought of using myself, but have since passed it along to others for them to use."
      largeVideoURL.innerHTML = '<iframe width="700" height="400" src="https://www.youtube.com/embed/hwM7QXjDun8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
      gitURL.innerHTML = '<a href="https://github.com/beeerod?tab=repositories" target="_blank">Click Here To Visit This Project On GitHub.</a>'
    });
    v16.addEventListener('click', function() {
      videoText.innerHTML = "This project isn't the best as far as design, because I made it to solely work on my development skills with ReactJS."
      largeVideoURL.innerHTML = '<iframe width="700" height="400" src="https://www.youtube.com/embed/hCIipY6i_tQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
      gitURL.innerHTML = '<a href="https://github.com/beeerod?tab=repositories" target="_blank">Click Here To Visit This Project On GitHub.</a>'
    });
    v17.addEventListener('click', function() {
      videoText.innerHTML = "This React web application gives users the full rundown of the weather in a particular location. This project wasn't a fully developed web application so design is very minimal. I built this to get more familiar with API's."
      largeVideoURL.innerHTML = '<iframe width="700" height="400" src="https://www.youtube.com/embed/lbEOXQ3cfJQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
      gitURL.innerHTML = '<a href="https://github.com/beeerod?tab=repositories" target="_blank">Click Here To Visit This Project On GitHub.</a>'
    });
    v18.addEventListener('click', function() {
      videoText.innerHTML = "This is a project made with ReactJS that uses a YouTube API to allow users to very quickly see the most relevant videos around the term they search for."
      largeVideoURL.innerHTML = '<iframe width="700" height="400" src="https://www.youtube.com/embed/GosBGLgOUdU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
      gitURL.innerHTML = '<a href="https://github.com/beeerod?tab=repositories" target="_blank">Click Here To Visit This Project On GitHub.</a>'
    });
    v19.addEventListener('click', function() {
      videoText.innerHTML = "This is a project built with ReactJS that I am currently working on that will allow artists to search for their instrumentals in a very efficient way. "
      largeVideoURL.innerHTML = '<iframe width="700" height="400" src="https://www.youtube.com/embed/v-5QAL5MZ90" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
      gitURL.innerHTML = '<a href="https://github.com/beeerod?tab=repositories" target="_blank">Click Here To Visit This Project On GitHub.</a>'
    });
    v20.addEventListener('click', function() {
      videoText.innerHTML = "This is an IOS application I am currently working on for a client for their life coaching business."
      largeVideoURL.innerHTML = '<iframe width="700" height="400" src="https://www.youtube.com/embed/3krJFH4_yPA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
      gitURL.innerHTML = '<a href="https://github.com/beeerod?tab=repositories" target="_blank">Click Here To Visit This Project On GitHub.</a>'
    });
    v21.addEventListener('click', function() {
      videoText.innerHTML = "Here is a website I built for an accounting service business."
      largeVideoURL.innerHTML = '<iframe width="700" height="400" src="https://www.youtube.com/embed/iC9PLJ5UmQw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
      gitURL.innerHTML = '<a href="https://github.com/beeerod?tab=repositories" target="_blank">Click Here To Visit This Project On GitHub.</a>'
    });
    v22.addEventListener('click', function() {
      videoText.innerHTML = "Here is a website I built that allows users to send out mass survey emails!"
      largeVideoURL.innerHTML = '<iframe width="700" height="400" src="https://www.youtube.com/embed/iC9PLJ5UmQw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
      gitURL.innerHTML = '<a href="https://github.com/beeerod?tab=repositories" target="_blank">Click Here To Visit This Project On GitHub.</a>'
    });


    el[i].addEventListener('click', function() {
      webVideo.classList.add('hidden');
      webVideo2.classList.add('hidden');
      webVideo3.classList.add('hidden');
      webVideo4.classList.add('hidden');
      webvideo7.classList.add('hidden');
      webvideo8.classList.add('hidden');
      webvideo9.classList.add('hidden');
      webvideo10.classList.add('hidden');
      popup.classList.remove('popup-display');
      popup.classList.add('fixedP');
      popup.classList.remove('bounceOut');
      nav.classList.add('hide-nav');
    });
  };

document.querySelector('.close-icon').addEventListener('click', function() {
  webVideo.classList.remove('hidden');
  webVideo2.classList.remove('hidden');
  webVideo3.classList.remove('hidden');
  webVideo4.classList.remove('hidden');
  webvideo7.classList.remove('hidden');
  webvideo8.classList.remove('hidden');
  webvideo9.classList.remove('hidden');
  webvideo10.classList.remove('hidden');
  popup.classList.add('popup-display');
  popup.classList.remove('bounceIn');
  largeVideoURL.innerHTML = '';
  nav.classList.remove('hide-nav');
});
