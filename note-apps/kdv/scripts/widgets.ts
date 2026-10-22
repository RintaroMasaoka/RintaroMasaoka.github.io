// Note-specific scientific widgets; shared reader behavior lives in src/scripts/study-note-reader.ts.
import { initKdvVisuals } from '../visuals/contours.js';
initKdvVisuals();
import { initDysonDomain } from '../visuals/dyson-domain.js';
initDysonDomain();
import { initTravelingSoliton } from '../visuals/soliton.js';
initTravelingSoliton();
import { initKdvSimulations } from '../visuals/simulation.js';
initKdvSimulations();
const imageDialog = document.getElementById('legacy-image-dialog') as HTMLDialogElement;
const expandedImage = document.getElementById('legacy-image-expanded') as HTMLImageElement;
const imageScroll = document.getElementById('legacy-image-scroll')!;
let imageZoom = 1;
const renderImageZoom = () => {
  expandedImage.style.width = `${Math.min(expandedImage.naturalWidth, imageScroll.clientWidth) * imageZoom}px`;
  document.getElementById('image-zoom-value')!.textContent = `${Math.round(imageZoom * 100)}%`;
  (document.getElementById('image-zoom-out') as HTMLButtonElement).disabled = imageZoom <= 1;
  (document.getElementById('image-zoom-in') as HTMLButtonElement).disabled = imageZoom >= 4;
};
document.querySelectorAll<HTMLImageElement>('#manuscript img[src^="/notes/KdV/images/"]').forEach(img => {
  const button = document.createElement('button');
  button.type = 'button'; button.className = 'legacy-image-button';
  button.setAttribute('aria-label', `Enlarge figure: ${img.alt}`); button.setAttribute('aria-haspopup', 'dialog');
  img.replaceWith(button); button.append(img);
  const label = document.createElement('span'); label.className = 'legacy-zoom-label'; label.textContent = 'Enlarge figure'; button.append(label);
  button.addEventListener('click', () => {
    imageZoom = 1; expandedImage.alt = img.alt; expandedImage.onload = renderImageZoom; expandedImage.src = img.getAttribute('src')!;
    imageDialog.showModal(); renderImageZoom(); imageScroll.scrollTo(0, 0);
  });
});
document.getElementById('image-viewer-close')!.addEventListener('click', () => imageDialog.close());
document.getElementById('image-zoom-in')!.addEventListener('click', () => { imageZoom = Math.min(4, imageZoom + .5); renderImageZoom(); });
document.getElementById('image-zoom-out')!.addEventListener('click', () => { imageZoom = Math.max(1, imageZoom - .5); renderImageZoom(); });
addEventListener('resize', () => { if (imageDialog.open) renderImageZoom(); });
