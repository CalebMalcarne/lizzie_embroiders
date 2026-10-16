// Replace this with the PUBLISHED Google Forms embed URL from Google Forms > Send > Embed.
// Example: https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true
const GOOGLE_FORM_EMBED_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfPgzjCWqtjX-oIfKlWfnpcCkSQOaO9EfXc5w7xxJkMPxahyw/viewform?usp=header";

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#main-nav");
navToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Toggle menu");
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", "Toggle menu");
}));
document.querySelector("#year").textContent = new Date().getFullYear();

if (GOOGLE_FORM_EMBED_URL.trim()) {
  try {
    const url = new URL(GOOGLE_FORM_EMBED_URL.trim());
    if (url.protocol !== "https:" || url.hostname !== "docs.google.com" || !url.pathname.startsWith("/forms/")) {
      throw new Error("Form URL must be an HTTPS Google Forms URL.");
    }
    const wrapper = document.querySelector("#google-form");
    const frame = document.createElement("iframe");
    frame.className = "form-embed";
    frame.title = "Lizzie Embroiders custom embroidery request form";
    frame.src = url.toString();
    frame.loading = "lazy";
    frame.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
    wrapper.replaceWith(frame);
  } catch (err) {
    console.warn("Google Form URL is not configured correctly:", err.message);
  }
}
