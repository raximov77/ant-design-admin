import { useContext } from 'react'
import './App.css'
import { Context } from './context/AuthContext'
import LoginRoutes from "./routes/LoginRoutes"
import DashboardRoutes from './routes/DashboardRoutes'

function App() {
  const {token} = useContext(Context)
    if(token){
      return <DashboardRoutes/>
    }
    else{
      return <LoginRoutes/>
    }
}

export default App
