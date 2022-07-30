import Card from '../Card'



const Home =()=>{

    return (

        <div className="page">
            <h1 className="pageHeader">Home</h1>

            <div className="cardArea">

            <Card headerContent={"My custom header"} bodyContent={"Something"}/>
           

                


            </div>

        </div>
    )

}

export default Home;