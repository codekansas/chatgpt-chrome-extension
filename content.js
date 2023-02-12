setTimeout(() => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const query = urlParams.get("q");

  if (query !== null) {
    const root = document.querySelectorAll("[data-id=root]");
    root[0].value = query;
    root[0].parentElement.querySelector("button").click();
  }
}, 500);
