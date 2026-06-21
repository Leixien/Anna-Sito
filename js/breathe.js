(function () {
  var cue = document.getElementById('breathCue');
  if (!cue) return;

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    cue.textContent = 'Respira con calma';
    return;
  }

  function loop() {
    cue.textContent = 'Inspira';
    setTimeout(function () {
      cue.textContent = 'Espira';
      setTimeout(loop, 6000);
    }, 4000);
  }

  loop();
})();
