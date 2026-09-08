const form = document.getElementById("searchForm");
const input = document.getElementById("songInput");
const status = document.getElementById("status");
const webFallback = document.getElementById("webFallback");

function getSearchUrls(query) {
  const encoded = encodeURIComponent(query.trim());

  return {
    app: `spotify:search:${encoded}`,
    web: `https://open.spotify.com/search/${encoded}`
  };
}

function updateFallback(query) {
  const value = query.trim();

  if (!value) {
    webFallback.href = "https://open.spotify.com/search";
    return;
  }

  webFallback.href = getSearchUrls(value).web;
}

input.addEventListener("input", () => {
  updateFallback(input.value);
  status.textContent = "";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) {
    input.focus();
    status.textContent = "Bitte gib zuerst einen Song oder Künstler ein.";
    return;
  }

  const urls = getSearchUrls(query);

  webFallback.href = urls.web;
  status.textContent = "Spotify wird geöffnet …";

  // Versucht, die installierte Spotify-App über das spotify:-URI-Schema zu öffnen.
  window.location.href = urls.app;
});

updateFallback("");
