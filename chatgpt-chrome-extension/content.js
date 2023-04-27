const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const query = urlParams.get("q");

if (query !== null) {
  const interval = setInterval(() => {
    const root = document.querySelectorAll("[data-id=root]");
    if (root.length === 0) {
      return;
    }

    // Clear interval.
    clearInterval(interval);

    // Set query and click button.
    root[0].innerHTML = query;
    const button = root[0].parentElement.querySelector("button");
    button.removeAttribute("disabled");
    button.click();
  }, 250);
}
