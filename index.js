document.addEventListener("DOMContentLoaded", () => {
  // Scroll reveal animation with IntersectionObserver
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  document
    .querySelectorAll(
      ".overview-section, .software-card, .feature-item, .cta-card, .info-block"
    )
    .forEach((el) => {
      el.classList.add("reveal-init");
      observer.observe(el);
    });

  // Search interaction
  const searchInput = document.querySelector(".search-input");
  if (searchInput) {
    searchInput.addEventListener("focus", () => {
      console.log("[v0] Search focused");
    });

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const query = searchInput.value;
        console.log("[v0] Search submitted:", query);
        alert(`Mencari aset: ${query}`);
      }
    });
  }

  // Feature "Pilih" buttons interaction
  document.querySelectorAll(".pilih-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const featureTitle =
        btn.parentElement.querySelector("h3")?.innerText || "";
      console.log("[v0] User selected feature:", featureTitle);
      alert(`Fitur dipilih: ${featureTitle}`);
    });
  });

  // CTA button interaction
  const ctaBtn = document.querySelector(".cta-button");
  if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
      console.log("[v0] Registration button clicked");
      alert("Membuka halaman pendaftaran...");
    });
  }

  // ===== MENU FUNCTIONALITY =====
  const menuToggle = document.getElementById("menuToggle");
  const menuClose = document.getElementById("menuClose");
  const sidebarMenu = document.getElementById("sidebarMenu");
  const menuOverlay = document.getElementById("menuOverlay");

  function openMenu() {
    if (sidebarMenu && menuOverlay) {
      sidebarMenu.classList.add("active");
      menuOverlay.classList.add("active");
      if (menuToggle) {
        menuToggle.classList.add("active");
      }
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
  }

  function closeMenu() {
    if (sidebarMenu && menuOverlay) {
      sidebarMenu.classList.remove("active");
      menuOverlay.classList.remove("active");
      if (menuToggle) {
        menuToggle.classList.remove("active");
      }
      document.body.style.overflow = ""; // Restore scrolling
    }
  }

  // Toggle menu on button click
  if (menuToggle) {
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      if (sidebarMenu && sidebarMenu.classList.contains("active")) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  // Close menu on close button click
  if (menuClose) {
    menuClose.addEventListener("click", closeMenu);
  }

  // Close menu on overlay click
  if (menuOverlay) {
    menuOverlay.addEventListener("click", closeMenu);
  }

  // Close menu on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sidebarMenu && sidebarMenu.classList.contains("active")) {
      closeMenu();
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      sidebarMenu &&
      sidebarMenu.classList.contains("active") &&
      !sidebarMenu.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      closeMenu();
    }
  });

  // ===== CHATBOT FUNCTIONALITY =====

  // Chatbot elements
  const chatbotToggle = document.getElementById("chatbotToggle");
  const chatbotWindow = document.getElementById("chatbotWindow");
  const chatbotClose = document.getElementById("chatbotClose");
  const chatbotInput = document.getElementById("chatbotInput");
  const chatbotSend = document.getElementById("chatbotSend");
  const chatbotMessages = document.getElementById("chatbotMessages");

  // Comprehensive Knowledge Base - Green Horizon Residence & 3DDOCS
  const knowledgeBase = {
    // Greetings
    halo: "Halo! Selamat datang di 3DDOCS - Green Horizon Residence. Saya siap membantu Anda menemukan hunian impian dengan informasi lengkap tentang spesifikasi, harga, lokasi, dan kemudahan pembiayaan. Apa yang ingin Anda ketahui?",
    hai: "Hai! Senang bisa membantu Anda. Saya punya informasi detail tentang Green Horizon Residence dan platform 3DDOCS kami. Silakan tanyakan apa saja!",

    // Help & General
    help: "Saya dapat membantu Anda dengan:\n✅ Spesifikasi Teknis Bangunan\n✅ Harga & Skema Pembayaran (DP 0-10%)\n✅ Lokasi & Aksesibilitas\n✅ Fitur Smart Home & Green Building\n✅ Proses KPR & Simulasi Cicilan\n✅ FAQ Seputar Properti\n✅ Fitur Platform 3DDOCS\n\nSilakan ketik topik yang Anda minati!",
    bantuan:
      "Saya dapat membantu Anda dengan:\n✅ Spesifikasi Teknis Bangunan\n✅ Harga & Skema Pembayaran (DP 0-10%)\n✅ Lokasi & Aksesibilitas\n✅ Fitur Smart Home & Green Building\n✅ Proses KPR & Simulasi Cicilan\n✅ FAQ Seputar Properti\n✅ Fitur Platform 3DDOCS\n\nSilakan ketik topik yang Anda minati!",

    // Property Specifications
    spesifikasi:
      "Green Horizon Residence dibangun dengan standar premium:\n\n🏗️ STRUKTUR:\n• Beton Bertulang dengan besi ulir SNI 10-12mm (tahan gempa)\n• Dinding Double Wall antar rumah (privasi maksimal)\n• Cat eksterior Weather Shield (tahan cuaca ekstrem)\n\n🏠 ATAP & LANTAI:\n• Rangka Baja Ringan Zincalume + aluminium foil peredam panas\n• Genteng Beton Flat minimalis\n• Lantai Granit Homogeneous 60x60 cm\n\n⚡ SMART HOME:\n• Instalasi kabel bawah tanah (estetika tanpa kabel)\n• Smart Door Lock (Fingerprint/PIN)\n• 1 titik CCTV Indoor per unit\n• Langit-langit tinggi 4,5 meter (sirkulasi udara optimal)\n\nMau tahu lebih detail tentang aspek tertentu?",
    teknis:
      "Green Horizon Residence dibangun dengan standar premium:\n\n🏗️ STRUKTUR:\n• Beton Bertulang dengan besi ulir SNI 10-12mm (tahan gempa)\n• Dinding Double Wall antar rumah (privasi maksimal)\n• Cat eksterior Weather Shield (tahan cuaca ekstrem)\n\n🏠 ATAP & LANTAI:\n• Rangka Baja Ringin Zincalume + aluminium foil peredam panas\n• Genteng Beton Flat minimalis\n• Lantai Granit Homogeneous 60x60 cm\n\n⚡ SMART HOME:\n• Instalasi kabel bawah tanah (estetika tanpa kabel)\n• Smart Door Lock (Fingerprint/PIN)\n• 1 titik CCTV Indoor per unit\n• Langit-langit tinggi 4,5 meter (sirkulasi udara optimal)\n\nMau tahu lebih detail tentang aspek tertentu?",
    bangunan:
      "Green Horizon Residence mengusung konsep Tropical Modernism dengan high ceiling hingga 4,5 meter untuk sirkulasi udara alami maksimal dan pencahayaan matahari optimal. Ini membantu menekan biaya listrik harian! Struktur menggunakan beton bertulang SNI standar tahan gempa, sistem Double Wall untuk privasi suara, dan septic tank Bio-Filter ramah lingkungan.",

    // Pricing & Payment
    harga:
      "💰 STRUKTUR HARGA GREEN HORIZON RESIDENCE:\n\n📌 Booking Fee: Rp 5.000.000 (langsung mengurangi harga jual)\n📌 Down Payment: 0% - 10% (bisa dicicil 6x)\n\n✅ SUDAH TERMASUK:\n• PPN 11%\n• IMB/PBG\n• Sambungan Listrik & Air Bersih\n• Mesin Air\n\n❌ BELUM TERMASUK:\n• Biaya proses KPR (kecuali ada promo)\n• BPHTB (Pajak Pembeli)\n\n🎁 PROMO MINGGU INI:\nFree Biaya Akad KPR senilai 20 juta untuk booking minggu ini!\n\nMau saya buatkan simulasi cicilan?",
    price:
      "💰 STRUKTUR HARGA GREEN HORIZON RESIDENCE:\n\n📌 Booking Fee: Rp 5.000.000 (langsung mengurangi harga jual)\n📌 Down Payment: 0% - 10% (bisa dicicil 6x)\n\n✅ SUDAH TERMASUK:\n• PPN 11%\n• IMB/PBG\n• Sambungan Listrik & Air Bersih\n• Mesin Air\n\n❌ BELUM TERMASUK:\n• Biaya proses KPR (kecuali ada promo)\n• BPHTB (Pajak Pembeli)\n\n🎁 PROMO MINGGU INI:\nFree Biaya Akad KPR senilai 20 juta untuk booking minggu ini!\n\nMau saya buatkan simulasi cicilan?",
    pembayaran:
      "Kami menyediakan skema pembayaran yang sangat fleksibel:\n\n1️⃣ DP 0% - 10% (cicil 6 kali)\n2️⃣ Booking Fee hanya Rp 5 juta (mengurangi harga jual)\n3️⃣ KPR dengan bunga kompetitif\n4️⃣ Promo: Free Biaya Akad KPR Rp 20 juta (minggu ini!)\n\nTim Credit Analyst kami akan membantu proses KPR Anda. Jika KPR ditolak karena alasan sistemik, Booking Fee dikembalikan 100%!",
    dp: "Down Payment (DP) di Green Horizon Residence sangat fleksibel:\n• Mulai dari 0% hingga 10%\n• Bisa dicicil hingga 6 kali\n• Booking Fee Rp 5 juta langsung mengurangi harga jual\n\nKami punya tim Credit Analyst yang akan membantu memastikan pengajuan KPR Anda smooth. Mau simulasi cicilan berdasarkan budget Anda?",

    // Location & Investment
    lokasi:
      "📍 LOKASI STRATEGIS - Zona Sunrise Property:\n\nGreen Horizon Residence terletak di koridor pengembangan kota satelit dengan capital gain 10-15% per tahun!\n\n🚗 AKSES:\n• 3 KM dari Exit Tol Lingkar Luar\n• Shuttle Bus eksklusif ke MRT/KRL (setiap jam)\n\n🏥 KESEHATAN: 15 menit ke RS Pondok Indah / RS Hermina\n🎓 PENDIDIKAN: Dekat Sekolah Al-Azhar, BPK Penabur, Kampus Negeri\n🛍️ LIFESTYLE: 10 menit ke AEON Mall / IKEA\n\nLokasi premium untuk hunian sekaligus investasi!",
    location:
      "📍 LOKASI STRATEGIS - Zona Sunrise Property:\n\nGreen Horizon Residence terletak di koridor pengembangan kota satelit dengan capital gain 10-15% per tahun!\n\n🚗 AKSES:\n• 3 KM dari Exit Tol Lingkar Luar\n• Shuttle Bus eksklusif ke MRT/KRL (setiap jam)\n\n🏥 KESEHATAN: 15 menit ke RS Pondok Indah / RS Hermina\n🎓 PENDIDIKAN: Dekat Sekolah Al-Azhar, BPK Penabur, Kampus Negeri\n🛍️ LIFESTYLE: 10 menit ke AEON Mall / IKEA\n\nLokasi premium untuk hunian sekaligus investasi!",
    investasi:
      "Green Horizon Residence adalah investasi cerdas! Terletak di Zona Sunrise Property dengan proyeksi capital gain 10-15% per tahun. Dekat tol, MRT, rumah sakit premium, sekolah ternama, dan mall besar. Kawasan ini sedang berkembang pesat sebagai kota satelit modern!",

    // Features & Facilities
    fitur:
      "🌟 KEUNGGULAN GREEN HORIZON RESIDENCE:\n\n1️⃣ TROPICAL MODERNISM: High ceiling 4,5m, sirkulasi udara alami\n2️⃣ SMART HOME: Smart Door Lock, CCTV, instalasi bawah tanah\n3️⃣ ECO-FRIENDLY: Septic tank Bio-Filter, peredam panas atap\n4️⃣ ANTI BANJIR: Elevasi +2m dari jalan raya, drainase 500m²\n5️⃣ CUSTOM LAYOUT: Bebas ubah tata ruang dalam (masa pembangunan)\n6️⃣ GARANSI: 100 hari garansi struktur & kebocoran atap\n\nPlatform 3DDOCS:\n• 3D Viewer real-time\n• Asset management standar industri\n• Kompatibel Blender, AutoCAD, SketchUp\n\nMau tahu lebih detail?",
    fasilitas:
      "Green Horizon Residence dilengkapi:\n• Shuttle Bus eksklusif ke stasiun MRT/KRL\n• Sistem drainase tertutup + kolam retensi 500m²\n• Instalasi kabel bawah tanah (estetika)\n• Smart Door Lock & CCTV di setiap unit\n• Free Custom Layout interior\n• Garansi 100 hari pasca serah terima",

    // FAQ - Common Questions
    banjir:
      "Kawasan Green Horizon BEBAS BANJIR! 🌊❌\n\nAlasannya:\n1. Elevasi 2 meter lebih tinggi dari jalan raya utama\n2. Sistem drainase tertutup berukuran besar\n3. Kolam retensi mandiri seluas 500 m²\n4. Sudah teruji selama musim hujan ekstrem\n\nAnda bisa tidur nyenyak tanpa khawatir banjir!",
    kpr: "Proses KPR di Green Horizon sangat mudah:\n\n1️⃣ Tim Credit Analyst kami meninjau data Anda\n2️⃣ Kami ajukan ke Bank dengan approval rate tinggi\n3️⃣ Jika ditolak karena alasan sistemik → Booking Fee kembali 100%\n4️⃣ Proses dokumen: SHM, IMB, PBB diserahkan setelah akad\n\n🎁 PROMO: Free Biaya Akad KPR Rp 20 juta (minggu ini!)\n\nMau simulasi cicilan berapa per bulan?",
    custom:
      "Anda BISA custom layout interior! 🏠✨\n\n✅ BOLEH: Ubah tata ruang dalam selama tidak merubah struktur utama (dilakukan saat masa pembangunan)\n❌ TIDAK BOLEH: Ubah fasad/tampak depan (demi estetika lingkungan)\n\n💡 TIP: Konsultasikan design Anda dengan tim kami agar proses lebih smooth!",
    garansi:
      "Kami memberikan GARANSI PENUH:\n\n✅ 100 hari garansi:\n• Kebocoran atap\n• Kerusakan struktur\n• Cat mengelupas\n• Retak rambut\n\n📋 Prosedur:\n• Checklist bersama pengawas sebelum serah terima\n• Jika ada cacat, diperbaiki dalam 14 hari kerja\n• Gratis tanpa biaya tambahan!\n\nKepuasan Anda adalah prioritas kami.",

    // 3DDOCS Platform
    "3ddocs":
      "Platform 3DDOCS adalah solusi manajemen aset digital untuk properti & konstruksi:\n\n🎯 FITUR UTAMA:\n• 3D Viewer browser (tanpa install software)\n• Asset 3D ukuran standar industri\n• Manajemen Proyek & Version Control\n• Kolaborasi Tim (Komentar & Revisi)\n• Ekspor ke Blender, SketchUp, AutoCAD\n\nCocok untuk arsitek, developer, dan kontraktor!",
    software:
      "3DDOCS kompatibel dengan:\n✅ Blender 3D\n✅ AutoCAD\n✅ SketchUp\n✅ Dan berbagai software 3D profesional lainnya\n\nEkspor dan import file dengan mudah tanpa konversi ribet!",
    cara: "Cara menggunakan 3DDOCS:\n\n1️⃣ Daftar akun gratis\n2️⃣ Upload desain 3D properti Anda\n3️⃣ Kelola dan bagikan dengan tim/klien\n4️⃣ Berikan komentar & revisi real-time\n5️⃣ Ekspor ke format yang Anda butuhkan\n\nMudah, cepat, dan efisien!",

    // Contact & Registration
    kontak:
      "Hubungi kami untuk informasi lebih lanjut:\n\n📧 Email: support@3ddocs.com\n📱 WhatsApp: +62 xxx-xxxx-xxxx\n🌐 Website: www.3ddocs.com\n🏢 Kantor Marketing: Green Horizon Sales Gallery\n\nTim kami siap melayani Senin-Minggu, 09:00-18:00 WIB",
    daftar:
      "Untuk mendaftar Green Horizon Residence:\n\n1️⃣ Klik tombol 'Daftar Sekarang' di halaman utama\n2️⃣ Booking Fee: Rp 5 juta (mengurangi harga jual)\n3️⃣ Pilih unit favorit Anda\n4️⃣ Konsultasi dengan tim marketing\n5️⃣ Proses KPR (dibantu Credit Analyst)\n\n🎁 PROMO MINGGU INI: Free Biaya Akad KPR Rp 20 juta!\n\nJangan sampai kehabisan unit terbaik!",
    booking:
      "Booking unit Green Horizon sangat mudah:\n• Booking Fee: Rp 5.000.000 (langsung mengurangi harga jual)\n• Langsung pilih unit favorit Anda\n• DP 0-10% bisa dicicil 6x\n• Promo: Free Biaya Akad KPR Rp 20 juta (minggu ini!)\n\nMau saya carikan unit terbaik untuk Anda?",

    // Closing & Thanks
    "terima kasih":
      "Sama-sama! Senang bisa membantu Anda menemukan hunian impian di Green Horizon Residence. 🏡✨\n\nJangan lewatkan promo minggu ini ya! Ada pertanyaan lain?",
    thanks:
      "You're welcome! Happy to help you find your dream home at Green Horizon Residence. 🏡✨\n\nDon't miss this week's promotion! Anything else I can help with?",
    bye: "Terima kasih telah menghubungi 3DDOCS - Green Horizon Residence! 🏡\n\nKami tunggu kunjungan Anda di sales gallery. Sampai jumpa! 👋",
    "selamat tinggal":
      "Terima kasih telah menghubungi 3DDOCS - Green Horizon Residence! 🏡\n\nKami tunggu kunjungan Anda di sales gallery. Sampai jumpa! 👋",
  };

  // Conversation state tracking
  let conversationStep = 0;
  let lastBotQuestion = "";
  let userName = "";
  let userPhone = "";

  // Webhook URL
  const WEBHOOK_URL =
    "https://hook.eu1.make.com/u7oqmhijcrx4pmllc16h8307lfinnxg7";

  function sendToWebhook(name, phone) {
    console.log("[v0] Sending data to webhook:", { name, phone });

    // In a real scenario, we use fetch.
    // Since this is client-side, we'll try to send it.
    // Cors might be an issue depending on the webhook configuration,
    // but this is the standard way to do it.
    try {
      fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          whatsapp: phone,
          timestamp: new Date().toISOString(),
        }),
      })
        .then((response) => {
          console.log("[v0] Webhook response:", response.status);
        })
        .catch((error) => {
          console.error("[v0] Webhook error:", error);
        });
    } catch (e) {
      console.error("[v0] Fetch error:", e);
    }
  }

  // Toggle chatbot window
  function toggleChatbot() {
    chatbotWindow.classList.toggle("active");
    if (chatbotWindow.classList.contains("active")) {
      chatbotInput.focus();
    }
  }

  // Add message to chat
  function addMessage(message, isUser = false) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `chatbot-message ${
      isUser ? "user-message" : "bot-message"
    }`;

    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";

    const p = document.createElement("p");
    p.textContent = message;
    p.style.margin = "0";
    p.style.whiteSpace = "pre-line";

    contentDiv.appendChild(p);
    messageDiv.appendChild(contentDiv);
    chatbotMessages.appendChild(messageDiv);

    // Scroll to bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  // Get bot response with step tracking
  function getBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase().trim();

    // Step 0: Initial greeting - offer to show services
    if (conversationStep === 0) {
      // Check if user says yes to see services
      if (
        lowerMessage.includes("yes") ||
        lowerMessage.includes("ya") ||
        lowerMessage.includes("iya")
      ) {
        conversationStep = 1;
        return (
          "Sempurna! Berikut adalah layanan lengkap 3DDOCS beserta harganya:\n\n" +
          "🎯 PAKET 3DDOCS:\n\n" +
          "1️⃣ 3D VIEWER PRO\n" +
          "   • Lihat model 3D real-time di browser\n" +
          "   • Rotasi 360°, zoom unlimited\n" +
          "   • Support file: OBJ, FBX, GLTF\n" +
          "   💰 Harga: Rp 2.500.000/tahun\n\n" +
          "2️⃣ STANDARD ASSET LIBRARY\n" +
          "   • 5000+ asset 3D properti premium\n" +
          "   • Furniture, landscape, fixtures\n" +
          "   • Update bulanan asset baru\n" +
          "   💰 Harga: Rp 4.500.000/tahun\n\n" +
          "3️⃣ PROPERTY DESIGN SUITE (BEST VALUE!)\n" +
          "   • Full access 3D Viewer + Asset Library\n" +
          "   • Manajemen Proyek & Version Control\n" +
          "   • Kolaborasi Tim (unlimited users)\n" +
          "   • Export ke Blender, AutoCAD, SketchUp\n" +
          "   • Priority Support 24/7\n" +
          "   💰 Harga: Rp 8.900.000/tahun (Hemat 30%!)\n\n" +
          "Paket mana yang paling sesuai dengan kebutuhan Anda?"
        );
      }

      // If not yes, check knowledge base first
      for (const [key, value] of Object.entries(knowledgeBase)) {
        if (lowerMessage.includes(key)) {
          // After giving answer, ask if they want to see services
          conversationStep = 0;
          lastBotQuestion = "services";
          return (
            value +
            "\n\n💡 Apakah Anda ingin melihat daftar lengkap layanan dan harga 3DDOCS? (Ketik 'ya')"
          );
        }
      }

      // If no match, offer help
      conversationStep = 0;
      lastBotQuestion = "services";
      return (
        "Saya di sini untuk membantu! Saya bisa memberikan informasi tentang:\n" +
        "• Properti Green Horizon Residence\n" +
        "• Layanan & Harga 3DDOCS\n" +
        "• Spesifikasi Teknis\n" +
        "• Proses KPR & Pembayaran\n\n" +
        "Atau langsung lihat daftar lengkap layanan 3DDOCS? (Ketik 'ya')"
      );
    }

    // Step 1: User has seen service list, help them choose
    if (conversationStep === 1) {
      if (lowerMessage.includes("1") || lowerMessage.includes("viewer")) {
        conversationStep = 2;
        return (
          "Pilihan bagus! 3D Viewer Pro cocok untuk:\n" +
          "✅ Arsitek yang ingin presentasi ke klien\n" +
          "✅ Developer yang butuh preview cepat\n" +
          "✅ Tim kecil yang fokus visualisasi\n\n" +
          "💰 Investasi: Rp 2.500.000/tahun\n" +
          "🎁 PROMO: Gratis 1 bulan trial!\n\n" +
          "Mau langsung daftar atau butuh konsultasi dengan tim kami dulu?"
        );
      }

      if (
        lowerMessage.includes("2") ||
        lowerMessage.includes("asset") ||
        lowerMessage.includes("library")
      ) {
        conversationStep = 2;
        return (
          "Excellent choice! Standard Asset Library memberikan:\n" +
          "✅ 5000+ asset profesional siap pakai\n" +
          "✅ Hemat waktu desain hingga 70%\n" +
          "✅ Update rutin setiap bulan\n" +
          "✅ Lisensi komersial included\n\n" +
          "💰 Investasi: Rp 4.500.000/tahun\n" +
          "🎁 BONUS: Free 50 custom asset request!\n\n" +
          "Mau saya sambungkan ke tim sales untuk demo?"
        );
      }

      if (
        lowerMessage.includes("3") ||
        lowerMessage.includes("suite") ||
        lowerMessage.includes("design") ||
        lowerMessage.includes("property")
      ) {
        conversationStep = 2;
        return (
          "🌟 PILIHAN TERBAIK! Property Design Suite adalah paket paling populer karena:\n" +
          "✅ Complete solution (Viewer + Library + Tools)\n" +
          "✅ Hemat 30% vs beli terpisah\n" +
          "✅ Unlimited collaboration untuk seluruh tim\n" +
          "✅ Priority support 24/7\n" +
          "✅ Free training & onboarding\n\n" +
          "💰 Investasi: Rp 8.900.000/tahun\n" +
          "🎁 PROMO BULAN INI:\n" +
          "   • Gratis 2 bulan extra\n" +
          "   • Free custom branding\n" +
          "   • 100 GB cloud storage\n\n" +
          "Mau saya buatkan quotation resmi untuk perusahaan Anda?"
        );
      }

      // If asking for more info
      if (
        lowerMessage.includes("banding") ||
        lowerMessage.includes("bedanya") ||
        lowerMessage.includes("recommend")
      ) {
        return (
          "Saya rekomendasikan berdasarkan kebutuhan:\n\n" +
          "📊 PERBANDINGAN CEPAT:\n\n" +
          "🥉 3D Viewer Pro (Rp 2,5 jt/thn)\n" +
          "   → Untuk freelancer/tim kecil\n" +
          "   → Hanya butuh visualisasi\n\n" +
          "🥈 Asset Library (Rp 4,5 jt/thn)\n" +
          "   → Untuk desainer aktif\n" +
          "   → Butuh banyak asset cepat\n\n" +
          "🥇 Property Design Suite (Rp 8,9 jt/thn) ⭐ BEST VALUE\n" +
          "   → Untuk perusahaan/developer\n" +
          "   → All-in-one solution\n" +
          "   → ROI terbaik (hemat 30%!)\n\n" +
          "Mana yang paling sesuai dengan tim Anda?"
        );
      }

      // Check knowledge base at step 1 too
      for (const [key, value] of Object.entries(knowledgeBase)) {
        if (lowerMessage.includes(key)) {
          return (
            value +
            "\n\nKembali ke pilihan paket, mana yang Anda minati? (1/2/3)"
          );
        }
      }

      return (
        "Saya lihat Anda masih mempertimbangkan. Tidak masalah!\n\n" +
        "Untuk membantu Anda memilih:\n" +
        "• Ketik '1', '2', atau '3' untuk detail paket\n" +
        "• Ketik 'banding' untuk melihat perbandingan\n" +
        "• Atau tanyakan sesuatu (misal: 'harga', 'fitur', 'lokasi')\n\n" +
        "Saya siap membantu! 😊"
      );
    }

    // Step 2: User interested in specific package, guide to action -> Ask for Name
    if (conversationStep === 2) {
      if (
        lowerMessage.includes("daftar") ||
        lowerMessage.includes("ya") ||
        lowerMessage.includes("yes") ||
        lowerMessage.includes("demo") ||
        lowerMessage.includes("quotation") ||
        lowerMessage.includes("konsultasi")
      ) {
        conversationStep = 3;
        return "Sempurna! Untuk memproses permintaan Anda, bolehkah saya tahu nama lengkap Anda?";
      }

      // Check knowledge base at step 2
      for (const [key, value] of Object.entries(knowledgeBase)) {
        if (lowerMessage.includes(key)) {
          return (
            value +
            "\n\nMasih tertarik dengan paket yang tadi? Mau saya sambungkan ke tim sales?"
          );
        }
      }

      return (
        "Baik, saya mengerti Anda mungkin perlu waktu untuk mempertimbangkan.\n\n" +
        "Yang pasti:\n" +
        "✅ Semua paket ada free trial\n" +
        "✅ Money-back guarantee 30 hari\n" +
        "✅ Bisa upgrade/downgrade kapan saja\n\n" +
        "Mau saya jelaskan sesuatu yang lain? Atau langsung hubungi tim sales? (Ketik 'ya')"
      );
    }

    // Step 3: Collect Name -> Ask for WhatsApp
    if (conversationStep === 3) {
      if (userMessage.length < 2) {
        return "Mohon masukkan nama lengkap yang valid.";
      }

      userName = userMessage;
      conversationStep = 4;
      return (
        `Halo Kak ${userName}! Salam kenal.\n\n` +
        "Boleh informasikan nomor WhatsApp yang bisa kami hubungi? (Contoh: 08123456789)"
      );
    }

    // Step 4: Collect WhatsApp -> Send to Webhook
    if (conversationStep === 4) {
      // Basic phone validation (just checking if it has digits)
      if (!/\d/.test(userMessage) || userMessage.length < 8) {
        return "Mohon masukkan nomor WhatsApp yang valid (minimal 8 angka).";
      }

      userPhone = userMessage;

      // TRIGGER WEBHOOK
      sendToWebhook(userName, userPhone);

      conversationStep = 0; // Reset or go to a "finished" state

      return (
        `Terima kasih, Kak ${userName}! Data Anda sudah kami terima. ✅\n\n` +
        `Nomor WhatsApp: ${userPhone}\n\n` +
        "Tim sales kami akan segera menghubungi Anda dalam 1x24 jam untuk:\n" +
        "✅ Schedule demo\n" +
        "✅ Diskusi kebutuhan\n" +
        "✅ Penawaran khusus\n\n" +
        "Sementara menunggu, ada hal lain yang ingin ditanyakan seputar Green Horizon?"
      );
    }

    // General fallback - should rarely reach here
    for (const [key, value] of Object.entries(knowledgeBase)) {
      if (lowerMessage.includes(key)) {
        return value;
      }
    }

    // Final fallback with helpful options
    return (
      "Hmm, saya belum yakin maksud Anda. Tapi saya bisa bantu dengan:\n\n" +
      "💼 LAYANAN 3DDOCS:\n" +
      "   Ketik 'ya' untuk lihat paket & harga\n\n" +
      "🏡 PROPERTI GREEN HORIZON:\n" +
      "   • 'harga' - Info harga properti\n" +
      "   • 'spesifikasi' - Detail bangunan\n" +
      "   • 'lokasi' - Lokasi & akses\n" +
      "   • 'kpr' - Info pembiayaan\n\n" +
      "📞 KONTAK:\n" +
      "   Ketik 'kontak' untuk info lengkap\n\n" +
      "Apa yang ingin Anda ketahui?"
    );
  }

  // Send message
  function sendMessage() {
    const message = chatbotInput.value.trim();

    if (message === "") return;

    // Add user message
    addMessage(message, true);
    chatbotInput.value = "";

    // Simulate typing delay
    chatbotSend.disabled = true;
    setTimeout(() => {
      const response = getBotResponse(message);
      addMessage(response, false);
      chatbotSend.disabled = false;
      chatbotInput.focus();
    }, 800);
  }

  // Event listeners for chatbot
  if (chatbotToggle) {
    chatbotToggle.addEventListener("click", toggleChatbot);
  }

  if (chatbotClose) {
    chatbotClose.addEventListener("click", toggleChatbot);
  }

  if (chatbotSend) {
    chatbotSend.addEventListener("click", sendMessage);
  }

  if (chatbotInput) {
    chatbotInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendMessage();
      }
    });
  }
});
