function showBanner(message, type = "info", duration = 3000) {
    const banner = document.getElementById("banner");
    if (!banner) return;

    banner.textContent = message;
    banner.classList.remove("hidden", "error", "info");
    banner.classList.add(type);

    clearTimeout(banner._timeout);
    banner._timeout = setTimeout(() => {
        banner.classList.add("hidden");
    }, duration);
}
