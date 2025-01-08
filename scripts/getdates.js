const currentYearElem = document.querySelector("#currentyear");

const thisYear = new Date().getFullYear();

currentYearElem.innerHTML = thisYear;

const lastModifiedElem = document.querySelector("#lastModified");

lastModifiedElem.innerHTML = "Last modified at " + document.lastModified;

