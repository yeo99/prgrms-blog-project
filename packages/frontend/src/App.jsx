import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import Home from './pages/Home';
// import GlobalStyle from './style/GlobalStyle';
import MainPage from './pages/MainPage';

const queryClient = new QueryClient();

function App() {
  return (
    // <div>
    //   <GlobalStyle />
    //   <Home />
    // </div>
    <QueryClientProvider client={queryClient}>
      <MainPage></MainPage>
    </QueryClientProvider>
  );
}

export default App;
