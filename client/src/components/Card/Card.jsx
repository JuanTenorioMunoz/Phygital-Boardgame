const Card = ({name, credits, desc}) => {
    return(
        <>
            <div className="card">
                <h1 className="name">{name}</h1>
                <h2 className="desc">{desc}</h2>
                <h3 className="credits">Credits: {credits}</h3>
            </div>
        </>
    )
}

export default Card