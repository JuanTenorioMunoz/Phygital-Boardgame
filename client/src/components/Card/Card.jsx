import './Card.css'

const Card = ({name, credits, desc}) => {
    return(
        <>
            <div className="territory-card">
                <h1 className="name">{name}</h1>
                <h2 className="desc">{desc}</h2>
                <h3 className="credits">Credits: {credits}</h3>
            </div>
        </>
    )
}

export default Card