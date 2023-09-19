import ReactGA from 'react-ga';

const TRACKING_ID = "G-5L44Z6WE8W"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(TRACKING_ID);

export const trackPage = (page) => {
   ReactGA.set({ page });
   ReactGA.pageview(page);
};
