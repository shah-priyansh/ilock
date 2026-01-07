// Google Analytics utility functions
// Tracking ID: G-9BTYSRNP3G

/**
 * Track a page view in Google Analytics
 * @param {string} path - The page path (e.g., '/about')
 * @param {string} title - The page title (optional)
 */
export const trackPageView = (path, title) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', 'G-9BTYSRNP3G', {
      page_path: path,
      page_title: title || document.title,
    });
  }
};

/**
 * Track a custom event in Google Analytics
 * @param {string} action - The event action (e.g., 'click', 'submit')
 * @param {string} category - The event category (e.g., 'form', 'button')
 * @param {string} label - The event label (optional)
 * @param {number} value - The event value (optional)
 */
export const trackEvent = (action, category, label, value) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
