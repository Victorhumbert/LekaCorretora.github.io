// Enviar mensagem whatsapp
var currentURL = encodeURIComponent(window.location.href);
var whatsappLink =
  "https://wa.me/5548998235646?text=Olá, Gostaria de mais informações sobre este imóvel: " +
  currentURL;
document.getElementById("whatsapp-link").setAttribute("href", whatsappLink);
