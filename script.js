// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero animations
gsap
  .timeline()
  .to(".hero-content h1", { duration: 1, opacity: 1, y: 0, ease: "power2.out" })
  .to(
    ".hero-content p",
    { duration: 0.8, opacity: 1, y: 0, ease: "power2.out" },
    "-=0.5"
  )
  .fromTo(
   ".scroll-down-btn",
  { opacity: 0, y: 30 },
  { duration: 1.8, opacity: 1, y: 0, ease: "power2.out" }
  );


// hero bacground
gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero-content", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    pin: true, // ✅ ini efek "fixed" aman di semua browser
    pinSpacing: false,
  },
});

const scrollDownBtn = document.getElementById("scrollDownBtn");

// Timeline untuk animasi About
let aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about", // section about-mu
    start: "top 80%", // kapan animasi mulai (misal saat 80% layar)
    toggleActions: "restart none none reset",
    markers: false,
    // play saat masuk, reverse saat keluar
  },
});

// Animasi dekorasi kiri
aboutTl.fromTo(
  ".decor-left",
  { opacity: 0, x: -100 },
  { duration: 1.9, opacity: 1, x: 0, ease: "power2.out" }
);

// Animasi about h2
aboutTl.fromTo(
  ".about-text h2",
  { opacity: 0, y: 100 },
  { duration: 0.5, opacity: 1, y: 0, ease: "power2.out" },
  "-=1.3"
);

// Animasi dekorasi kanan bawah
aboutTl.fromTo(
  ".decor-bottom-right",
  { opacity: 0, x: 100 },
  { duration: 1.2, opacity: 1, x: 0, ease: "power2.out", stagger: 0.2 },
  "-=1"
);

// Animasi paragraf about
aboutTl.fromTo(
  ".about-text p",
  { opacity: 0, y: 100 },
  { duration: 0.8, opacity: 1, y: 0, ease: "power2.out", stagger: 0.2 },
  "-=0.8"
);

// Animasi tombol
aboutTl.fromTo(
  ".btn-about",
  { opacity: 0, y: 100 },
  { duration: 0.8, opacity: 1, y: 0, ease: "power2.out" },
  "-=0.6"
);

// animasi tengah
aboutTl.fromTo(
  ".decor-top-right",
  { opacity: 0, x: 100 },
  { duration: 1, opacity: 1, x: 0, ease: "power2.out" },
  "-=0.4" // timing bisa kamu atur
);

// Sembunyikan tombol saat user scroll ke bawah
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    scrollDownBtn.classList.add("hidden");
  } else {
    scrollDownBtn.classList.remove("hidden");
  }
});

// Smooth scroll saat tombol diklik
scrollDownBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#products").scrollIntoView({
    behavior: "smooth",
  });
});

// Scroll-triggered animations
gsap.utils.toArray(".fade-in").forEach((element) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element, // trigger per elemen
        start: "top 90%", // muncul saat elemen masuk viewport
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );
});

gsap.utils.toArray(".slide-in-left").forEach((element) => {
  gsap.fromTo(
    element,
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );
});

gsap.utils.toArray(".slide-in-right").forEach((element) => {
  gsap.fromTo(
    element,
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );
});

// Product card hover animations
gsap.utils.toArray(".product-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, { duration: 0.3, scale: 1.02, ease: "power2.out" });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, { duration: 0.3, scale: 1, ease: "power2.out" });
  });
});

/// Mobile menu functionality
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

// GSAP timeline untuk animasi link
const tlMenu = gsap.timeline({ paused: true });

tlMenu
  .to(mobileMenu, { right: 0, duration: 0.3, ease: "power2.out" })
  .to(
    ".mobile-menu a",
    { opacity: 1, x: 0, duration: 0.7, stagger: 0.25, ease: "power2.out" },
    "-=0.1"
  );

// Toggle buka/tutup menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");

  if (hamburger.classList.contains("active")) {
    tlMenu.play(0); // buka menu + animasi
  } else {
    tlMenu.reverse(); // tutup menu
  }
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    tlMenu.reverse();
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    hamburger.classList.remove("active");
    tlMenu.reverse();
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Ambil elemen viewer
const imageViewer = document.getElementById("image-viewer");
const imageViewerImg = document.getElementById("image-viewer-img");
const imageViewerClose = document.querySelector(".image-viewer-close");

// Event untuk semua gambar di galeri
document
  .querySelectorAll(".galery-img img, .galery-left-images img")
  .forEach((img) => {
    img.addEventListener("click", () => {
      imageViewer.style.display = "flex";
      imageViewerImg.src = img.src;

      // nonaktifkan scroll halaman utama
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    });
  });

