import React from "react";
import ReactDOM from "react-dom/client";
// import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Sentry
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { Integrations as TracingIntegrations } from "@sentry/tracing";

const history = createBrowserHistory();
// Performance
Sentry.init({
  dsn: "https://8d39ffa7104b4750b2fbe5a6a81c20f7@o1385005.ingest.sentry.io/6704091",
  // Automatic Instrumentation for monitoring the performance of browser application

  integrations: [
    new BrowserTracing({
      tracingOrigins: [
        "localhost",
        "cat-fact.herokuapp.com/facts/random",
        /^\//,
      ],

      // Can also use reactRouterV3Instrumentation or reactRouterV4Instrumentation
      routingInstrumentation: Sentry.reactRouterV5Instrumentation(history),

      integrations: [new TracingIntegrations.BrowserTracing()],
    }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
