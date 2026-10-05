/* =====================================================
   Yevmiye Takip - Global UI & Hesaplama Scripti
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Canlı Kazanç Hesaplama Fonksiyonu
  const dailyInput = document.getElementById("dailyRate");
  const daysInput = document.getElementById("daysCount");
  const overtimeInput = document.getElementById("overtimeHours");
  const advanceInput = document.getElementById("advanceAmount");

  const grossDisplay = document.getElementById("totalGross");
  const advanceDisplay = document.getElementById("totalAdvance");
  const netDisplay = document.getElementById("netBalance");

  function calculateEarnings() {
    if (!dailyInput || !daysInput || !overtimeInput || !advanceInput) return;

    const daily = parseFloat(dailyInput.value) || 0;
    const days = parseFloat(daysInput.value) || 0;
    const hours = parseFloat(overtimeInput.value) || 0;
    const advance = parseFloat(advanceInput.value) || 0;

    // Saatlik ücret hesabı (1 yevmiye = 8 saat, mesai katsayısı = 1.5)
    const hourlyOvertimeRate = (daily / 8) * 1.5;
    const gross = (daily * days) + (hours * hourlyOvertimeRate);
    const net = gross - advance;

    grossDisplay.textContent = "₺" + Math.round(gross).toLocaleString("tr-TR");
    advanceDisplay.textContent = "- ₺" + Math.round(advance).toLocaleString("tr-TR");
    netDisplay.textContent = "₺" + Math.round(net).toLocaleString("tr-TR");
  }

  // Hesaplama girdilerini dinle
  [dailyInput, daysInput, overtimeInput, advanceInput].forEach((input) => {
    if (input) {
      input.addEventListener("input", calculateEarnings);
    }
  });

  // 2. Performanslı Scroll Reveal (Görünürlük Animasyonu)
  const sections = document.querySelectorAll("section, .calculator-card");
  
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    sections.forEach((section) => {
      section.classList.add("fade-in-section");
      observer.observe(section);
    });
  }
});