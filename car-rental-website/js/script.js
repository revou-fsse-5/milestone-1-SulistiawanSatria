document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const car = document.getElementById('car').value;
    const pickupLocation = document.getElementById('pickup-location').value;
    const dropoffLocation = document.getElementById('dropoff-location').value;
    const pickupDate = document.getElementById('pickup-date').value;
    const dropoffDate = document.getElementById('dropoff-date').value;

    if (!name || !email || !car || !pickupLocation || !dropoffLocation || !pickupDate || !dropoffDate) {
        alert('Please fill in all fields');
    } else {
        alert(`Booking confirmed for ${name} (${email})\nCar: ${car}\nPickup: ${pickupLocation} on ${pickupDate}\nDropoff: ${dropoffLocation} on ${dropoffDate}`);
    }
});

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('search-location').value;
    const date = document.getElementById('search-date').value;
    const type = document.getElementById('search-type').value;
    
    alert(`Search for ${type} cars in ${location} on ${date}`);
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    
    alert(`Message sent by ${name} (${email})\nMessage: ${message}`);
});

const slider = document.querySelector('.testimonial-slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});

const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    counter.innerText = '0';
    
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        
        const increment = target / 200;
        
        if(count < target) {
            counter.innerText = `${Math.ceil(count + increment)}`;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    };
    
    updateCounter();
});

function initMap() {
    var location = {lat: -34.397, lng: 150.644};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('.icon').forEach(item => {
    item.addEventListener('click', event => {
        item.classList.add('fade-in');
        setTimeout(() => {
            item.classList.remove('fade-in');
        }, 500);
    });
});

// Initialize i18next with inline translations
i18next.init({
    lng: 'en',
    resources: {
        en: {
            translation: {
                "home": "Home",
                "about": "About",
                "services": "Services",
                "vehicles": "Vehicles",
                "booking": "Booking",
                "contact": "Contact",
                "heroTitle": "Rent Luxury Car",
                "orderNow": "Order Now",
                "ourProfile": "Our Profile",
                "welcomeMessage": "Welcome to Car Rental, the place where luxury meets comfort...",
                "bookACar": "Book a Car",
                "name": "Name",
                "email": "Email",
                "pickupLocation": "Pickup Location",
                "dropoffLocation": "Dropoff Location",
                "car": "Car",
                "pickupDate": "Pickup Date",
                "dropoffDate": "Dropoff Date",
                "bookNow": "Book Now",
                "customerTestimonials": "What Our Customers Say",
                "faq": "Frequently Asked Questions",
                "rentalProcess": "What is the rental process?",
                "rentalProcessAnswer": "Our rental process is simple. You can book a car online or visit our office. Provide your details, choose a car, and complete the payment. You're ready to go!",
                "cancelBooking": "Can I cancel my booking?",
                "cancelBookingAnswer": "Yes, you can cancel your booking up to 24 hours before the rental period without any charges. Please refer to our cancellation policy for more details.",
                "contactUs": "Contact Us",
                "quickLinks": "Quick Links",
                "privacyPolicy": "Privacy Policy",
                "termsConditions": "Terms & Conditions",
                "followUs": "Follow Us",
                "newsletter": "Newsletter",
                "subscribe": "Subscribe",
                "ourLocation": "Our Location",
                "scrollToTop": "Scroll to Top"
            }
        },
        id: {
            translation: {
                "home": "Beranda",
                "about": "Tentang",
                "services": "Layanan",
                "vehicles": "Kendaraan",
                "booking": "Pemesanan",
                "contact": "Kontak",
                "heroTitle": "Sewa Mobil Mewah",
                "orderNow": "Pesan Sekarang",
                "ourProfile": "Profil Kami",
                "welcomeMessage": "Selamat datang di Car Rental, tempat di mana kemewahan bertemu dengan kenyamanan...",
                "bookACar": "Pesan Mobil",
                "name": "Nama",
                "email": "Email",
                "pickupLocation": "Lokasi Penjemputan",
                "dropoffLocation": "Lokasi Pengantaran",
                "car": "Mobil",
                "pickupDate": "Tanggal Penjemputan",
                "dropoffDate": "Tanggal Pengantaran",
                "bookNow": "Pesan Sekarang",
                "customerTestimonials": "Apa Kata Pelanggan Kami",
                "faq": "Pertanyaan yang Sering Diajukan",
                "rentalProcess": "Bagaimana proses penyewaan?",
                "rentalProcessAnswer": "Proses penyewaan kami sederhana. Anda dapat memesan mobil secara online atau mengunjungi kantor kami. Berikan detail Anda, pilih mobil, dan selesaikan pembayaran. Anda siap untuk pergi!",
                "cancelBooking": "Bisakah saya membatalkan pemesanan saya?",
                "cancelBookingAnswer": "Ya, Anda dapat membatalkan pemesanan hingga 24 jam sebelum periode sewa tanpa biaya. Silakan merujuk ke kebijakan pembatalan kami untuk lebih jelasnya.",
                "contactUs": "Hubungi Kami",
                "quickLinks": "Tautan Cepat",
                "privacyPolicy": "Kebijakan Privasi",
                "termsConditions": "Syarat & Ketentuan",
                "followUs": "Ikuti Kami",
                "newsletter": "Buletin",
                "subscribe": "Berlangganan",
                "ourLocation": "Lokasi Kami",
                "scrollToTop": "Gulir ke Atas"
            }
        }
    }
}, function(err, t) {
    updateContent();
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    if (toggleButton) {
        console.log('Toggle button found'); // Debugging
        toggleButton.addEventListener('click', () => {
            console.log('Dark mode toggle clicked'); // Debugging
            document.body.classList.toggle('dark-mode');
            console.log('Body class:', document.body.classList); // Debugging
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                navbar.classList.toggle('dark-mode');
                console.log('Navbar class:', navbar.classList); // Debugging
            }
            document.querySelectorAll('.hero').forEach(el => {
                el.classList.toggle('dark-mode');
                console.log('Hero class:', el.classList); // Debugging
            });
            document.querySelectorAll('.footer-section').forEach(el => {
                el.classList.toggle('dark-mode');
                console.log('Footer-section class:', el.classList); // Debugging
            });
            document.querySelectorAll('.sidebar .icon').forEach(el => {
                el.classList.toggle('dark-mode');
                console.log('Sidebar icon class:', el.classList); // Debugging
            });
            document.querySelectorAll('.sidebar .icon-text').forEach(el => {
                el.classList.toggle('dark-mode');
                console.log('Sidebar icon-text class:', el.classList); // Debugging
            });
        });
    } else {
        console.log('Toggle button not found'); // Debugging
    }
});



document.getElementById('language-selector').addEventListener('change', (event) => {
    i18next.changeLanguage(event.target.value, () => {
        updateContent();
    });
});

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        el.innerHTML = i18next.t(el.getAttribute('data-i18n'));
    });
}
