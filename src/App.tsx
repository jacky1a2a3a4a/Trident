import { BrowserRouter } from 'react-router-dom';
import AppRoutes from 'src/routes';

function App() {
  return (
    <BrowserRouter basename="/Trident">
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
