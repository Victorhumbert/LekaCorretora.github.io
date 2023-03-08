// Enviar mensagem whatsapp
var currentURL = encodeURIComponent(window.location.href);
var whatsappLink =
  "https://wa.me/5548998235646?text=Olá, Gostaria de mais informações sobre este imóvel: " +
  currentURL;
document.getElementById("whatsapp-link").setAttribute("href", whatsappLink);

// Galeria arrastar para o lado

let gallery = document.querySelector(".galeria-imagens");
let isDragging = false;
let startX, scrollLeft;

gallery.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - gallery.offsetLeft;
  scrollLeft = gallery.scrollLeft;
});

gallery.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - gallery.offsetLeft;
  const walk = (x - startX) * 1.5;
  gallery.scrollLeft = scrollLeft - walk;
});

gallery.addEventListener("mouseup", () => {
  isDragging = false;
});
