console.log('hi');

// === get Current Year === //
const getCurrentYear = new Date().getFullYear();

const currentYear = document.querySelector('.year');

currentYear.textContent = getCurrentYear