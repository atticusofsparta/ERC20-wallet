const Card = ({headerContent, bodyContent}) => {

    return (
        <div className="card">
        <h4 className="cardHeader">{headerContent || "No Header Content Set"}</h4>
        <div className="cardContent">
            {bodyContent || "No Body Content Set"}
            </div>
    </div>
    )
}

export default Card