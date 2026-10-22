import type { PreviewEntry, PreviewIndex } from '../utils/study-note/types';

/** All reader controls live here. Note-local scripts may initialize figures only. */
const root = document.documentElement;
const manuscript = document.getElementById('manuscript');
if (root.hasAttribute('data-study-note-reader') && manuscript) {
  const noteId = root.dataset.noteId!;
  const shell = document.querySelector<HTMLElement>('[data-reader-shell]')!;
  const nav = document.getElementById('chapter-index')!;
  const menu = document.getElementById('reader-menu')!;
  const main = document.getElementById('main')!;
  const backdrop = document.querySelector<HTMLButtonElement>('.screen-backdrop')!;
  const mobile = matchMedia('(max-width: 800px)');
  let desktopOpen = true;
  let menuOpen = false;
  const updateMenu = () => {
    const open = mobile.matches ? menuOpen : desktopOpen;
    nav.hidden = !open;
    nav.classList.toggle('is-open', mobile.matches && open);
    shell.classList.toggle('nav-collapsed', !open || mobile.matches);
    backdrop.hidden = !mobile.matches || !open;
    main.inert = mobile.matches && open;
    menu.setAttribute('aria-expanded', String(open));
  };
  menu.addEventListener('click', () => { if (mobile.matches) menuOpen = !menuOpen; else desktopOpen = !desktopOpen; updateMenu(); if (mobile.matches && menuOpen) nav.querySelector<HTMLElement>('button,a')?.focus(); });
  const closeMenu = (restore = false) => { menuOpen = false; updateMenu(); if (restore) menu.focus(); };
  document.querySelectorAll('[data-menu-close]').forEach(button => button.addEventListener('click', () => closeMenu(true)));
  nav.addEventListener('click', event => { if ((event.target as Element).closest('a')) closeMenu(); });
  mobile.addEventListener('change', () => { menuOpen = false; updateMenu(); }); updateMenu();
  document.getElementById('theme-button')?.addEventListener('click', () => {
    const dark = root.dataset.theme !== 'dark';
    root.dataset.theme = dark ? 'dark' : 'light'; root.classList.toggle('dark', dark);
    try { localStorage.setItem(noteId + '.theme', dark ? 'dark' : 'light'); } catch {}
    dispatchEvent(new CustomEvent('study-note:theme', { detail: { dark } }));
  });
  for (const [selector, open] of [['[data-details-open]',true],['[data-details-close]',false]] as const) {
    document.querySelector(selector)?.addEventListener('click',() => manuscript.querySelectorAll<HTMLDetailsElement>('details').forEach(details => details.open = open));
  }
  const preview = document.getElementById('reader-preview')!;
  const previewBody = preview.querySelector<HTMLElement>('[data-preview-body]')!;
  const previewTitle = preview.querySelector<HTMLElement>('[data-preview-title]')!;
  const origin = preview.querySelector<HTMLAnchorElement>('[data-preview-origin]')!;
  const closeButton = preview.querySelector<HTMLButtonElement>('[data-preview-close]')!;
  const data = JSON.parse(document.getElementById('reader-preview-data')?.textContent || '{}') as {previews?:PreviewIndex; referenceIndex?:PreviewIndex; equationIndex?:PreviewIndex};
  const indexes = {...data.referenceIndex, ...data.equationIndex, ...data.previews};
  let pinned = false;
  let anchor: HTMLElement | null = null;
  let closeTimer: ReturnType<typeof setTimeout>;
  const closePreview = (restore = false) => { clearTimeout(closeTimer); preview.hidden = true; pinned = false; anchor?.setAttribute('aria-expanded','false'); if (restore) anchor?.focus(); };
  const cleanClone = (element: Element) => { const clone = element.cloneNode(true) as HTMLElement; clone.removeAttribute('id'); clone.querySelectorAll('[id]').forEach(node => node.removeAttribute('id')); clone.querySelectorAll('button[data-note-preview],button.equation-reference').forEach(node => node.replaceWith(document.createTextNode(node.textContent || ''))); return clone.innerHTML; };
  const resolve = (button: HTMLElement): PreviewEntry | undefined => {
    const key = button.dataset.notePreview || button.dataset.referenceKey;
    if (key && indexes[key]) return typeof indexes[key] === 'string' ? {html: indexes[key] as string} : indexes[key] as PreviewEntry;
    if (button.dataset.previewHtml) return {html:button.dataset.previewHtml, title:button.dataset.previewTitle};
    const target = key ? document.getElementById(`eq-${key}`) : null;
    if (target) return {html:cleanClone(target), title: 'Equation', href:`#${target.id}`};
  };
  const showPreview = (button: HTMLElement, pin: boolean) => {
    clearTimeout(closeTimer);
    if (pinned && !pin) return;
    if (pinned && anchor === button && pin) { closePreview(); return; }
    const entry = resolve(button); if (!entry) return;
    anchor?.setAttribute('aria-expanded', 'false'); anchor = button; pinned = pin;
    previewBody.innerHTML = entry.html;
    previewBody.querySelectorAll('[id]').forEach(node => node.removeAttribute('id'));
    previewTitle.textContent = entry.title || ('Supplement');
    origin.hidden = !entry.href; if (entry.href) origin.href = entry.href;
    preview.hidden = false; preview.classList.toggle('is-supplement', button.classList.contains('math-supplement-trigger'));
    button.setAttribute('aria-expanded','true'); button.setAttribute('aria-controls','reader-preview');
    const rect = button.getBoundingClientRect();
    preview.style.left = `${Math.max(12, Math.min(rect.left, innerWidth-preview.offsetWidth-12))}px`;
    preview.style.top = `${Math.max(72, Math.min(rect.bottom+8,innerHeight-preview.offsetHeight-12))}px`;
  };
  // Imported archive references retain their visible number and gain the same preview control.
  const equationNumbers = new Map<string, string>();
  manuscript.querySelectorAll<HTMLElement>('.katex-display[id], .referenced-equation[id]').forEach(equation => {
    const key = equation.id.replace(/^eq-/, '');
    const tag = equation.querySelector('.tag')?.textContent?.replace(/[()]/g, '').trim();
    const number = equation.dataset.equationNumber || tag;
    if (number) equationNumbers.set(number, key);
  });
  const walker = document.createTreeWalker(manuscript, NodeFilter.SHOW_TEXT, {acceptNode(node) {
    return node.parentElement?.closest('a,button,code,pre,svg,script,style,.katex,summary,h1,h2,h3,h4') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
  }});
  const textNodes: Text[] = []; let textNode;
  while ((textNode = walker.nextNode())) textNodes.push(textNode as Text);
  for (const text of textNodes) {
    const fragment = document.createDocumentFragment(); let offset = 0;
    for (const match of text.data.matchAll(/\((\d+(?:\.\d+)?[a-z]?)\)/g)) {
      const key = equationNumbers.get(match[1]); if (!key) continue;
      fragment.append(text.data.slice(offset,match.index));
      const button = document.createElement('button'); button.type = 'button'; button.className = 'equation-reference'; button.dataset.referenceKey = key; button.textContent = match[0];
      button.setAttribute('aria-label', `Preview equation ${match[1]}`);
      fragment.append(button); offset = match.index! + match[0].length;
    }
    if (offset) {fragment.append(text.data.slice(offset)); text.replaceWith(fragment);}
  }
  const triggers = '[data-note-preview], .equation-reference[data-reference-key], [data-preview-html]';
  manuscript.querySelectorAll<HTMLElement>(triggers).forEach(button => {
    button.setAttribute('aria-haspopup','dialog'); button.setAttribute('aria-expanded','false'); button.setAttribute('aria-controls','reader-preview');
    button.addEventListener('mouseenter', () => showPreview(button,false));
    button.addEventListener('mouseleave', () => { closeTimer = setTimeout(() => { if (!pinned && !preview.matches(':hover')) closePreview(); },120); });
    button.addEventListener('focus', () => showPreview(button,false));
    button.addEventListener('click', event => { event.preventDefault(); showPreview(button,true); });
    button.addEventListener('keydown', event => { if (event.key === 'Tab' && pinned && !event.shiftKey) { event.preventDefault(); closeButton.focus(); } });
  });
  preview.addEventListener('mouseenter', () => clearTimeout(closeTimer));
  preview.addEventListener('mouseleave', () => { if (!pinned) closePreview(); });
  closeButton.addEventListener('click', () => closePreview(true)); origin.addEventListener('click', () => closePreview());
  document.addEventListener('click', event => { const target = event.target as Element; if (!preview.contains(target) && !target.closest(triggers)) closePreview(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') { if (!preview.hidden) closePreview(true); else if (menuOpen) closeMenu(true); }
    if (event.key === 'Tab' && mobile.matches && menuOpen) {
      const items = Array.from(nav.querySelectorAll<HTMLElement>('a,button')).filter(el => !el.hidden);
      const first = items[0], last = items.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }
  });
  const reveal = () => {
    if (!location.hash) return;
    let id; try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    const target = document.getElementById(id);
    if (target instanceof HTMLDetailsElement) target.open = true;
    for (let parent = target?.parentElement; parent; parent = parent.parentElement) if (parent instanceof HTMLDetailsElement) parent.open = true;
    target?.scrollIntoView();
  };
  addEventListener('hashchange',reveal); reveal();
  document.addEventListener('click',event => {
    if (event.button || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = (event.target as Element).closest<HTMLAnchorElement>('a[href]');
    if (link && link.pathname === location.pathname && link.hash && link.hash === location.hash) reveal();
  });
  const progress = () => { const available = root.scrollHeight-innerHeight; document.getElementById('reading-progress')!.style.width = `${available>0 ? Math.min(100,100*scrollY/available) : 0}%`; };
  addEventListener('scroll', progress, {passive:true}); addEventListener('resize',() => { closePreview(); progress(); }); document.addEventListener('toggle',progress,true); progress();
  new ResizeObserver(progress).observe(manuscript);
  const observer = new IntersectionObserver(entries => { for (const entry of entries) if (entry.isIntersecting) nav.querySelectorAll<HTMLAnchorElement>('.subsection-list a').forEach(link => { if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current','location'); else link.removeAttribute('aria-current'); }); },{rootMargin:'-15% 0px -65% 0px'});
  manuscript.querySelectorAll('h2[id],h3[id]').forEach(heading => observer.observe(heading));
}
