document.addEventListener("DOMContentLoaded", () => {
  const scroller = document.getElementById("scroller");
  const header = document.getElementById("header");
  const sections = Array.from(document.querySelectorAll("section"));
  const dots = Array.from(document.querySelectorAll(".dot"));
  const toggleBtns = Array.from(document.querySelectorAll(".toggle-btn"));
  const toggleSlider = document.querySelector(".toggle-slider");
  const unpackedSteps = document.getElementById("steps-unpacked");
  const dragdropSteps = document.getElementById("steps-dragdrop");
  const methodPillText = document.getElementById("method-pill-text");

  let activeSection = 0;

  // Function to scroll to a specific section by index
  function scrollToSection(index) {
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: "smooth" });
    }
  }

  // Hook up dot navigation click handlers
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      scrollToSection(index);
    });
  });

  // Hook up "How it works" button
  const howItWorksBtn = document.getElementById("btn-how-it-works");
  if (howItWorksBtn) {
    howItWorksBtn.addEventListener("click", (e) => {
      e.preventDefault();
      // Section index 3 is how it works
      scrollToSection(3);
    });
  }

  // Setup intersection observer for dot indicator and header color inversion
  if (scroller && sections.length > 0) {
    const dotObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.indexOf(entry.target);
            if (idx !== -1) {
              activeSection = idx;
              // Update active dot
              dots.forEach((dot, i) => {
                if (i === idx) {
                  dot.classList.add("active");
                } else {
                  dot.classList.remove("active");
                }
              });

              // Header invert color on dark problem section (index 1)
              if (idx === 1) {
                header.classList.add("inverted");
              } else {
                header.classList.remove("inverted");
              }
            }
          }
        });
      },
      { root: scroller, threshold: 0.5 }
    );

    sections.forEach((s) => dotObserver.observe(s));

    // Setup reveal animations observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { root: scroller, threshold: 0.15 }
    );

    sections.forEach((s) => revealObserver.observe(s));
  }

  // Trigger initial hero reveal animations immediately
  if (sections[0]) {
    sections[0].querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("visible");
    });
  }

  // Installation method toggle logic (Load Unpacked vs Direct Drag & Drop)
  function setInstallMethod(method) {
    if (method === "unpacked") {
      toggleBtns.forEach((btn) => {
        if (btn.dataset.method === "unpacked") btn.classList.add("active");
        else btn.classList.remove("active");
      });
      if (toggleSlider) toggleSlider.style.transform = "translateX(0)";
      if (unpackedSteps) unpackedSteps.classList.add("active");
      if (dragdropSteps) dragdropSteps.classList.remove("active");
      if (methodPillText) methodPillText.textContent = "Load Unpacked";
    } else {
      toggleBtns.forEach((btn) => {
        if (btn.dataset.method === "dragdrop") btn.classList.add("active");
        else btn.classList.remove("active");
      });
      if (toggleSlider) toggleSlider.style.transform = "translateX(100%)";
      if (dragdropSteps) dragdropSteps.classList.add("active");
      if (unpackedSteps) unpackedSteps.classList.remove("active");
      if (methodPillText) methodPillText.textContent = "Drag & Drop Zip";
    }
  }

  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const method = btn.dataset.method;
      setInstallMethod(method);
    });
  });
});
