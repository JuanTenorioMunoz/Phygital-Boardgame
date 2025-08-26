
const DecreeCard = ({decreeName, type, desc}) => {
    return(
        <>
            <div className="decree-card">
                <h1 className="decree-name">{decreeName}</h1>
                <h2 className="decree-desc">{desc}</h2>
            </div>
        </>
    )
}

export default DecreeCard