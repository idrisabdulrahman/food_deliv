import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from './provider/theme-provider'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'
import { AnimatePresence } from 'framer-motion'
import { createStore } from 'redux'
import xReducer from './contexts/reducers'
const store = createStore(
	xReducer,
	+(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider defaultTheme="system" storageKey="theme">
			<Router>
				<Provider store={store}>
					<AnimatePresence>
						<App />
					</AnimatePresence>
					<Toaster richColors position="top-right" closeButton />{' '}
				</Provider>
			</Router>
		</ThemeProvider>
	</React.StrictMode>
)
