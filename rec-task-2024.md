Develop a React component that includes a button and a display area below it. The button, when clicked, should initiate a request to a public API that includes a random element in the request URL, such as a userId or similar parameter, to fetch unique data on each request. This randomness ensures that the response varies with each button click, simulating a real-world scenario where different data is retrieved in each call.

The button should display the text "Fetch Data" initially. When the data fetching process begins, replace the button's content with a loading spinner, signaling to the user that the data is being retrieved. Once the fetching process is complete, revert the button's text to "Fetch Data," and display the retrieved data in the area below the button. A 2-second delay should be implemented before showing the fetched data to simulate network latency.

Error handling is not a requirement for this task. However, it is essential that the user can click the button multiple times, with only the latest response being displayed in the designated area below the button.

The use of third-party libraries for fetching data or state management is prohibited. Rely on the native fetch API for data fetching and React's built-in state management features.

Center the button and the display area on the page, and apply your preferred styling to these elements. Ensure that there is a subtle animation or visual indicator when the button transitions to and from the loading state.

This project should be developed using React.js and set up with Vite. The use of TypeScript and writing tests for your component with Vitest or Jest is optional.

Host the project in a public GitHub repository, named with a random MD5 hash generated from an online tool. Include a README.md in English, providing clear instructions for setting up and running the project locally, along with any other pertinent information.

Ensure the project is compatible with computers running the latest LTS version of Node.js.