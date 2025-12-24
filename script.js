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

function abrirImagem(src) {
  const modal = document.getElementById("modalImagem");
  const imagem = document.getElementById("imagemModal");

  imagem.src = src;
  modal.style.display = "flex";
}

function fecharImagem() {
  document.getElementById("modalImagem").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".proof-video video");

  if (video) {
    video.addEventListener("play", function () {
      console.log("Vídeo de prova foi iniciado");

      // Exemplo de pixel
      if (typeof fbq === "function") {
        fbq('trackCustom', 'PlayVideoProva');
      }
    });
  }
});