// Tutup viewer saat klik tombol close
imageViewerClose.onclick = function () {
  imageViewer.style.display = "none";
  // nonaktifkan scroll halaman utama
  document.documentElement.style.overflow = "auto";
  document.body.style.overflow = "auto";
};

// Tutup viewer saat klik di luar gambar
imageViewer.onclick = function (e) {
  if (e.target === imageViewer) {
    imageViewer.style.display = "none";
  }
  // nonaktifkan scroll halaman utama
  document.documentElement.style.overflow = "auto";
  document.body.style.overflow = "auto";
};

// atur date dan time
const dateSelect = document.getElementById("date");
const timeSelect = document.getElementById("time");

// helper untuk pad 2 digit
function pad(n) {
  return n < 10 ? "0" + n : n;
}

// generate all Fri/Sat/Sun of the current month (local dates)
function generateDatesForMonth(year, month) {
  dateSelect.innerHTML = "";
  const lastDay = new Date(year, month + 1, 0).getDate(); // last date in month

  for (let day = 1; day <= lastDay; day++) {
    // create local date each iteration (year, month, day) -> local midnight
    const current = new Date(year, month, day);
    const weekday = current.getDay(); // 0=Sun,1=Mon,...,5=Fri,6=Sat

    if (weekday === 5 || weekday === 6 || weekday === 0) {
      const value = `${current.getFullYear()}-${pad(
        current.getMonth() + 1
      )}-${pad(current.getDate())}`;
      const text = current.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }); // e.g. Friday, September 26, 2025

      const opt = document.createElement("option");
      opt.value = value; // local YYYY-MM-DD (safe)
      opt.textContent = text; // display
      dateSelect.appendChild(opt);
    }
  }
}

// Update time options based on selected date (parse value as local date)
function updateTimes() {
  const val = dateSelect.value;
  if (!val) {
    timeSelect.innerHTML = "";
    return;
  }

  // parse YYYY-MM-DD as local date to avoid UTC shift
  const [y, m, d] = val.split("-");
  const selDate = new Date(
    parseInt(y, 10),
    parseInt(m, 10) - 1,
    parseInt(d, 10)
  );
  const day = selDate.getDay();

  timeSelect.innerHTML = "";

  let times = [];
  if (day === 5) {
    // Friday
    times = ["4:30 PM", "7:00 PM"];
  } else if (day === 6 || day === 0) {
    // Saturday or Sunday
    times = ["2:00 PM", "4:30 PM", "7:00 PM"];
  }

  times.forEach((t) => {
    const option = document.createElement("option");
    option.value = t;
    option.textContent = t;
    timeSelect.appendChild(option);
  });
}

// Auto-generate for current month; if no future dates left in this month, generate next month
function initDateTimeSelect() {
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();

  // generate for current month
  generateDatesForMonth(year, month);

  // if all generated dates are in the past relative to today, move to next month
  // (i.e. if the last option's date < today)
  if (dateSelect.options.length === 0) {
    // no Fri/Sat/Sun (shouldn't happen), but fallback to next month
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
    generateDatesForMonth(year, month);
  } else {
    // check last option's local date
    const lastVal = dateSelect.options[dateSelect.options.length - 1].value;
    const [ly, lm, ld] = lastVal.split("-");
    const lastDate = new Date(
      parseInt(ly, 10),
      parseInt(lm, 10) - 1,
      parseInt(ld, 10)
    );

    // if lastDate < today (all past), switch to next month
    const todayStart = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    if (lastDate < todayStart) {
      month++;
      if (month > 11) {
        month = 0;
        year++;
      }
      generateDatesForMonth(year, month);
    } else {
      // remove past dates from the beginning so users can't pick a date already passed this month
      // keep only dates >= today
      for (let i = 0; i < dateSelect.options.length; ) {
        const v = dateSelect.options[i].value;
        const [vy, vm, vd] = v.split("-");
        const dt = new Date(
          parseInt(vy, 10),
          parseInt(vm, 10) - 1,
          parseInt(vd, 10)
        );
        if (dt < todayStart) {
          dateSelect.remove(i);
        } else {
          i++;
        }
      }
    }
  }

  // select first available date and update times
  if (dateSelect.options.length > 0) {
    dateSelect.selectedIndex = 0;
    updateTimes();
  }
}

// events
dateSelect.addEventListener("change", updateTimes);

// init on load
initDateTimeSelect();

// submit
const scriptURL =
  "https://script.google.com/macros/s/AKfycbw3ATOBNmg_bF2U2g-seBcFN6pdBVtF007WBA7h-NSRPz4lCfVYYKjL4MtDpUZkcvw88A/exec";

