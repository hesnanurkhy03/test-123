// Zet "js" class op body zodat reveal animatie veilig werkt
document.body.classList.add("js");

// jaar in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// reveal animatie bij laden
window.addEventListener("load", () => {
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("show"));
});

// trein animatie + navigatie
const train = document.getElementById("trainFixed");

if (train) {
  train.addEventListener("click", () => {
    if (train.classList.contains("run")) return;

    train.classList.add("run");

    setTimeout(() => {
      window.location.href = "week1.html";
    }, 700);
  });
}
