(function () {
  "use strict";
  // Pega aquí tu URL de Formspree (https://formspree.io/f/xxxx). Vacío = modo demo.
  var ENDPOINT = "";
  var f = document.getElementById("f"),
    s = document.getElementById("msg"),
    last = 0;
  f.addEventListener("submit", function (e) {
    e.preventDefault();
    if (f.web.value) return; // trampa anti-bots
    var d = {
      nombre: f.n.value.trim(),
      institucion: f.o.value.trim(),
      correo: f.e.value.trim(),
      mensaje: f.t.value.trim(),
    };
    if (
      !d.nombre ||
      !d.institucion ||
      !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.correo)
    ) {
      s.textContent = "Revisa nombre, institución y correo.";
      return;
    }
    if (!f.ok.checked) {
      s.textContent = "Debes aceptar la política de privacidad.";
      return;
    }
    if (Date.now() - last < 15000) {
      s.textContent = "Espera unos segundos.";
      return;
    }
    last = Date.now();
    if (!ENDPOINT) {
      s.textContent =
        "Modo demo: configura ENDPOINT en js/main.js para recibir los mensajes.";
      return;
    }
    fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(d),
    })
      .then(function (r) {
        s.textContent = r.ok
          ? "¡Gracias! Te contactaremos pronto."
          : "No se pudo enviar. Intenta de nuevo.";
        if (r.ok) f.reset();
      })
      .catch(function () {
        s.textContent = "Error de conexión. Intenta de nuevo.";
      });
  });
})();
