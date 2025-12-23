// Evento de checkout (Meta Pixel)
function checkoutPixel() {
  if (typeof fbq !== "undefined") {
    fbq('track', 'InitiateCheckout');
  }
}

// Exibir CTA fixo após scroll
window.addEventListener("scroll", function () {
  const cta = document.querySelector(".cta-fixo");
  if (window.scrollY > 300) {
    cta.style.display = "block";
  } else {
    cta.style.display = "none";
  }
});
