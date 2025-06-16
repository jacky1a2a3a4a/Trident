import { HashRouter } from 'react-router-dom';
import AppRoutes from 'src/routes';

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;
