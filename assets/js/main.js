const demos = [
  {
    id: "case-01",
    title: "Responsive Article Card Grid",
    description: "A clean three-column article layout with responsive stacking for tablet and mobile screens.",
    image: "./assets/images/cover-01.png",
    href: "./cases/case-01/",
    status: "live",
    categories: ["grid"],
    tags: ["Cards", "Responsive", "Editorial"]
  },
  {
    id: "case-02",
    title: "Industry Cards Responsive",
    description: "A two-column industry feature section with image hover motion and mobile-friendly stacking.",
    image: "./assets/images/cover-02.png",
    href: "./cases/case-02/",
    status: "live",
    categories: ["grid"],
    tags: ["Cards", "Hover", "Responsive"]
  },
  {
    id: "case-03",
    title: "Integrations Grid Responsive",
    description: "A compact integrations grid with icon placeholders and strong spacing across breakpoints.",
    image: "./assets/images/cover-03.png",
    href: "./cases/case-03/",
    status: "live",
    categories: ["grid"],
    tags: ["Grid", "Icons", "Responsive"]
  },
  {
    id: "case-04",
    title: "Course Carousel",
    description: "A Swiper-powered course slider with category tabs, card hover states, and responsive slides.",
    image: "./assets/images/cover-04.png",
    href: "./cases/case-04/",
    status: "live",
    categories: ["slider", "interactive"],
    tags: ["Swiper", "Tabs", "Carousel"]
  },
  {
    id: "case-05",
    title: "Latest News Grid",
    description: "A responsive news listing with balanced cards, image thumbnails, and a load-more interaction.",
    image: "./assets/images/cover-05.png",
    href: "./cases/case-05/",
    status: "live",
    categories: ["grid", "interactive"],
    tags: ["News", "Cards", "Load More"]
  },
  {
    id: "case-06",
    title: "Bootstrap Filter Cards",
    description: "A Bootstrap layout with a left-side filter panel and card metadata prepared for future JS filtering.",
    image: "./assets/images/cover-06.png",
    href: "./cases/case-06/",
    status: "live",
    categories: ["bootstrap", "interactive"],
    tags: ["Bootstrap", "Filter UI", "Cards"]
  },
  {
    id: "case-07",
    title: "GTM AI Strategy Carousel",
    description: "A content carousel with title-side navigation controls and an editorial card presentation.",
    image: "./assets/images/cover-07.png",
    href: "./cases/case-07/",
    status: "live",
    categories: ["slider"],
    tags: ["Swiper", "Carousel", "Marketing"]
  },
  {
    id: "case-08",
    title: "Product Detail Gallery",
    description: "A richer product detail page with color switching, thumbnail gallery sync, quantity controls, and animations.",
    image: "./assets/images/cover-08.png",
    href: "./cases/case-08/",
    status: "live",
    categories: ["interactive"],
    tags: ["Product", "Gallery", "JavaScript"]
  },
  {
    id: "case-09",
    title: "Brazilian Culture Editorial Grid",
    description: "An editorial image grid with irregular proportions, text overlays, and immersive cover blocks.",
    image: "./assets/images/cover-09.png",
    href: "./cases/case-09/",
    status: "live",
    categories: ["grid"],
    tags: ["Editorial", "Image Grid", "Overlay"]
  },
  {
    id: "case-10",
    title: "Feature Image Switcher",
    description: "A split content layout where clicking the left feature titles swaps the supporting image on the right.",
    image: "./assets/images/cover-10.png",
    href: "./cases/case-10/",
    status: "live",
    categories: ["interactive"],
    tags: ["Content Switcher", "Animation", "Responsive"]
  },
  {
    id: "case-11",
    title: "Before / After Comparison",
    description: "An interactive comparison block with drag-to-compare behavior, smooth handle motion, and mobile support.",
    image: "./assets/images/cover-11.png",
    href: "./cases/case-11/",
    status: "live",
    categories: ["interactive"],
    tags: ["Comparison", "Drag", "Before/After"]
  },
  {
    id: "case-12",
    title: "Video Stories Slider",
    description: "A story-style video slider with Swiper navigation, modal playback, and autoplay-enabled video popups.",
    image: "./assets/images/cover-12.png",
    href: "./cases/case-12/",
    status: "live",
    categories: ["slider", "interactive"],
    tags: ["Video", "Swiper", "Modal"]
  }
];

