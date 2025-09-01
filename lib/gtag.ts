export const GA_TRACKING_ID = process.env.GA_TRACKING_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  // @ts-expect-error gtag設置のため
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: { action: string, category: string, label: string, value: string }) => {
  // @ts-expect-error　gtag設置のため
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
