(function () {
    var modal    = document.getElementById('galleryModal');
    if (!modal) return;
    var backdrop = modal.querySelector('.gallery-modal-backdrop');
    var closeBtn = document.getElementById('modalClose');
    var modalImg  = document.getElementById('modalImg');
    var modalTitle = document.getElementById('modalTitle');
    var modalDesc  = document.getElementById('modalDesc');
    var modalDate  = document.getElementById('modalDate');
  
    document.querySelectorAll('.gallery-item').forEach(function (item) {
      item.addEventListener('click', function () {
        var img = item.querySelector('img');
        modalImg.src  = item.dataset.img   || img.src;
        modalImg.alt  = item.dataset.title || img.alt;
        modalTitle.textContent = item.dataset.title || '';
        modalDesc.textContent  = item.dataset.desc  || '';
        modalDate.textContent  = item.dataset.date  || '';
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        document.querySelectorAll('.rope-item').forEach(function (r) {
          r.style.animationPlayState = 'paused';
        });
      });
    });
  
    function close() {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      document.querySelectorAll('.rope-item').forEach(function (r) {
        r.style.animationPlayState = 'running';
      });
    }
  
    closeBtn.addEventListener('click', close);
    backdrop.addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) close();
    });
  })();