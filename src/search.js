import { displayResults } from "./display.js";

export async function searchBooks() {
  const category = document.getElementById("categoryInput").value.trim();

  try {
    const response = await fetch(
      `https://openlibrary.org/subjects/${category}.json`
    );
    if (!response.ok) {
      throw new Error("Errore nella ricerca dei libri");
    }
    const data = await response.json();
    displayResults(data);
  } catch (error) {
    console.error("Errore nella ricerca dei libri:", error);
  }
}
