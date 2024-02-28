import {ContextProvider} from "./context/ContextProvider.tsx";
import FetchPost from "./components/FetchPost/FetchPost.tsx";

function App() {

  return (
    <ContextProvider>
        <FetchPost />
    </ContextProvider>
  )
}

export default App
