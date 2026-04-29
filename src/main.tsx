import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StoreProvider } from './providers/store.tsx'
import { I18nextProvider } from 'react-i18next'
import i18n from './lib/i18n.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </StoreProvider>
  </StrictMode>,
)
