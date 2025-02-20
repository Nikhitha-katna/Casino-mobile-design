import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import LiveCasino from './components/LiveCasino/Livecasino.jsx'
import Slot from './components/Slot/Slot.jsx'
import ServiceCenter from './components/ServiceCenter/ServiceCenter.jsx'
import Announcement from './components/Announcement/Announcement.jsx'
import Deposit from './components/Deposit/Deposit.jsx'
import Message from './components/Message/Message.jsx'
import Mypage from './components/Mypage/Mypage.jsx'
import { Navigate } from 'react-router-dom'


registerSW(); 



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
     
      <Route index element={<Navigate to="/livecasino" replace />} /> 
      
      <Route path="livecasino" element={<LiveCasino />} />
      <Route path="slot" element={<Slot />} />
      <Route path="service" element={<ServiceCenter />} />
      <Route path="announcement" element={<Announcement />} />
      <Route path="deposit" element={<Deposit />} />
      <Route path="message" element={<Message />} />
      <Route path="mypage" element={<Mypage />} />
    </Route>
  )
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}/>

  </StrictMode>,
)
