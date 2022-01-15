import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Page from "./components/Page";


function App() {
  return (
      <BrowserRouter basename="/kof">
        <Routes>
          <Route path="/" element={<Page/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;