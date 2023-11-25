/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import Router from './Router/Router.jsx';
import AuthProvider from './Login/Firebase/AuthProvider.jsx';
import {
  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <AuthProvider>

<RouterProvider router={Router} />

</AuthProvider>
    </QueryClientProvider>

    
  </React.StrictMode>,
)


