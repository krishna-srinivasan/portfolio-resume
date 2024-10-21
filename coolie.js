const sidenav = document.querySelector(".side-navbar");

function showbbar() {
  sidenav.style.left = "0%";
}

function hidebbar() {
  sidenav.style.left = "-60%";
}

document.querySelector(".light").addEventListener("click", () => {

  document.querySelector(".one").classList.toggle("darktheme1");
  document.querySelector(".ress").classList.toggle("result");
  document.querySelector(".light").classList.toggle("blink");
  document.querySelector(".navbar").classList.toggle("navsumma");
  document.querySelector(".navbar-links").classList.toggle("navlinksumma");
  document.querySelector(".two").classList.toggle("darktheme2");
  document.querySelector(".threeo").classList.toggle("darktheme33");
  document.querySelector(".three-t").classList.toggle("darktheme4");
  document.querySelector(".edu").classList.toggle("darktheme5");
  document.querySelector(".three").classList.toggle("darktheme6");
  document.querySelector(".foot").classList.toggle("foott");
  
});
  //  document.querySelector(".graph1").classList.toggle("glow");
  //  document.querySelector(".graph7").classList.toggle("glow");
  //  document.querySelector(".graph9").classList.toggle("glow1");
  //  document.querySelector(".graph2").classList.toggle("glow");
  //  document.querySelector(".graph4").classList.toggle("glow");
  //  document.querySelector(".graph5").classList.toggle("glow");
  //  document.querySelector(".graph6").classList.toggle("glow2");
  // var twoo =  document.getElementById("two");
  // var threeeo =  document.getElementById('threeo');
  // var threeet = document.getElementById('three-t');
  // var eduu =  document.getElementById('edu');
  // var threee = document.getElementById('three');


var typed = new Typed(".auto-type", {
  strings: [
    "Frontend Developer",
    "Java Programmer",
    "Python Programmer",
    "Backend Developer",
    "Web Designer",
    "SQL Developer",
  ],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
