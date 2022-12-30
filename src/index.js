import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MetricsProvider } from '@cabify/prom-react';
import prom from 'promjs';

// const registry = prom();
// const pageRequestCounter = registry.create(
//   'counter',
//   'page_requests',
//   'A counter for page requests'
// );

// pageRequestCounter.inc();
// console.log(registry.metrics());
// fetch('http://localhost:9090/metrics', {
//   method: 'post',
//   body: registry.metrics(),
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MetricsProvider
      appName="my-app-name"
      owner="my-team"
      // getNormalizedPath={normalizePath}
      metricsAggregatorUrl="http://localhost:9090/metrics"
    >
      <App />
    </MetricsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
