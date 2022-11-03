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
    if (child) {
      const anchor = child.querySelectorAll("#thumbnail");

      if (anchor) {
        let del = false;
        anchor.forEach((a) => {
          if (a.getAttribute('href').startsWith("/shorts")) {
            del = true;
          }
        });

        if (del) {
          child.remove();
        }
      }
    }
  });
}
