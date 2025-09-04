const CharCard = ({ charName, onClick, image }) => {
  return (
    <div
      onClick={onClick}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        margin: "2px",
      }}
    >
      <img
        src={image}
        alt={charName}
        style={{
          width: "160px",
          height: "220px",
          objectFit: "cover",
          borderRadius: "24px",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "2px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          color: "white",
          padding: "4px 8px",
          borderRadius: "2px",
          fontSize: "14px",
        }}
      >
        <h1>{charName}</h1>
      </div>
    </div>
  )
}

export default CharCard
