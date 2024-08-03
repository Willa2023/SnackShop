import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = import.meta.env.VITE_AUTH0_DOMAIN!;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID!;

const redirect_uri =
  import.meta.env.MODE === 'production'
    ? 'https://snackshopfrontend.z8.web.core.windows.net'
    : 'http://localhost:5173';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    // domain="dev-nijlrh22g56eqnyv.us.auth0.com"
    // clientId="s5vlNO3JRT0uQPbh5fOMwDcoyW8OQJuG"
    authorizationParams={{
      redirect_uri: redirect_uri,
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
);
