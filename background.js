// Проверка URL через Google Safe Browsing
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    const phishingDomains = ["evil.com", "phishing-site.ru"]; // Можно подключить API
    const url = new URL(details.url);
    
    if (phishingDomains.some(domain => url.hostname.includes(domain))) {
      return { cancel: true }; // Блокировка опасного сайта
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);