
function toggleLegal(el) {
  const item = el.closest('.legal-item');
  item.classList.toggle('open');
}

function closeModal() {
  const modal = document.getElementById('modalOverlay');
  modal.classList.add('hidden');
  
  // Optional: Prevent the modal from showing again in the same session
  sessionStorage.setItem('modalShown', 'true');
}

// Optional: Check if modal was already shown

window.onload = function() {
  if (sessionStorage.getItem('modalShown')) {
    document.getElementById('modalOverlay').classList.add('hidden');
  }
}


function playVideo() {
  const video = document.getElementById('demoVideo');
  const source = video.querySelector('source');
  const placeholder = document.getElementById('videoPlaceholder');

  const src = source.getAttribute('src');

  if (src && src !== 'YOUR_VIDEO_FILE.mp4') {
    placeholder.style.display = 'none';
    video.style.display = 'block';
    video.load(); // important
    video.play();
  } else {
    const hint = placeholder.querySelector('.video-upload-hint');
    hint.style.background = 'rgba(239,68,68,0.08)';
    hint.style.borderColor = 'rgba(239,68,68,0.3)';
    hint.innerHTML = `
      <strong style="color:#f87171;">No video set.</strong> 
      Replace <code style="background:rgba(255,255,255,0.08);padding:2px 6px;border-radius:4px;font-size:12px;">
      YOUR_VIDEO_FILE.mp4</code> in the HTML with your actual video file path.
    `;
  }
}

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Scroll-triggered fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.step-card, .feature-tile, .pricing-card, .legal-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
