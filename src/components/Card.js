const Card = ({ title, description }) => (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-red-500">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
  
  export default Card;
  