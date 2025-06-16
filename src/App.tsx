import { BrowserRouter } from 'react-router-dom';
import AppRoutes from 'src/routes';

function App() {
  return (
    <BrowserRouter basename="/trident">
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
