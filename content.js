setTimeout(() => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const query = urlParams.get("q");

  if (query !== null) {
    const root = document.querySelectorAll("[data-id=root]");
    root[0].innerHTML = query;
    const button = root[0].parentElement.querySelector("button");
    button.removeAttribute("disabled");
    button.click();
  }
}, 500);
