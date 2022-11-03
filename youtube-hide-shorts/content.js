addMutationObserver();

function addMutationObserver() {
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        mutation.target.querySelectorAll("#items").forEach(handleElement);
      });
    });
    observer.observe(document.body, { subtree: true, childList: true });      
}

function handleElement(e) {
  e.childNodes.forEach((child) => {
    let anchor = child.querySelector("#thumbnail");
    if (anchor && (anchor.getAttribute('href') || '').startsWith("/shorts")) {
        child.remove();
    }
  });
}