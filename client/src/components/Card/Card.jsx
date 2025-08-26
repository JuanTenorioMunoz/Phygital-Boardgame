const Card = ({name, type, desc}) => {
    return(
        <>
            <div className="card">
                <h1 className="name">{name}</h1>
                <h2 className="desc">{desc}</h2>
            </div>
        </>
    )
}

export default Card