const adminNumber = "6282237458100"; // ganti dengan nomor WhatsApp admin

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const params = new URLSearchParams(formData);

  const submitBtn = e.target.querySelector(".submit-btn");
  const originalText = submitBtn.textContent;

  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  fetch(`${scriptURL}?${params.toString()}`, { method: "GET" })
    .then((res) => res.json())
    .then(() => {
      // ✅ Ambil data form
      const name = formData.get("name");
      const pax = formData.get("pax");
      const date = formData.get("date");
      const time = formData.get("time");
      const whatsapp = formData.get("whatsapp");
      const notes = formData.get("notes");

      // ✅ Encode untuk WhatsApp (newline jadi %0A, spasi tetap aman)
      const message =
        `*New Reservation*%0A%0A` +
        `Name: ${encodeURIComponent(name)}%0A` +
        `Pax: ${encodeURIComponent(pax)}%0A` +
        `Date: ${encodeURIComponent(date)}%0A` +
        `Time: ${encodeURIComponent(time)}%0A` +
        `WhatsApp: ${encodeURIComponent(whatsapp)}%0A%0A` +
        `Notes:%0A ${encodeURIComponent(notes).replace(/%0A/g, "%0A")}`;

      // ✅ Buka WhatsApp Web / App dengan pesan otomatis
      window.open(`https://wa.me/${adminNumber}?text=${message}`, "_blank");

      alert("Reservation saved successfully!");
      e.target.reset();
    })
    .catch((error) => {
      console.error("Error!", error);
      alert("An error occurred, please try again.");
    })
    .finally(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    });
});

// Ambil elemen
const navbar = document.querySelector(".navbar");
const navContainer = document.querySelector(".nav-container");
let navShown = false;

// Event scroll tunggal
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // 🔹 Efek background navbar (selalu aktif, tidak pakai display)
  if (scrollY > 100) {
    gsap.to(".navbar", {
      duration: 0.3,
      background: "rgba(0, 0, 0, 0.95)",
      ease: "power1.out",
    });
  } else {
    gsap.to(".navbar", {
      duration: 0.3,
      background: "rgba(0, 0, 0, 0)",
      ease: "power1.out",
    });
  }

  // 🔹 Kontrol nav-container (muncul saat scroll)
  if (scrollY > 100 && !navShown) {
    navShown = true;

    // Tampilkan nav-container sebelum animasi
    navContainer.style.display = "flex"; // atau "block", sesuai struktur HTML kamu
    navContainer.style.pointerEvents = "auto";

    // Animasi fade-in untuk container
    gsap.to(".nav-container", {
      duration: 0.6,
      opacity: 1,
      ease: "power2.out",
    });

    // Timeline animasi isi navbar
    const tl = gsap.timeline();

    // Logo masuk dari kiri
    tl.fromTo(
      ".logo",
      { opacity: 0, x: -100 },
      { duration: 1, opacity: 1, x: 0, ease: "power2.out" }
    );

    // Nav links masuk dari kanan (stagger satu-satu)
    tl.fromTo(
      ".nav-links li",
      { opacity: 0, x: 100 },
      {
        duration: 0.8,
        opacity: 1,
        x: 0,
        ease: "power2.out",
        stagger: 0.2,
      },
      "-=0.5"
    );

    // Hamburger ikut dari kanan
    tl.fromTo(
      ".hamburger",
      { opacity: 0, x: 100 },
      { duration: 1, opacity: 1, x: 0, ease: "power2.out" },
      "-=1"
    );
  }

  // 🔹 Saat scroll balik ke atas
  if (scrollY <= 100 && navShown) {
    navShown = false;

    // Fade-out nav-container (navbar tetap ada)
    gsap.to(".nav-container", {
      duration: 0.4,
      opacity: 0,
      ease: "power1.inOut",
      onComplete: () => {
        navContainer.style.pointerEvents = "none";
        navContainer.style.display = "none";
      },
    });
  }
});

// Ambil elemen modal
const modal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close");

let scrollPosition = 0;

// Klik card produk
document.querySelectorAll(".product-card").forEach((card) => {
  card.addEventListener("click", () => {
    const bg = card.querySelector(".product-image").style.backgroundImage;
    const imgUrl = bg.slice(5, -2);

    modalImage.src = imgUrl;
    modalTitle.textContent = card.getAttribute("data-title");
    modalDesc.innerHTML = card.getAttribute("data-desc");

    modal.style.display = "flex";

    // Simpan posisi scroll & kunci halaman
    scrollPosition = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
  });
});

// Tutup modal
function closeModal() {
  modal.style.display = "none";

  // Hapus fixed tanpa memicu efek scroll
  const top = document.body.style.top;
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
  // Langsung set scroll posisi sebelumnya TANPA efek animasi
  window.scrollTo({
    top: parseInt(top || "0") * -1,
    behavior: "instant", // tidak smooth, langsung
  });
}

closeBtn.onclick = closeModal;

// Klik luar modal
window.onclick = (e) => {
  if (e.target === modal) {
    closeModal();
  }
};
