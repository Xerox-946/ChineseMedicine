// patches/dom-monitor.js
const originalAddEventListener = EventTarget.prototype.addEventListener;

EventTarget.prototype.addEventListener = function (type, listener, options) {
  if (type === 'DOMNodeInserted') {
    // 替换为 MutationObserver
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          listener({ type: 'DOMNodeInserted', target: mutation.target });
        }
      });
    });
    observer.observe(this, { childList: true, subtree: true });
    return;
  }
  originalAddEventListener.call(this, type, listener, options);
};

export default defineNuxtPlugin((nuxtApp) => {
})