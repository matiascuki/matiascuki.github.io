import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage'
import Rankings from 'pages/Rankings/Rankings';
import Layout from 'components/Layout/Layout';

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
