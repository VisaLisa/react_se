# React Project with Sentry integration
- Link to Github repository: https://github.com/VisaLisa/react_se
- email used for registration: visakhalisajiam@gmail.com

End result looks like this: 
![SE React App](https://github.com/VisaLisa/react_se/blob/master/assets/Lisa%20-%20SE%20React%20App%20.png)


## 1.1 Sentry Error Monitoring for React
Prompt: Send a sample React project with Sentry integrated - a React app with a button that triggers an error will suffice.

###Step for recreation:
1. Create new React App
2. Navigate to https://docs.sentry.io/platforms/javascript/guides/react/ for instructions
3. Install Sentry SDK 
4. Configure index.js with traceSampler
5. Add an intentional error button to page; Configure in app.js
6. Verify - click button and check if error appears in Browser's Inspect > Network 
   1. Find sentry_key... and check for status code: 200
   2. Console will show "Uncaught Error: Oops, something has gone wrong when button was clicked" 
7. Verify - head over to Sentry account > dashboard > Issues > Find

Attached are screenshots of completed 1.1 Sentry Error Monitoring for React task

![React App with Sentry](https://github.com/VisaLisa/react_se/blob/master/assets/Sentry%201.1%20-%20React_Network.png)

![Error Dashboard](https://github.com/VisaLisa/react_se/blob/master/assets/Sentry%201.1%20-%20Error%20dashboard.png)

![Breadcrumb](https://github.com/VisaLisa/react_se/blob/master/assets/Sentry%201.1%20-%20Breadcrumb.png)


## 1.2 Sentry Performance Monitoring for React

Prompt: 
1. Has at least 2 pages/navigation routes to demonstrate auto instrumentation of page loads as transaction events

Steps to recreate
   1. Add components/Navbar folder and pages folder
   2. Create index.js, navbarelements.js, about.js, blogs.js, contact.js, index.js, signup.js
   3. Edit app.js to include new routes
   4. edit index.js to include Integrations
![Performance (Auto Instrumentation)](https://github.com/VisaLisa/react_se/blob/master/assets/Sentry%201.2%20-%20Performance%20(Auto%20Instrumentation).png)



2. Makes use of the React Profiler integration to instrument spans for UI Component render durations

Steps to recreate
   1. View Performance > Transaction Summary > Event Details
![Event Details](https://github.com/VisaLisa/react_se/blob/master/assets/Sentry%201.2%20-%20Event%20Details.png)



3. Makes an API call - the SDK automatically captures API requests made via XHR or fetch and instruments spans to measure the request duration (see docs).
     ● No need to display any response data
     ● You can use any public API for that call. For instance Catfacts
Steps to recreate
     1. Create CatFacts.js
     2. Add cat-fact.herokuapp.com/facts/random to Tracing Origin
     3. Add CatFact to app.js
![CatFact](https://github.com/VisaLisa/react_se/blob/master/assets/Sentry%201.2%20-%20CatFacts.png)
    