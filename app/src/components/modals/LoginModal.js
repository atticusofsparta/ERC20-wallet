import {useState} from 'react'
import {ethers} from 'ethers'
import LoadingSpinner from '../LoadingSpinner'


const LoginModal = ({setWallet, setLogin}) => {

    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    async function decrypt(){

       try { const json = window.localStorage.getItem("walletManager")
       setLoading(true)
        const encrypted = JSON.parse(json)
        const decrypted = await ethers.Wallet.fromEncryptedJson(encrypted, password)
        setWallet(decrypted)
        setLogin(false)
        } catch (error) {setLoading(false)
            alert("wrong password. If you cant remember your password and wish to restart, you can delete your wallet", <button onClick={()=>{window.localStorage.removeItem("walletManager")}}>Delete wallet</button>)}




    }

    return (

        <div className="modalBackground">
            <div className="modal">
                <h2 className="modalHeader">{loading ? "Loading" : "Login with your encryption password"}</h2>
                <div className="modalBody">
                    {loading ? <LoadingSpinner /> : <></>}
                   Password: <input className='modal-input' type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <button className="btn-big" onClick={()=>{decrypt()}}>Login</button>
                   
                </div>
    
    
            </div>
            </div>

    )
}

export default LoginModal;