const galleryGrid = document.getElementById("galleryGrid");
const emptyState = document.getElementById("emptyState");
const template = document.getElementById("cardTemplate");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

const dialog = document.getElementById("previewDialog");
const previewImage = document.getElementById("previewImage");
const previewTitle = document.getElementById("previewTitle");
const previewText = document.getElementById("previewText");
const previewBadge = document.getElementById("previewBadge");
const closeDialogBtn = document.getElementById("closeDialogBtn");

let activeFilter = "all";
let keyword = "";

function toSentenceCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function createTag(tag) {
  const span = document.createElement("span");
  span.className = "card-tag";
  span.textContent = tag;
  return span;
}

function openPreview(item) {
  previewImage.src = item.image;
  previewImage.alt = item.title;
  previewTitle.textContent = item.title;
  previewText.textContent = item.description;
  previewBadge.textContent = item.status === "live" ? "Live demo" : "Preview";
  dialog.showModal();
  document.body.style.overflow = "hidden";
}

function closePreview() {
  dialog.close();
  document.body.style.overflow = "";
}

function createCard(item) {
  const fragment = template.content.cloneNode(true);

  const imageWraps = fragment.querySelectorAll(".js-open-preview");
  const image = fragment.querySelector(".card-image");
  const title = fragment.querySelector(".card-title");
  const desc = fragment.querySelector(".card-desc");
  const statusBadge = fragment.querySelector(".status-badge");
  const casePath = fragment.querySelector(".case-path");
  const tagsWrap = fragment.querySelector(".card-tags");
  const openDemo = fragment.querySelector(".js-open-demo");

  image.src = item.image;
  image.alt = item.title;

  title.textContent = item.title;
  desc.textContent = item.description;
  statusBadge.textContent = item.status === "live" ? "Live demo" : "Preview";
  casePath.textContent = item.id;

  item.tags.forEach((tag) => tagsWrap.appendChild(createTag(tag)));

  openDemo.href = item.href;

  imageWraps.forEach((button) => {
    button.addEventListener("click", () => openPreview(item));
  });

  return fragment;
}

function matchesFilter(item) {
  return activeFilter === "all" || item.categories.includes(activeFilter);
}

function matchesKeyword(item) {
  if (!keyword) return true;
  const haystack = [item.title, item.description, item.id, ...item.tags, ...item.categories]
    .join(" ")
    .toLowerCase();
  return haystack.includes(keyword);
}

function renderGallery() {
  galleryGrid.innerHTML = "";

  const filtered = demos.filter((item) => matchesFilter(item) && matchesKeyword(item));

  filtered.forEach((item) => {
    galleryGrid.appendChild(createCard(item));
  });

  emptyState.hidden = filtered.length > 0;
}

searchInput.addEventListener("input", (event) => {
  keyword = event.target.value.trim().toLowerCase();
  renderGallery();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("is-active"));
    button.classList.add("is-active");
    activeFilter = button.dataset.filter;
    renderGallery();
  });
});

closeDialogBtn.addEventListener("click", closePreview);

dialog.addEventListener("click", (event) => {
  const dialogRect = dialog.getBoundingClientRect();
  const isInDialog =
    event.clientY >= dialogRect.top &&
    event.clientY <= dialogRect.bottom &&
    event.clientX >= dialogRect.left &&
    event.clientX <= dialogRect.right;

  if (!isInDialog) {
    closePreview();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dialog.open) {
    closePreview();
  }
});

renderGallery();
