"use strict";
import { searchBooks } from "./search.js";
import { displayResults } from "./display.js";

document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", searchBooks);

  const closeModal = document.querySelector(".close");
  closeModal.addEventListener("click", function () {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  });

  document.addEventListener("keydown", function (event) {
    const modal = document.getElementById("modal");
    if (event.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
    }
  });

  window.addEventListener("click", function (event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  const categoryInput = document.getElementById("categoryInput");
  categoryInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      searchBooks();
    }
  });
});
