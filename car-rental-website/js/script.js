document.addEventListener('DOMContentLoaded', () => {
    // Initialize i18next
    i18next.init({
        lng: 'en', // default language
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
                    "profileIntro": "Welcome to Car Rental, the place where luxury meets comfort. Our mission is to provide you with the best car rental experience, ensuring that you travel in style and comfort wherever you go.",
                    "profileMission": "At Car Rental, we believe that every journey should be a memorable one. That's why we offer a wide selection of luxury cars that are meticulously maintained and equipped with the latest amenities. Whether you're traveling for business or leisure, we have the perfect vehicle to meet your needs.",
                    "profileValues": "Our core values are customer satisfaction, reliability, and excellence. We strive to exceed your expectations by offering personalized services and flexible rental options. Our team of experienced professionals is dedicated to making your rental process seamless and enjoyable.",
                    "profileCommitment": "We are committed to ensuring your safety and comfort throughout your rental experience. Our fleet undergoes regular maintenance and safety checks to ensure that every car is in top condition. We also offer 24/7 customer support to assist you with any inquiries or issues you may encounter during your rental period.",
                    "profileConclusion": "Thank you for choosing Car Rental. We look forward to serving you and making your journey a pleasant one. Book your luxury car today and experience the ultimate in comfort and convenience."
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
                    "profileIntro": "Selamat datang di Car Rental, tempat di mana kemewahan bertemu dengan kenyamanan. Misi kami adalah memberikan Anda pengalaman sewa mobil terbaik, memastikan Anda bepergian dengan gaya dan kenyamanan ke mana pun Anda pergi.",
                    "profileMission": "Di Car Rental, kami percaya bahwa setiap perjalanan harus berkesan. Itulah mengapa kami menawarkan berbagai pilihan mobil mewah yang dirawat dengan baik dan dilengkapi dengan fasilitas terbaru. Baik Anda bepergian untuk bisnis atau liburan, kami memiliki kendaraan yang sempurna untuk memenuhi kebutuhan Anda.",
                    "profileValues": "Nilai inti kami adalah kepuasan pelanggan, keandalan, dan keunggulan. Kami berusaha melebihi ekspektasi Anda dengan menawarkan layanan yang dipersonalisasi dan opsi sewa yang fleksibel. Tim profesional berpengalaman kami berdedikasi untuk membuat proses sewa Anda lancar dan menyenangkan.",
                    "profileCommitment": "Kami berkomitmen untuk memastikan keselamatan dan kenyamanan Anda selama pengalaman sewa Anda. Armada kami menjalani perawatan dan pemeriksaan keselamatan rutin untuk memastikan setiap mobil dalam kondisi terbaik. Kami juga menawarkan dukungan pelanggan 24/7 untuk membantu Anda dengan pertanyaan atau masalah apa pun yang mungkin Anda temui selama periode sewa Anda.",
                    "profileConclusion": "Terima kasih telah memilih Car Rental. Kami menantikan untuk melayani Anda dan membuat perjalanan Anda menyenangkan. Pesan mobil mewah Anda hari ini dan rasakan kenyamanan dan kemudahan tertinggi."
                }
            }
        }
    }, function(err, t) {
        if (err) {
            console.error("Error initializing i18next:", err);
            return;
        }
        console.log("i18next initialized");
        updateContent();
    });

    // Event listener for language selector
    document.getElementById('language-selector').addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        i18next.changeLanguage(selectedLanguage, (err) => {
            if (err) {
                console.error("Error changing language:", err);
                return;
            }
            console.log("Language changed to", selectedLanguage);
            updateContent();
        });
    });

    // Function to update content based on selected language
    function updateContent() {
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const translationKey = el.getAttribute('data-i18n');
            const translatedText = i18next.t(translationKey);
            console.log(`Translating ${translationKey}: ${translatedText}`);
            el.innerHTML = translatedText;
        });
    }

    // Testimonial slider
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
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });

    // Scroll to top button
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
});
