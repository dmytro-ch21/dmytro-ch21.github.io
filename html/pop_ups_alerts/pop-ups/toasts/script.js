const cookieBanner = document.getElementById("cookie-banner");
const acceptCookiesButton = document.getElementById("accept-cookies");
const expandableContent = document.querySelector(".countries-table");
const expandButton = document.querySelector(".expand-button");

acceptCookiesButton.addEventListener("click", () => {
  // Set a cookie to indicate acceptance (replace with your cookie setting logic)
  document.cookie = "cookiesAccepted=true; expires=365; path=/";
  cookieBanner.style.display = "none";
});

expandButton.addEventListener("click", () => {
  expandableContent.style.display = expandableContent.style.display === "none" ? "block" : "none";
  expandButton.textContent = expandableContent.style.display === "none" ? "Show Top 10 Countries by GDP" : "Hide List";
});

function showToast(message) {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;
    document.body.appendChild(toast);
  
    // Remove the toast after a few seconds
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 3000);
  }
  
  // Modify event listeners to show toast on accept/decline
  acceptCookiesButton.addEventListener("click", () => {
    document.cookie = "cookiesAccepted=true; expires=365; path=/";
    cookieBanner.style.display = "none";
    showToast("Cookies accepted!");
  });
  
  const declineCookiesButton = document.getElementById("decline-cookies");
  declineCookiesButton.addEventListener("click", () => {
    cookieBanner.style.display = "none";
    showToast("Cookies declined!");
  });