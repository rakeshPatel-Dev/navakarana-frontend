import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TooltipProvider } from './components/ui/tooltip'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'
import { SidebarProvider } from './components/ui/sidebar'

createRoot(document.getElementById('root')).render(
  <div className="dark min-h-screen bg-background text-foreground">
    <SidebarProvider>
      <BrowserRouter>
        <TooltipProvider>
          <Toaster position='top-right' />
          <App />
        </TooltipProvider>
      </BrowserRouter>
    </SidebarProvider>
  </div>
)
