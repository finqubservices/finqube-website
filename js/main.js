/* Finqube Services — shared header, footer, country cards, vlogs and forms.
   Content settings live in js/config.js. */
(function () {
  var C = window.FINQUBE || {};
  var page = document.body.getAttribute("data-page") || "";

  var ICON = {
    whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.7 11.7 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 3.8c2.7 0 3 0 4 .1 2.7.1 4 1.4 4.1 4.1.1 1 .1 1.3.1 4s0 3-.1 4c-.1 2.7-1.4 4-4.1 4.1-1 .1-1.3.1-4 .1s-3 0-4-.1c-2.7-.1-4-1.4-4.1-4.1-.1-1-.1-1.3-.1-4s0-3 .1-4C4 5.3 5.3 4 8 3.9c1-.1 1.3-.1 4-.1ZM12 2c-2.7 0-3.1 0-4.1.1C4.2 2.2 2.2 4.2 2.1 7.9 2 8.9 2 9.3 2 12s0 3.1.1 4.1c.1 3.7 2.1 5.7 5.8 5.8 1 .1 1.4.1 4.1.1s3.1 0 4.1-.1c3.7-.1 5.7-2.1 5.8-5.8.1-1 .1-1.4.1-4.1s0-3.1-.1-4.1c-.1-3.7-2.1-5.7-5.8-5.8C15.1 2 14.7 2 12 2Z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.5 21.9v-7.6h2.6l.4-3h-3V9.4c0-.9.3-1.5 1.5-1.5h1.6V5.2a21 21 0 0 0-2.3-.1c-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6v7.6a10 10 0 1 1 3.1 0Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.4 2H3.6C2.7 2 2 2.7 2 3.6v16.8c0 .9.7 1.6 1.6 1.6h16.8c.9 0 1.6-.7 1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6ZM8 19H5V9.5h3V19ZM6.5 8.2a1.7 1.7 0 1 1 0-3.5 1.7 1.7 0 0 1 0 3.5ZM19 19h-3v-4.6c0-1.1 0-2.5-1.5-2.5S12.7 13 12.7 14.3V19h-3V9.5h2.8v1.3h.1a3.1 3.1 0 0 1 2.8-1.5c3 0 3.6 2 3.6 4.6V19Z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" d="M3 6h18v12H3zM3 7l9 6 9-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M6.6 3h3l1.5 4.5-2 1.3a11 11 0 0 0 6.1 6.1l1.3-2L21 14.4v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.6 5.2 2 2 0 0 1 6.6 3Z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',
    twitter: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M5 12h14m-6-6 6 6-6 6"/></svg>'
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function wa(text) {
    return "https://wa.me/" + C.whatsapp + (text ? "?text=" + encodeURIComponent(text) : "");
  }
  function socialLinks(cls) {
    var out = "";
    if (C.whatsapp) out += '<button type="button" class="' + cls + '" data-wa-picker aria-label="WhatsApp">' + ICON.whatsapp + "</button>";
    ["instagram", "facebook", "linkedin", "youtube", "twitter"].forEach(function (k) {
      if (C.social && C.social[k]) out += '<a class="' + cls + '" href="' + esc(C.social[k]) + '" target="_blank" rel="noopener" aria-label="' + k + '">' + ICON[k] + "</a>";
    });
    return out;
  }
  window.FQ_ICON = ICON;

  /* ---------- Header ---------- */
  var GLOBAL_LIVE = C.globalLive === true;
  var nav = [
    ["home", "index.html", "Home"],
    ["services", "services.html", "Services"],
    ["vlogs", "vlogs.html", "Vlogs"],
    ["about", "about.html", "About"]
  ];
  var header = document.getElementById("site-header");
  if (header) {
    header.innerHTML =
      '<div class="wrap header-row">' +
      '<a class="brand" href="index.html" aria-label="Finqube Services home">' +
      '<img src="assets/emblem.png" alt="" width="44" height="44">' +
      '<span class="brand-word"><span class="bw-fin">FIN</span><span class="bw-qube">QUBE</span><small>Services</small></span></a>' +
      '<button class="menu-btn" id="menu-btn" aria-expanded="false" aria-controls="main-nav"><span></span><span></span><span></span><b class="sr">Menu</b></button>' +
      '<nav id="main-nav" class="main-nav">' +
      (GLOBAL_LIVE ? nav.slice(0, 2).concat([["global", "global.html", "Global"]], nav.slice(2)) : nav).map(function (n) {
        var cur = page === n[0] || (n[0] === "global" && page.indexOf("country") === 0);
        return '<a href="' + n[1] + '"' + (cur ? ' aria-current="page"' : "") + ">" + n[2] + "</a>";
      }).join("") +
      '<a class="btn btn-solid nav-cta" href="contact.html">Get in touch</a></nav></div>';
    var mb = document.getElementById("menu-btn");
    mb.addEventListener("click", function () {
      var open = header.classList.toggle("open");
      mb.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------- Footer ---------- */
  var footer = document.getElementById("site-footer");
  if (footer) {
    var countryLinks = (C.countries || []).map(function (c) {
      return '<li><a href="' + c.slug + '.html">' + esc(c.name) + "</a></li>";
    }).join("");
    footer.innerHTML =
      '<div class="wrap footer-grid">' +
      '<div class="f-brand"><img src="assets/emblem.png" alt="" width="40" height="40"><p class="f-name">Finqube Services</p>' +
      '<p class="f-tag">Accurate · Reliable · Trusted</p><div class="f-social">' + socialLinks("soc") + "</div></div>" +
      '<div><h4>India</h4><ul><li><a href="services.html#accounting">Accounting &amp; MIS</a></li><li><a href="services.html#direct-tax">Income tax &amp; TDS</a></li><li><a href="services.html#gst">GST</a></li><li><a href="services.html#consulting">Business consulting</a></li></ul></div>' +
      (GLOBAL_LIVE ? "<div><h4>Global</h4><ul>" + countryLinks + "</ul></div>" : "") +
      '<div><h4>Contact</h4><ul class="f-contact">' +
      '<li>' + ICON.phone + '<span class="sel">' + esc(C.phone) + "</span></li>" +
      '<li>' + ICON.mail + '<span class="sel">' + esc(C.email) + "</span></li>" +
      '<li>' + ICON.pin + "<span>" + esc(C.address || C.city) + "</span></li></ul></div></div>" +
      '<div class="wrap f-base"><span>© ' + new Date().getFullYear() + " Finqube Services. All rights reserved.</span>" +
      '<span>Information on this site is general in nature and is not professional advice for your specific situation.</span></div>';
  }

  /* ---------- WhatsApp topic picker ---------- */
  if (C.whatsapp) {
    var topics = C.whatsappTopics || [["Something else", "Hello Finqube Services, I would like to know more about your services."]];
    var picker = document.createElement("div");
    picker.className = "wa-picker";
    picker.id = "wa-picker";
    picker.hidden = true;
    picker.setAttribute("role", "dialog");
    picker.setAttribute("aria-label", "Chat with us on WhatsApp");
    picker.innerHTML =
      '<div class="wp-head">' + ICON.whatsapp + '<div><b>Chat with Finqube</b><span>Pick a topic to start the chat</span></div>' +
      '<button type="button" class="wp-close" aria-label="Close">&times;</button></div>' +
      '<div class="wp-list">' + topics.map(function (t) {
        return '<a href="' + wa(t[1]) + '" target="_blank" rel="noopener">' + esc(t[0]) + ICON.arrow + "</a>";
      }).join("") + "</div>" +
      '<p class="wp-foot">We reply during ' + esc(C.hours || "working hours") + ".</p>";
    document.body.appendChild(picker);

    var f = document.createElement("button");
    f.type = "button";
    f.className = "wa-float";
    f.setAttribute("data-wa-picker", "");
    f.setAttribute("aria-controls", "wa-picker");
    f.innerHTML = ICON.whatsapp + "<span>Chat with us</span>";
    f.setAttribute("aria-label", "Chat with us on WhatsApp");
    document.body.appendChild(f);

    document.addEventListener("click", function (e) {
      if (e.target.closest("[data-wa-picker]")) { picker.hidden = !picker.hidden; return; }
      if (e.target.closest(".wp-close") || (!picker.hidden && !e.target.closest(".wa-picker"))) picker.hidden = true;
      else if (e.target.closest(".wp-list a")) picker.hidden = true;
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") picker.hidden = true; });
  }

  /* ---------- Fill contact placeholders ---------- */
  document.querySelectorAll("[data-fill]").forEach(function (el) {
    var k = el.getAttribute("data-fill");
    if (k === "location") el.textContent = C.address || C.city;
    else if (C[k]) el.textContent = C[k];
  });
  document.querySelectorAll("[data-wa]").forEach(function (el) {
    el.href = wa(el.getAttribute("data-wa"));
    el.target = "_blank";
    el.rel = "noopener";
  });
  document.querySelectorAll("[data-social]").forEach(function (el) {
    el.innerHTML = socialLinks("soc soc-lg");
  });

  /* ---------- Country cards ---------- */
  function countryCard(c) {
    var live = c.status === "live";
    return '<a class="country-card" href="' + c.slug + '.html">' +
      '<div class="cc-top"><span class="cc-code">' + esc(c.code) + "</span>" +
      '<span class="tag ' + (live ? "tag-live" : "tag-soon") + '">' + (live ? "Now serving" : "Launching soon") + "</span></div>" +
      "<h3>" + esc(c.name) + "</h3><p>" + esc(c.tagline) + "</p>" +
      '<div class="cc-tools">' + (c.tools || []).map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("") + "</div>" +
      '<span class="cc-link">' + (live ? "View services" : "Register interest") + ICON.arrow + "</span></a>";
  }
  var gs = document.getElementById("global-section");
  if (gs && !GLOBAL_LIVE) gs.hidden = true;
  document.querySelectorAll("[data-country-cards]").forEach(function (el) {
    el.innerHTML = (C.countries || []).map(countryCard).join("");
  });

  /* ---------- Country page ---------- */
  var slug = document.body.getAttribute("data-country");
  if (slug) {
    var c = (C.countries || []).filter(function (x) { return x.slug === slug; })[0];
    var root = document.getElementById("country-root");
    if (c && root) {
      var live = c.status === "live";
      document.title = c.name + " Accounting & Bookkeeping | Finqube Services";
      root.innerHTML =
        '<section class="page-hero"><div class="wrap">' +
        '<p class="eyebrow"><a href="global.html">Global services</a> / ' + esc(c.name) + "</p>" +
        '<div class="ph-row"><span class="cc-code cc-code-lg">' + esc(c.code) + "</span><div>" +
        "<h1>Accounting support for " + esc(c.name) + "</h1>" +
        '<p class="lede">' + esc(c.tagline) + "</p>" +
        '<span class="tag ' + (live ? "tag-live" : "tag-soon") + '">' + (live ? "Now serving clients" : "Launching soon. Enquiries open") + "</span></div></div></div></section>" +
        '<section class="section"><div class="wrap split">' +
        '<div class="split-main"><h2>What we will handle</h2><div class="svc-list">' +
        c.services.map(function (s) { return '<div class="svc-row"><h3>' + esc(s[0]) + "</h3><p>" + esc(s[1]) + "</p></div>"; }).join("") +
        "</div>" +
        '<h2 class="mt">How it works</h2><ol class="steps">' +
        "<li><b>Discovery call</b><span>We understand your business, software and reporting needs.</span></li>" +
        "<li><b>Secure access</b><span>You share read or user access to your accounting software and bank feeds.</span></li>" +
        "<li><b>Monthly routine</b><span>We work in your time zone's business cycle with a fixed close calendar.</span></li>" +
        "<li><b>Review &amp; report</b><span>You receive reports and open queries in one place, every month.</span></li></ol>" +
        '<p class="note">Software we work in: ' + esc((c.tools || []).join(", ")) + ". Filings and lodgements are made by you or your locally licensed adviser using the workings we prepare.</p></div>" +
        '<aside class="split-side"><div class="panel"><h3>' + (live ? "Start a conversation" : "Register your interest") + "</h3>" +
        "<p>" + (live ? "Tell us about your business and we will reply within one working day." : "We are preparing to launch in " + esc(c.name) + ". Leave your details and we will contact you first.") + "</p>" +
        formHTML("country-" + c.slug, c.name) + "</div></aside></div></section>";
    }
  }

  /* ---------- Vlogs ---------- */
  document.querySelectorAll("[data-vlogs]").forEach(function (vg) {
    var list = C.vlogs || [];
    var limit = parseInt(vg.getAttribute("data-limit") || "0", 10);
    if (limit) list = list.slice(0, limit);
    if (!list.length) {
      vg.innerHTML = '<div class="vlog-empty"><div class="ve-icon">' + ICON.youtube + "</div><div><h3>First videos are on the way</h3>" +
        "<p>Short explainers on GST, income tax, TDS and running a business in India. Follow us on Instagram to see them first.</p></div></div>";
    } else {
      vg.innerHTML = list.map(function (v) {
        var d = v.date ? new Date(v.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "";
        return '<a class="vlog" href="https://www.youtube.com/watch?v=' + esc(v.id) + '" target="_blank" rel="noopener">' +
          '<div class="vlog-thumb"><img loading="lazy" src="https://i.ytimg.com/vi/' + esc(v.id) + '/hqdefault.jpg" alt=""><span class="play">' + ICON.youtube + "</span></div>" +
          "<h3>" + esc(v.title) + "</h3>" + (d ? '<p class="vlog-date">' + d + "</p>" : "") + "</a>";
      }).join("");
    }
  });

  /* ---------- Enquiry questionnaire ---------- */
  var INTERESTS = (C.interests || ["Accounting & bookkeeping", "MIS reporting", "Income tax / ITR", "TDS", "GST", "Company / LLP registration", "Business consulting", "Something else"]);
  var TIMES = (C.contactTimes || ["Morning (10 am – 1 pm)", "Afternoon (1 pm – 4 pm)", "Evening (4 pm – 7 pm)", "Anytime"]);

  function formHTML(id, topic) {
    var interest = topic
      ? '<input type="hidden" name="interest" value="' + esc(topic) + '">'
      : '<fieldset class="q"><legend><span class="qn">4</span>Area of interest <em>Pick one or more</em></legend><div class="chips">' +
        INTERESTS.map(function (o, i) {
          return '<label class="chip"><input type="checkbox" name="interest" value="' + esc(o) + '" id="' + id + "-int" + i + '"><span>' + esc(o) + "</span></label>";
        }).join("") + "</div></fieldset>";
    var times = '<fieldset class="q"><legend><span class="qn">' + (topic ? 4 : 5) + '</span>Best time to contact you</legend><div class="chips">' +
      TIMES.map(function (o, i) {
        return '<label class="chip"><input type="radio" name="time" value="' + esc(o) + '" id="' + id + "-t" + i + '"' + (i === TIMES.length - 1 ? " checked" : "") + "><span>" + esc(o) + "</span></label>";
      }).join("") + "</div></fieldset>";
    return '<form class="enquiry" data-topic="' + esc(topic || "") + '" novalidate>' +
      '<div class="q"><label for="' + id + '-name"><span class="qn">1</span>Your name</label><input id="' + id + '-name" name="name" required autocomplete="name" placeholder="Full name"></div>' +
      '<div class="q"><label for="' + id + '-phone"><span class="qn">2</span>Mobile number</label><input id="' + id + '-phone" name="phone" required inputmode="tel" autocomplete="tel" placeholder="10-digit mobile number"></div>' +
      '<div class="q"><label for="' + id + '-email"><span class="qn">3</span>Email</label><input id="' + id + '-email" name="email" type="email" required autocomplete="email" placeholder="you@example.com"></div>' +
      interest + times +
      '<div class="q"><label for="' + id + '-msg">Anything else we should know? <em>Optional</em></label><textarea id="' + id + '-msg" name="message" rows="3" placeholder="e.g. Proprietorship with GST, about 40 invoices a month"></textarea></div>' +
      '<button class="btn btn-solid" type="submit">Submit</button><div class="form-result" hidden></div></form>';
  }
  document.querySelectorAll("[data-form]").forEach(function (el) {
    el.innerHTML = formHTML(el.getAttribute("data-form"), el.getAttribute("data-topic"));
  });

  document.addEventListener("submit", function (e) {
    var form = e.target;
    if (!form.classList.contains("enquiry")) return;
    e.preventDefault();
    var fd = new FormData(form);
    var name = (fd.get("name") || "").trim();
    var phone = (fd.get("phone") || "").replace(/[^\d+]/g, "");
    var email = (fd.get("email") || "").trim();
    var interests = fd.getAll("interest").join(", ");
    var time = fd.get("time") || "";
    var result = form.querySelector(".form-result");
    result.hidden = false;
    result.className = "form-result err";
    if (!name) { result.textContent = "Please enter your name."; return; }
    if (phone.replace(/\D/g, "").length < 10) { result.textContent = "Please enter a valid mobile number."; return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { result.textContent = "Please enter a valid email address."; return; }
    if (!interests) { result.textContent = "Please choose at least one area of interest."; return; }
    result.className = "form-result";

    var text = "Hello Finqube Services,\n\nName: " + name + "\nMobile: " + phone + "\nEmail: " + email +
      "\nInterested in: " + interests + "\nBest time to contact: " + time +
      (fd.get("message") ? "\n\n" + fd.get("message") : "");
    var thanks = "<b>Thank you, " + esc(name) + ".</b> We will contact you" +
      (time && time !== "Anytime" ? " in the " + esc(time.split(" (")[0].toLowerCase()) : "") + " within one working day.";

    if (C.web3formsKey) {
      var btn = form.querySelector("button[type=submit]");
      btn.disabled = true; btn.textContent = "Submitting…";
      var payload = {
        access_key: C.web3formsKey,
        subject: "New enquiry: " + name + " (" + interests + ")",
        from_name: "Finqube website",
        replyto: email,
        "Name": name, "Mobile": phone, "Email": email,
        "Area of interest": interests, "Best time to contact": time,
        "Message": fd.get("message") || "-"
      };
      fetch("https://api.web3forms.com/submit", {
        method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload)
      })
        .then(function (r) { return r.json(); })
        .then(function (j) {
          if (!j.success) throw new Error();
          form.reset();
          result.classList.add("ok");
          result.innerHTML = thanks;
        })
        .catch(function () {
          result.classList.add("err");
          result.innerHTML = 'We could not submit the form just now. <a href="' + wa(text) + '" target="_blank" rel="noopener">Send it on WhatsApp instead</a>.';
        })
        .finally(function () { btn.disabled = false; btn.textContent = "Submit"; });
    } else {
      result.classList.add("ok");
      result.innerHTML = thanks + " To reach us faster, send these details on WhatsApp." +
        '<a class="btn btn-wa" href="' + wa(text) + '" target="_blank" rel="noopener">' + ICON.whatsapp + "Send on WhatsApp</a>";
    }
  });
})();
