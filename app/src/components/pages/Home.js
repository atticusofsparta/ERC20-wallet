import Card from '../Card'



const Home =()=>{

    return (

        <div className="page">
            <h1 className="pageHeader">Home</h1>

            <div className="cardArea">

            <Card headerContent={"Recent Transactions"} bodyContent={"Transactions here"}/>
            <Card headerContent={"Balances"} bodyContent={"tokens here"}/>
            <Card headerContent={"Mail"} bodyContent={"Messages here"}/>
            
           

                


            </div>

        </div>
    )

}

export default Home;