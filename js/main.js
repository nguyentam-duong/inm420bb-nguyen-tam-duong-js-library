// Burger menu for mobile
const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');
burger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
  burger.classList.toggle('open');
});

// Accordion
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', function () {
    const item = this.parentElement;
    item.classList.toggle('open');
    document.querySelectorAll('.accordion-item').forEach(other => {
      if (other !== item) other.classList.remove('open');
    });
  });
});

// Glide.js Hero Carousel
if (document.querySelector('.hero-glide')) {
  new Glide('.hero-glide', {
    type: 'carousel',
    autoplay: 5000,
    animationDuration: 900,
    perView: 1,
    gap: 0
  }).mount();
}

// AOS Animate On Scroll
AOS.init({
  duration: 900,
  once: true
});

// Chart.js Travel Stats
if (document.getElementById('travelChart')) {
  const ctx = document.getElementById('travelChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Hanoi', 'Ha Long', 'Sapa', 'Hoi An', 'Mekong'],
      datasets: [{
        label: 'Avg. Tourists (Thousands)',
        data: [1200, 950, 700, 800, 600],
        backgroundColor: [
          '#0F6F5C', '#F5A623', '#0F6F5C', '#F5A623', '#0F6F5C'
        ]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: '#222' }
        },
        x: {
          ticks: { color: '#222' }
        }
      }
    }
  });
}

// Leaflet.js Map
if (document.getElementById('leaflet-map')) {
  const map = L.map('leaflet-map').setView([21.0285, 105.8542], 6); // Hanoi
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  L.marker([21.0285, 105.8542]).addTo(map)
    .bindPopup('Welcome to Hanoi, Vietnam!')
    .openPopup();
}