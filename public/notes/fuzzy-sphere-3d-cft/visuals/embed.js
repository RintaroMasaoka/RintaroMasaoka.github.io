(() => {
  const frames = document.querySelectorAll('iframe[data-fuzzy-visual]');
  frames.forEach(frame => {
    function resize() {
      try {
        const main=frame.contentDocument.querySelector('main');
        if(main) frame.style.height=Math.ceil(main.getBoundingClientRect().height+6)+'px';
      } catch { /* A failed load keeps the authored fallback height. */ }
    }
    function observe() {
      try {
        const main=frame.contentDocument.querySelector('main');
        if(!main)return;
        new ResizeObserver(resize).observe(main);
        frame.contentDocument.fonts.ready.then(resize);
        resize();
      } catch { /* A failed load keeps the authored fallback height. */ }
    }
    frame.addEventListener('load',observe);
    if(frame.contentDocument?.readyState==='complete')observe();
  });
})();
