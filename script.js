"use strict";

////////////////////////////////////////////
// Boilerplate HTML data added to each page

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
/>`;

const HEADER = `<ul class="header-top-list">
<li class="name-main">Jason Stuart Leslie</li>
<li class="name-icon-list">
          <a class="link-icon" target="_blank" href="https://www.linkedin.com/in/jasonsleslie/"> <i class="fa-brands fa-linkedin-in fa-xl"></i></a>
          <a class="link-icon" target="_blank" href="https://github.com/JallaJenkins"> <i class="fa-brands fa-github fa-xl"></i></a>
          <a class="link-icon" target="_blank" href="https://soundcloud.com/jasonsleslie"><i class="fa-brands fa-soundcloud fa-xl"></i></a>
        </li>
</ul>
<ul class="header-top-info">
<li class="email-list-item">
  <i class="fa-solid fa-envelope fa-lg"></i> &nbsp;
  <a class="email-link" href="mailto:jasonstuartleslie@gmail.com"
    >jasonstuartleslie at gmail dot com</a
  >
</li>
<li>
  <a href="./docs/full_cv_jason_leslie_Jun_2023_2.pdf" class="download-cv"
    ><i class="fa-regular fa-file-pdf"></i>&nbsp Download CV</a
  >
</li>
</ul>`;

const NAV = `<ul class="nav-list">
<li class="nav-list-item"><a class="nav-item" href="/">About</a></li>
<!-- <li><a class="nav-item" href="/cv.html">CV</a></li> -->
<li class="nav-list-item"><a class="nav-item" href="/law.html">Law</a></li>
<li class="nav-list-item"><a class="nav-item" href="/coding.html">Coding</a></li>
<li class="nav-list-item"><a class="nav-item" href="/meditation.html">Meditation</a></li>
<li class="nav-list-item"><a class="nav-item" href="/music.html">Music</a></li>
<!-- <li class="nav-list-item"><a class="nav-item" href="/writing.html">Writing</a></li> -->
</ul>`;

///////////////////////////////////////
// Insert HTML common to each page

const addHTML = (tag, html) => {
  const addTag = document.querySelector(tag);
  addTag.insertAdjacentHTML("afterbegin", html);
};

addHTML("head", HEAD);
addHTML("header", HEADER);
addHTML("nav", NAV);

///////////////////////////////////////
// Format navbar based on current page

const highlightNavlink = (anchor) => {};

const currentPage = window.location.pathname;
const currentAnchor = document.querySelector(`a[href="${currentPage}"]`);
currentAnchor.setAttribute("class", "nav-item-current");
