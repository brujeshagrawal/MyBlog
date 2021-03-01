import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Blog from './containers/Blog/Blog';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Blog />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
