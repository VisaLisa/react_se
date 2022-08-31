import * as Sentry from "@sentry/react";

function App() {
  return (
    <>
      <button
        type="button"
        onClick={() => {
          throw Error("Oops, something has gone wrong when button was clicked");
        }}
      >
        Do not click on this button
      </button>
    </>
  );
}

export default Sentry.withProfiler(App);
