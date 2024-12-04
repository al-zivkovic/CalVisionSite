const FeaturesCard = ({ title, description, image }) => {
    return (
      <div className="container">
        <div className="wrapper">
          <div className="banner-image"> </div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm">{description}</p>
          </div>
      </div>
    )
}

export default FeaturesCard;

