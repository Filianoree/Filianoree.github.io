import { searchBooks } from "./search.js";

export async function displayResults(data) {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  data.works.forEach((work) => {
    const title = work.title ? work.title : "Titolo non disponibile";
    const authors = work.authors
      ? work.authors.map((author) => author.name).join(", ")
      : "Autori non disponibili";
    const coverUrl = work.cover_id
      ? `https://covers.openlibrary.org/b/id/${work.cover_id}-M.jpg`
      : "no-cover.jpg";

    const listItem = document.createElement("li");
    listItem.classList.add("book-item");

    const coverImage = document.createElement("img");
    coverImage.src = coverUrl;
    coverImage.alt = "Copertina del libro";
    coverImage.classList.add("book-cover");
    listItem.appendChild(coverImage);

    const bookDetails = document.createElement("div");
    bookDetails.classList.add("book-details");

    const titleElement = document.createElement("strong");
    titleElement.textContent = title;
    bookDetails.appendChild(titleElement);

    const authorsElement = document.createElement("p");
    authorsElement.textContent = "Autori: " + authors;
    bookDetails.appendChild(authorsElement);

    listItem.appendChild(bookDetails);

    listItem.addEventListener("click", async () => {
      const modal = document.getElementById("modal");
      modal.style.display = "block";

      const modalDescription = document.getElementById("modalDescription");
      try {
        const bookResponse = await fetch(
          `https://openlibrary.org${work.key}.json`
        );
        if (bookResponse.ok) {
          const bookData = await bookResponse.json();
          let description = "Descrizione non disponibile";
          if (bookData.description && bookData.description.value) {
            description = bookData.description.value;
          }
          modalDescription.textContent = description;
        } else {
          throw new Error("Errore nel caricamento della descrizione del libro");
        }
      } catch (error) {
        console.error(
          "Errore nel caricamento della descrizione del libro:",
          error
        );
        modalDescription.textContent = "Descrizione non disponibile";
      }
    });

    bookList.appendChild(listItem);
  });
}
