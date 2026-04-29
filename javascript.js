let lastScrollY = window.scrollY;
let lastTime = performance.now();

let currentSwing = 0;

window.addEventListener("scroll", () => {
    const now = performance.now();
    const currentY = window.scrollY;

    // how fast user is scrolling
    const deltaY = currentY - lastScrollY;
    const deltaTime = now - lastTime;

    const speed = deltaY / deltaTime;

    // convert speed into rotation (swing intensity)
    let targetSwing = speed * 120;

    // clamp values so it doesn't go crazy
    targetSwing = Math.max(-12, Math.min(12, targetSwing));

    currentSwing = targetSwing;

    document.querySelectorAll(".rope-item").forEach((item, index) => {
        // slight delay difference per item for realism
        const offset = (index % 3) * 0.5;

        item.style.transform = `rotate(${currentSwing + offset}deg)`;
    });

    lastScrollY = currentY;
    lastTime = now;
});

setInterval(() => {
    currentSwing *= 0.9; // slow decay (natural settling)
}, 16);

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    mobileMenuBtn.addEventListener('click', () => mobileNav.classList.toggle('open'));
    document.querySelectorAll('.mobile-nav-link').forEach(l => l.addEventListener('click', () => mobileNav.classList.remove('open')));

    window.addEventListener('scroll', () => {
      document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 10);
    });

