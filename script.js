"use strict";

const HEAD = `<meta charset="utf-8" />
<title>Jason Stuart Leslie - Online Resume</title>
<link rel="stylesheet" href="styles.css" />

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
  rel="stylesheet"
/>

<link
  href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
  rel="stylesheet"
/>

<script
  src="https://kit.fontawesome.com/c6889c7ec5.js"
  crossorigin="anonymous"
></script>`;

const HEADER = `<ul class="header-top-list">
<li class="name-main">Jason Stuart Leslie</li>
</ul>
<ul class="header-top-info">
<li class="email-list-item">
  <a class="email-link" href="mailto:wakeupalready@gmail.com"
    >wakeupalready at gmail dot com</a
  >
</li>
<li>
  <a href="./docs/jason_leslie_cv.pdf" class="download-cv"
    ><i class="fa-solid fa-file-pdf"></i> Download CV</a
  >
</li>
</ul>`;

const NAV = `<ul class="nav-list">
<li><a class="nav-item" href="/index.html">About</a></li>
<li><a class="nav-item" href="/cv.html">CV</a></li>
<li><a class="nav-item" href="/law.html">Law</a></li>
<li><a class="nav-item" href="/coding.html">Coding</a></li>
<li><a class="nav-item" href="/meditation.html">Meditation</a></li>
<li><a class="nav-item" href="/music.html">Music</a></li>
<li><a class="nav-item" href="/writing.html">Writing</a></li>
</ul>`;

///////////////////////////////////////
// Insert html common to each page

const addHTML = (tag, html) => {
  const addTag = document.querySelector(tag);
  addTag.insertAdjacentHTML("afterbegin", html);
};

addHTML("head", HEAD);
addHTML("header", HEADER);
// addHTML("nav", NAV);

///////////////////////////////////////
// Adjust navbar based on current page

// const highlightCurrentNavlink = () => {};

// const currentPage = window.location.pathname;
// const currentAnchor = document.querySelector("a"["href"=currentPage]);

// console.log(currentAnchor);
