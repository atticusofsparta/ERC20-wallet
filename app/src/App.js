import {useEffect, useState} from 'react'
import ethers from 'ethers'
import {Route, Routes} from 'react-router-dom'

//pages and components
import Layout from './components/layout'
import Home from './components/pages/Home'
import Settings from './components/pages/Settings'
import Networks from './components/pages/Networks'
import AccountManager from './components/pages/AccountManager'
import TransactionHistory from './components/pages/TransactionHistory'
import OnboardingModal from './components/modals/OnboardingModal';
import LoginModal from './components/modals/LoginModal'


function App() {

  const [onboarded, setOnboarded] = useState(false)
  const [login, setLogin] = useState(false)
  
  const [wallet, setWallet] = useState()

  useEffect(()=>{
    if (window.localStorage.getItem("walletManager")){
      setOnboarded(true)
      setLogin(true)
    }
    else {
      setOnboarded(false)
    }
  },[])



  return (
    <div className="pagetainer">

    <Layout />
    {!onboarded ? <OnboardingModal /> : <></>}
    {login ? <LoginModal setWallet={setWallet} setLogin={setLogin}/> : <></>}

    <Routes>
      <Route path="*" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/settings" element={<Settings/>}/>
      <Route path="/networks" element={<Networks/>}/>
      <Route path="/accounts" element={<AccountManager/>}/>
      <Route path="/transaction-history" element={<TransactionHistory/>}/>
    </Routes>

     
    </div>
  );
}

export default App;