if (document.getElementById('contactForm')) {
document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name    = document.getElementById('name').value.trim();
        const email   = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value || 'General Inquiry';
        const message = document.getElementById('message').value.trim();
        const body = 'Hello Andre,\n\nMy name is ' + name + '.\nMy email is ' + email + '.\n\nSubject: ' + subject + '\n\n' + message + '\n\nBest regards,\n' + name;
        window.location.href = 'mailto:andre@sacredvisionstudios.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
}

    function showToast(msg) {
        const t = document.getElementById('toast');
        t.textContent = msg;
        t.classList.add('show');
        setTimeout(() => t.classList.remove('show'), 3000);
      }
  
      // Book fixed package → go to package-booking page
      function bookPackage(name, price) {
        showToast('Redirecting to book "' + name + '" (' + price + ')...');
        setTimeout(() => {
          window.location.href = 'package-booking.html?pkg=' + encodeURIComponent(name) + '&price=' + encodeURIComponent(price);
        }, 1200);
      }
  
      // Toggle negotiate
      function toggleNegotiate(cardId, name, inputId) {
        const card = document.getElementById(cardId);
        const isOpen = card.classList.contains('negotiable-open');
        if (isOpen) {
          const val = document.getElementById(inputId).value.trim();
          if (!val || isNaN(val) || Number(val) <= 0) {
            showToast('⚠️ Please enter a valid price first.');
            return;
          }
          showToast('✓ Offer of ₱' + Number(val).toLocaleString() + ' sent for "' + name + '"! Andre will be in touch.');
          card.classList.remove('negotiable-open');
          document.getElementById(inputId).value = '';
          card.querySelector('.package-btn').textContent = '💬 Negotiate Price';
        } else {
          card.classList.add('negotiable-open');
          card.querySelector('.package-btn').textContent = '→ Submit My Offer';
          document.getElementById(inputId).focus();
        }
      }

      // Min date = today
    if (document.getElementById('bDate')) {
    document.getElementById('bDate').min = new Date().toISOString().split('T')[0];

    // Time slot selection
    let selectedTime = '';
    document.querySelectorAll('.time-slot:not(.unavailable)').forEach(s => {
      s.addEventListener('click', () => {
        document.querySelectorAll('.time-slot').forEach(x => x.classList.remove('selected'));
        s.classList.add('selected');
        selectedTime = s.dataset.time;
        document.getElementById('step2').classList.add('done');
      });
    });

    // Duration selection
    let selectedHours = 0;
    document.querySelectorAll('.duration-btn').forEach(b => {
      b.addEventListener('click', () => {
        document.querySelectorAll('.duration-btn').forEach(x => x.classList.remove('selected'));
        b.classList.add('selected');
        selectedHours = parseInt(b.dataset.hours);
        document.getElementById('priceHours').querySelector('span:last-child').textContent = selectedHours + ' hour' + (selectedHours > 1 ? 's' : '');
        document.getElementById('priceTotal').querySelector('span:last-child').textContent = '&#8369;' + (selectedHours * 800).toLocaleString();
      });
    });

    // Step 1 progress
    document.getElementById('bName').addEventListener('input', () => {
      if (document.getElementById('bName').value.trim()) document.getElementById('step1').classList.add('done');
    });

    // Form submit
    document.getElementById('bookingForm').addEventListener('submit', function(e) {
      e.preventDefault();
      if (!selectedTime)  { alert('Please select a time slot.'); return; }
      if (!selectedHours) { alert('Please select a session duration.'); return; }

      const name  = document.getElementById('bName').value.trim();
      const email = document.getElementById('bEmail').value.trim();
      const date  = document.getElementById('bDate').value;
      const type  = document.getElementById('bType').value || 'General';
      const total = selectedHours * 800;

      document.getElementById('step3').classList.add('active', 'done');

      document.getElementById('confirmDetails').innerHTML =
        '<div class="confirm-row"><span class="lbl">Name</span><span class="val">' + name + '</span></div>' +
        '<div class="confirm-row"><span class="lbl">Email</span><span class="val">' + email + '</span></div>' +
        '<div class="confirm-row"><span class="lbl">Date</span><span class="val">' + date + '</span></div>' +
        '<div class="confirm-row"><span class="lbl">Time</span><span class="val">' + selectedTime + '</span></div>' +
        '<div class="confirm-row"><span class="lbl">Duration</span><span class="val">' + selectedHours + ' hour' + (selectedHours > 1 ? 's' : '') + '</span></div>' +
        '<div class="confirm-row"><span class="lbl">Type</span><span class="val">' + type + '</span></div>' +
        '<div class="confirm-row"><span class="lbl">Total</span><span class="val" style="color:#2563eb">&#8369;' + total.toLocaleString() + '</span></div>';

      document.getElementById('bookingFormView').style.display = 'none';
      document.getElementById('confirmView').classList.add('show');

      const body = 'New Studio Booking\n\nName: ' + name + '\nEmail: ' + email + '\nDate: ' + date + '\nTime: ' + selectedTime + '\nDuration: ' + selectedHours + ' hour(s)\nType: ' + type + '\nTotal: &#8369;' + total.toLocaleString() + '\n\nNotes: ' + document.getElementById('bNotes').value;
      setTimeout(() => {
        window.location.href = 'mailto:andre@sacredvisionstudios.com?subject=' + encodeURIComponent('Studio Booking - ' + name) + '&body=' + encodeURIComponent(body);
      }, 1500);
    });
    } // end bDate guard

    if (document.getElementById('wheelTrack')) {
    const reviews = [
      { stars:'★★★★★', text:'Andre captured our school event perfectly. Every shot had incredible depth and timing I didn\'t expect. The photos tell a story on their own.', name:'Maria Santos', role:'Event Coordinator', initials:'MS', date:'March 2026' },
      { stars:'★★★★★', text:'I booked the Prime package for a family outing and was blown away. The editing style is clean but full of emotion. Every photo felt like a memory.', name:'James Reyes', role:'Family Client', initials:'JR', date:'February 2026' },
      { stars:'★★★★★', text:'Sacred Vision Studios made our food event look absolutely mouth-watering. Andre has an eye for color and composition that elevates every frame.', name:'Carla Mendoza', role:'Restaurant Owner', initials:'CM', date:'January 2026' },
      { stars:'★★★★☆', text:'Really solid work, especially for an outdoor shoot. The mountain photos came out stunning. Would\'ve liked faster turnaround but quality made up for it.', name:'Renzo Villanueva', role:'Adventure Client', initials:'RV', date:'December 2025' },
      { stars:'★★★★★', text:'Hired Andre for a portrait session and the results were professional-grade. The lighting work was exceptional — clearly understood how to use natural light.', name:'Anna Lim', role:'Portrait Client', initials:'AL', date:'November 2025' },
      { stars:'★★★★★', text:'The Bespoke package was perfect for our small business product shoot. Andre listened to our vision and delivered beyond expectations. Will book again.', name:'Paolo Cruz', role:'Small Business Owner', initials:'PC', date:'October 2025' },
      { stars:'★★★★★', text:'Honestly one of the best photography experiences I\'ve had. Andre is professional, easy to work with, and clearly passionate about every shot. The photos were art.', name:'Sofia Dela Rosa', role:'Lifestyle Client', initials:'SR', date:'September 2025' }
    ];

    const track = document.getElementById('wheelTrack');
    const dotsEl = document.getElementById('wheelDots');
    const counter = document.getElementById('wheelCounter');

    const CARD_H = 210;
    const GAP    = 20;
    const STEP   = CARD_H + GAP;

    let current = 0;

    // Build cards & dots
    reviews.forEach((r, i) => {
      const card = document.createElement('div');
      card.className = 'review-card' + (i === 0 ? ' active' : '');
      card.style.minHeight = CARD_H + 'px';
      card.innerHTML =
        '<div class="review-stars">' + r.stars + '</div>' +
        '<div class="review-text">' + r.text + '</div>' +
        '<div class="review-author">' +
          '<div class="review-avatar">' + r.initials + '</div>' +
          '<div><div class="review-name">' + r.name + '</div><div class="review-role">' + r.role + '</div></div>' +
          '<div class="review-date">' + r.date + '</div>' +
        '</div>';
      track.appendChild(card);

      const dot = document.createElement('div');
      dot.className = 'wheel-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(dot);
    });

    function goTo(index) {
      const cards = track.querySelectorAll('.review-card');
      const dots  = dotsEl.querySelectorAll('.wheel-dot');
      cards[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = ((index % reviews.length) + reviews.length) % reviews.length;
      cards[current].classList.add('active');
      dots[current].classList.add('active');
      // bottom-to-top: current slide scrolls up, next comes from below
      track.style.transform = 'translateY(-' + (current * STEP) + 'px)';
      counter.textContent = (current + 1) + ' / ' + reviews.length;
    }

    document.getElementById('btnUp').addEventListener('click',   () => goTo(current - 1));
    document.getElementById('btnDown').addEventListener('click', () => goTo(current + 1));

    // Auto-rotate every 4s
    let timer = setInterval(() => goTo(current + 1), 4000);

    // Pause on hover
    const wheelOuter = document.getElementById('wheelOuter');
    wheelOuter.addEventListener('mouseenter', () => clearInterval(timer));
    wheelOuter.addEventListener('mouseleave', () => { timer = setInterval(() => goTo(current + 1), 4000); });

    // Keyboard
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowUp')   goTo(current - 1);
      if (e.key === 'ArrowDown') goTo(current + 1);
    });
    } // end wheelTrack guard