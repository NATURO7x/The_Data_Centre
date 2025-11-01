// ✨ Study Questions Library - JS
document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("searchBar");

  // 🔍 Live search filter
  searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    document.querySelectorAll("li").forEach(li => {
      const text = li.textContent.toLowerCase();
      li.style.display = text.includes(query) ? "flex" : "none";
    });
  });

  // 🎞️ Smooth open & close animations for <details>
  document.querySelectorAll("details").forEach(detail => {
    const summary = detail.querySelector("summary");
    const ul = detail.querySelector("ul");
    if (!summary || !ul) return;

    ul.style.overflow = "hidden";
    ul.style.maxHeight = "0";
    ul.style.opacity = "0";
    ul.style.transition = "max-height 0.4s ease, opacity 0.4s ease";

    summary.addEventListener("click", e => {
      e.preventDefault(); // prevent instant toggle

      if (!detail.open) {
        // 🔓 OPEN animation
        detail.open = true;
        requestAnimationFrame(() => {
          ul.style.maxHeight = ul.scrollHeight + "px";
          ul.style.opacity = "1";
          detail.style.boxShadow = "0 0 20px rgba(0, 188, 212, 0.5)";
        });
      } else {
        // 🔒 CLOSE animation
        ul.style.maxHeight = "0";
        ul.style.opacity = "0";
        detail.style.boxShadow = "none";
        setTimeout(() => {
          detail.open = false;
        }, 400); // match transition time
      }
    });
  });

  // 🔹 Explore dropdown menu toggle
  const menuBtn = document.querySelector(".dropbtn");
  const menuLinks = document.querySelector(".dropdown-content");

  menuBtn.addEventListener("click", e => {
    e.stopPropagation();
    if (menuLinks.style.display === "block") {
      menuLinks.style.opacity = "0";
      setTimeout(() => menuLinks.style.display = "none", 300);
    } else {
      menuLinks.style.display = "block";
      setTimeout(() => menuLinks.style.opacity = "1", 10);
    }
  });

  // Close dropdown if clicking outside
  document.addEventListener("click", () => {
    if (menuLinks.style.display === "block") {
      menuLinks.style.opacity = "0";
      setTimeout(() => menuLinks.style.display = "none", 300);
    }
  });
});
