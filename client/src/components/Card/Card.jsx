import './Card.css'

const Card = ({name, credits}) => {
    return(
        <>
            <div className="territory-card">
                <h1 className="name">{name}</h1>
                <h3 className="credits">Credits: {credits}</h3>
            </div>
        </>
    )
}

export default Card