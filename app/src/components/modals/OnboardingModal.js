import { useState } from "react"
import {ethers} from 'ethers'
import Card from '../Card'



const OnboardingModal = ({onboarded, setOnboarded}) => {

    const [modalPage, setModalPage] = useState("onboard")
    const [password, setPassword] = useState("")
    const [wallet, setWallet] = useState("")
    const [mnemonic, setMnemonic] = useState("")



    const Onboard = ({modalPage, setModalPage}) => {



        return (
            <div className="modalBackground">
            <div className="modal">
                <h4 className="modalHeader">Welcome to the super-awesome-powerful wallet manager!</h4>
                <div className="modalBody">
                    First, set a password!
                    <button className="btn-big" onClick={()=>{setModalPage("password")}}>Create password</button>
                   
                </div>
    
    
            </div>
            </div>
            
        )
    }
    const SetPassword = ({modalPage, setModalPage, password, setPassword}) => {
    
        return (
            <div className="modalBackground">
            <div className="modal">
                <h4 className="modalHeader">Create a password</h4>
                <div className="modalBody">
                    <input className="modal-input" type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <button className="btn-big" onClick={()=>{setModalPage("import")}}>Set password</button>
                   
                </div>
    
    
            </div>
            </div>
            
        )
    }
    const Generate = ({modalPage, setModalPage, password, wallet, setWallet}) => {
    
        async function walletGen() {
            const newWallet = await ethers.Wallet.createRandom(32)
            setWallet(newWallet)
            
        }
    
        return (
            <div className="modalBackground">
            <div className="modal">
                <h4 className="modalHeader">Generate mnemonic phrase</h4>
                <div className="modalBody">
                    {wallet ? <Card headerContent={"Write this down and save your seed phrase!"} bodyContent={wallet.mnemonic.phrase}/> : ""}
                   
                    <button className="btn-big" onClick={()=>{walletGen()}}>Generate</button>
                   
                </div>
    
    
            </div>
            </div>
        )
    }
    const Import = ({modalPage, setModalPage, password, mnemonic, setMnemonic,wallet, setWallet}) => {
    
        
        async function createWallet() {
            const HDNode = await ethers.utils.HDNode.fromMnemonic(mnemonic)
            const newWallet = await new ethers.Wallet(HDNode)
            setWallet(newWallet)
    
        }
        async function encrypt() {
            
               const encrypted = await wallet.encrypt(password)
               const parsed = JSON.stringify(encrypted)
               window.localStorage.setItem("walletManager", parsed)
            
           
    }
    
        return (
            <div className="modalBackground">
            <div className="modal">
                <h4 className="modalHeader">Import a Wallet</h4>
                <div className="modalBody">
    
                    Enter your mnemonic phrase here.
    
                    {wallet ? <Card headerContent={"Wallet imported!"} bodyContent={<><h4 onClick={()=>{encrypt()}}>Your all done! Click here to encrypt your wallet!</h4></>} /> : <></>}
                    
                        <input className="modal-input" onChange={(e) => setMnemonic(e.target.value)} placeholder="mnemonic phrase" />
                    
                   
                    <button className="btn-big" onClick={()=>{createWallet()}}>Import</button>
                    <button className="btn-big" onClick={()=>{setModalPage("generate")}}>Dont have a wallet? Generate one here!</button>
                </div>
    
    
            </div>
            </div>
        )
    }

    return (<>   
         {modalPage === "onboard" ? <Onboard modalPage={modalPage} setModalPage={setModalPage}/> : <></>}
         {modalPage === "password" ? <SetPassword 
         modalPage={modalPage} 
         setModalPage={setModalPage} 
         password={password} 
         setPassword={setPassword}/> : <></>}
         {modalPage === "generate" ? <Generate 
         modalPage={modalPage} 
         setModalPage={setModalPage}
         password={password}
         wallet={wallet}
         setWallet={setWallet}/> : <></>}
         {modalPage === "import" ? <Import 
         modalPage={modalPage} 
         setModalPage={setModalPage}
         password={password}
         mnemonic={mnemonic}
         setMnemonic={setMnemonic}
         wallet={wallet}
         setWallet={setWallet}/> : <></>}
        
    </>

    )

}


export default OnboardingModal;