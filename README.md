#Recruitment task

## Getting Started

To begin working with this project, you'll need to clone it from GitHub and install all necessary packages.

### Cloning the Repository

```bash
git clone https://github.com/adrianczesnowski/5faad7379315a035baab03e2d64f83c3.git

cd <repository_name>
```

### Installing Dependencies

To install the packages, run:

```bash
npm install
```

### Running the Project

```bash
npm run dev
```

The project will be available at [http://localhost:5173](http://localhost:5173).

### Running Tests

```bash
npm run test
```

## Project Structure

- `src/components`: Directory for React components used throughout the project.
- `src/context`: This is where the Context API logic used for state management is located.

### Some Files

- `ContextProvider.tsx`: Contains the Context API logic for state management.
- `FetchPost.tsx`: A component for fetching and displaying posts.
- `Post.tsx`: A post component.
- `Button.tsx`, `Loader.tsx`: Simple UI components.

## What I Would Do Differently

- **Structure Change**: Better division of the project into directories like `pages`, `components`, `views`, etc., to facilitate navigation and code management.
- **Styling**: Instead of plain CSS files, I would use SCSS Modules, styled-components, or Tailwind CSS for better style management and modularity.
- **State Management**: Replace Context API with a more advanced solution such as Redux to better manage state.
- **Data Fetching**: Use a library like React Query for handling asynchronous operations and managing the state of data fetched from APIs, which would simplify caching and state synchronization.
- **Types**: I would not use React.FC. I would improve types and interfaces. 
