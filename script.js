"use strict";

const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const buttons = document.querySelectorAll(".button");
let currentAudio = buttons[0].querySelector(".audio");

buttons.forEach((button) => {
  const audio = button.querySelector(".audio");

  button.addEventListener("click", () => {
    currentAudio.pause();
    currentAudio = audio;
    setTimeout(() => {
      currentAudio.play();
    }, 1000);
  });
});

let slideRhinoIndex = 0;
showSlidesRhino();

function showSlidesRhino() {
  let i;
  let slidesRhino = document.getElementsByClassName("slidesRhino");
  for (i = 0; i < slidesRhino.length; i++) {
    slidesRhino[i].style.display = "none";
  }
  slideRhinoIndex++;
  if (slideRhinoIndex > slidesRhino.length) {
    slideRhinoIndex = 1;
  }
  slidesRhino[slideRhinoIndex - 1].style.display = "block";
  setTimeout(showSlidesRhino, 2000);
}

let slideLeopardIndex = 0;
showSlidesLeopard();

function showSlidesLeopard() {
  let i;
  let slidesLeopard = document.getElementsByClassName("slidesLeopard");
  for (i = 0; i < slidesLeopard.length; i++) {
    slidesLeopard[i].style.display = "none";
  }
  slideLeopardIndex++;
  if (slideLeopardIndex > slidesLeopard.length) {
    slideLeopardIndex = 1;
  }
  slidesLeopard[slideLeopardIndex - 1].style.display = "block";
  setTimeout(showSlidesLeopard, 2000);
}

let slideTigerIndex = 0;
showSlidesTiger();

function showSlidesTiger() {
  let i;
  let slidesTiger = document.getElementsByClassName("slidesTiger");
  for (i = 0; i < slidesTiger.length; i++) {
    slidesTiger[i].style.display = "none";
  }
  slideTigerIndex++;
  if (slideTigerIndex > slidesTiger.length) {
    slideTigerIndex = 1;
  }
  slidesTiger[slideTigerIndex - 1].style.display = "block";
  setTimeout(showSlidesTiger, 2000);
}

let slideGorillaIndex = 0;
showSlidesGorilla();

function showSlidesGorilla() {
  let i;
  let slidesGorilla = document.getElementsByClassName("slidesGorilla");
  for (i = 0; i < slidesGorilla.length; i++) {
    slidesGorilla[i].style.display = "none";
  }
  slideGorillaIndex++;
  if (slideGorillaIndex > slidesGorilla.length) {
    slideGorillaIndex = 1;
  }
  slidesGorilla[slideGorillaIndex - 1].style.display = "block";
  setTimeout(showSlidesGorilla, 2000);
}

let slideOrangutanIndex = 0;
showSlidesOrangutan();

function showSlidesOrangutan() {
  let i;
  let slidesOrangutan = document.getElementsByClassName("slidesOrangutan");
  for (i = 0; i < slidesOrangutan.length; i++) {
    slidesOrangutan[i].style.display = "none";
  }
  slideOrangutanIndex++;
  if (slideOrangutanIndex > slidesOrangutan.length) {
    slideOrangutanIndex = 1;
  }
  slidesOrangutan[slideOrangutanIndex - 1].style.display = "block";
  setTimeout(showSlidesOrangutan, 2000);
}

let slideOwlIndex = 0;
showSlidesOwl();

function showSlidesOwl() {
  let i;
  let slidesOwl = document.getElementsByClassName("slidesOwl");
  for (i = 0; i < slidesOwl.length; i++) {
    slidesOwl[i].style.display = "none";
  }
  slideOwlIndex++;
  if (slideOwlIndex > slidesOwl.length) {
    slideOwlIndex = 1;
  }
  slidesOwl[slideOwlIndex - 1].style.display = "block";
  setTimeout(showSlidesOwl, 2000);
}

let slideElephantIndex = 0;
showSlidesElephant();

function showSlidesElephant() {
  let i;
  let slidesElephant = document.getElementsByClassName("slidesElephant");
  for (i = 0; i < slidesElephant.length; i++) {
    slidesElephant[i].style.display = "none";
  }
  slideElephantIndex++;
  if (slideElephantIndex > slidesElephant.length) {
    slideElephantIndex = 1;
  }
  slidesElephant[slideElephantIndex - 1].style.display = "block";
  setTimeout(showSlidesElephant, 2000);
}

let slideTurtleIndex = 0;
showSlidesTurtle();

function showSlidesTurtle() {
  let i;
  let slidesTurtle = document.getElementsByClassName("slidesTurtle");
  for (i = 0; i < slidesTurtle.length; i++) {
    slidesTurtle[i].style.display = "none";
  }
  slideTurtleIndex++;
  if (slideTurtleIndex > slidesTurtle.length) {
    slideTurtleIndex = 1;
  }
  slidesTurtle[slideTurtleIndex - 1].style.display = "block";
  setTimeout(showSlidesTurtle, 2000);
}

let slideLionIndex = 0;
showSlidesLion();

function showSlidesLion() {
  let i;
  let slidesLion = document.getElementsByClassName("slidesLion");
  for (i = 0; i < slidesLion.length; i++) {
    slidesLion[i].style.display = "none";
  }
  slideLionIndex++;
  if (slideLionIndex > slidesLion.length) {
    slideLionIndex = 1;
  }
  slidesLion[slideLionIndex - 1].style.display = "block";
  setTimeout(showSlidesLion, 2000);
}

let slideWolfIndex = 0;
showSlidesWolf();

function showSlidesWolf() {
  let i;
  let slidesWolf = document.getElementsByClassName("slidesWolf");
  for (i = 0; i < slidesWolf.length; i++) {
    slidesWolf[i].style.display = "none";
  }
  slideWolfIndex++;
  if (slideWolfIndex > slidesWolf.length) {
    slideWolfIndex = 1;
  }
  slidesWolf[slideWolfIndex - 1].style.display = "block";
  setTimeout(showSlidesWolf, 2000);
}
