// Mobile Menu

const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu')
    mobileMenu.classList.toggle('open')
    menuToggle.classList.toggle('fa-bars')
    menuToggle.classList.toggle('fa-times')
    console.log('clicked')
});

// Theme
const themeToggler = document.querySelector('.theme-toggler');
const themeToggleIcon = document.querySelector('.theme-toggle-icon');

themeToggler.addEventListener('click', () => {
    themeToggleIcon.classList.toggle('fa-moon');
    themeToggleIcon.classList.toggle('fa-sun');
    document.body.classList.toggle('darkmode');
})


// Demo
const synesthesiaTypeElem = document.getElementById('synesthesia-type');
const spatialPatternTypeElem = document.getElementById('spatial-pattern');
const demoVisualizationBtn = document.querySelector('.demo-visualize');
const stepsDiv = document.querySelector('.steps');

demoVisualizationBtn.addEventListener('click', () => {
    let synesthesiaType = synesthesiaTypeElem.value;
    let spatialPatternType = spatialPatternTypeElem.value;
    const demoDisplayContainer = document.querySelector('.demo-display');
    const demoDisplayChildren = demoDisplayContainer.children;
    const demoContainer = document.querySelector('.demo-container');
    const imgSrc = `/images/${spatialPatternType}-${synesthesiaType}.png`

    const hasImg = Array.from(demoDisplayChildren).some(node => node.tagName.toLowerCase() === 'img');

    if (hasImg) {
        demoDisplayChildren.item(0).src = imgSrc;
    } else {

        stepsDiv.style.display = 'none';

        const demoImg = document.createElement('img');
        demoImg.classList.add('demo-img')
        demoImg.src = imgSrc;
        demoDisplayContainer.appendChild(demoImg);

        const exploreMoreBtn = document.createElement('a')
        exploreMoreBtn.textContent = 'Explore More'
        exploreMoreBtn.href = '/visualizer'
        exploreMoreBtn.classList.add('btn', 'btn-dark', 'explore-more')
        demoContainer.appendChild(exploreMoreBtn);
    }
})

// Feature icon color
const softColors = [
  "#FF6F91", // Soft Rose Pink
  "#FFB347", // Soft Orange
  "#FFD93D", // Warm Yellow
  "#6BCB77", // Soft Green
  "#4D96FF", // Soft Blue
  "#9D4EDD", // Soft Purple
  "#FF8C94", // Coral Pink
  "#00C49A", // Teal Green
  "#F08A5D", // Peachy Orange
  "#845EC2"  // Lavender Purple
];


const featureIcons = document.querySelectorAll('.feature-icon');

for (let i = 0; i < featureIcons.length; i++) {
    featureIcons[i].style.fill = softColors[i]
}

// FAQ Accordions
const faqItems = document.querySelectorAll('.faq-item')

faqItems.forEach(faq => {

    const question = faq.querySelector('.question')
    const answer = faq.querySelector('.answer')

    question.addEventListener('click', () => {
        faq.classList.toggle('active')
    })
})


// Footer Year
const year = new Date().getFullYear();
const yearElement = document.querySelector('.ongoing-year');

yearElement.innerText = year;