import { BrowserRouter } from 'react-router-dom';
import { RoutesSetup } from './routes';

export const Router = () => {
  return (
    <BrowserRouter>
      <RoutesSetup />
    </BrowserRouter>
  );
};
