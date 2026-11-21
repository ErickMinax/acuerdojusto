// Bot informativo por reglas: sin IA, sin servidor, sin costo.
// Para agregar una respuesta nueva, añade un objeto al arreglo KB.
(function () {
  "use strict";
  var KB = [
    {
      k: ["quienes", "empresa", "somos", "inforcobro"],
      r: "Somos INFORCOBRO, una empresa ecuatoriana especializada en la gestión de carteras vencidas institucionales. Buscamos acuerdos de pago sostenibles para la institución y para las personas.",
    },
    {
      k: ["servicio", "ofrecen", "hacen"],
      r: "Ofrecemos cobranza preventiva, cobranza administrativa, negociación y refinanciamiento, reportes de gestión y capacitación.",
    },
    {
      k: ["proceso", "funciona", "como trabajan", "pasos"],
      r: "Recibimos la cartera, la segmentamos, contactamos y negociamos, formalizamos el acuerdo y entregamos reportes a la institución.",
    },
    {
      k: ["seguridad", "datos", "confidencial", "privacidad"],
      r: "Protegemos la información con cifrado, acceso por roles y registro de cada gestión, conforme a la Ley Orgánica de Protección de Datos Personales.",
    },
    {
      k: ["extrajudicial"],
      r: "Es la recuperación de deudas sin llegar a juicio: mediante contacto, negociación y acuerdos de pago.",
    },
    {
      k: ["precio", "costo", "cobran", "tarifa", "comision"],
      r: "El esquema se define según la cartera de cada institución. Escríbenos por el formulario y te enviamos una propuesta.",
    },
    {
      k: ["banco", "bancos", "cooperativas", "instituciones"],
      r: "Trabajamos con instituciones que administran carteras vencidas.",
    },
    {
      k: ["contacto", "telefono", "correo", "reunion", "escribir"],
      r: "Usa el formulario al final de la página y te respondemos pronto.",
    },
  ];
  var FALLBACK =
    "No tengo esa información todavía. Déjanos tus datos en el formulario de contacto y un asesor te responde.";
  var QUICK = [
    "¿Quiénes somos?",
    "Servicios",
    "¿Cómo funciona?",
    "Seguridad",
    "Contacto",
  ];

  var win = document.getElementById("bw"),
    msgs = document.getElementById("bm"),
    quick = document.getElementById("bq"),
    form = document.getElementById("bf"),
    input = document.getElementById("bi");

  function norm(s) {
    return s
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }
  function add(t, who) {
    var d = document.createElement("div");
    d.className = "m " + who;
    d.textContent = t;
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
  }
  function answer(text) {
    var q = norm(text),
      best = null,
      score = 0;
    KB.forEach(function (e) {
      var n = e.k.filter(function (w) {
        return q.indexOf(w) > -1;
      }).length;
      if (n > score) {
        score = n;
        best = e;
      }
    });
    return best ? best.r : FALLBACK;
  }
  function ask(text) {
    add(text, "u");
    setTimeout(function () {
      add(answer(text), "b");
    }, 300);
  }

  QUICK.forEach(function (t) {
    var b = document.createElement("button");
    b.type = "button";
    b.textContent = t;
    b.addEventListener("click", function () {
      ask(t);
    });
    quick.appendChild(b);
  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var v = input.value.trim().slice(0, 120);
    if (v) {
      ask(v);
      input.value = "";
    }
  });
  document.getElementById("bt").addEventListener("click", function () {
    win.classList.toggle("open");
  });
  add(
    "¡Hola! Soy el asistente informativo de INFORCOBRO. ¿En qué te ayudo?",
    "b",
  );
})();
