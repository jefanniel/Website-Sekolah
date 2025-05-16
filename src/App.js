        // Dibuat oleh Jefanniel Nathan
        // GitHub: https://github.com/jefa21
        // Tahun: 2025
        console.log("Made by Jefanniel Nathan - https://github.com/jefa21 © 2025");

        // Script untuk navigasi dan responsif hamburger menu
        document.addEventListener('DOMContentLoaded', function() {
            // Variabel untuk elemen navbar dan hamburger menu
            const hamburger = document.getElementById('hamburger-menu');
            const navbar = document.getElementById('navbar');
            
            // Fungsi toggle untuk hamburger menu
            hamburger.addEventListener('click', function() {
                hamburger.classList.toggle('active');
                navbar.classList.toggle('active');
            });
            
            // Menutup navbar ketika link diklik
            document.querySelectorAll('nav ul li a').forEach(item => {
                item.addEventListener('click', function() {
                    hamburger.classList.remove('active');
                    navbar.classList.remove('active');
                });
            });
            
            // Header menyusut ketika scroll
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 50) {
                    header.style.padding = '5px 0';
                    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                } else {
                    header.style.padding = '15px 0';
                    header.style.boxShadow = 'none';
                }
                
                // ScrollReveal - menampilkan elemen saat di-scroll
                revealElements();
            });
            
            // Fungsi untuk ScrollReveal
            function revealElements() {
                const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
                
                scrollRevealElements.forEach(element => {
                    // Mendapatkan posisi elemen
                    const elementTop = element.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    // Jika elemen sudah masuk viewport
                    if (elementTop < windowHeight - 100) {
                        element.classList.add('show');
                    }
                });
            }
            
            // Memicu ScrollReveal saat halaman dimuat
            revealElements();
        });
