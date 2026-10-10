import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.jsx'

// PASO 5: React monta el árbol de componentes en el nodo root durante
// la ejecución en el cliente. El HTML inicial contiene el contenedor vacío;
// los nodos de la interfaz se crean en el navegador (CSR), no vienen renderizados
// desde el servidor como ocurriría con SSR.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
