const Tour = ({ name, info, image, price }) => {
  return (
    <div>
      <img src={image} alt="" />
      <h4>{name}</h4>
      <p>{info}</p>
      <button type="button">Not Interested</button>
      <p>$ {price}</p>
    </div>
  );
};

export default Tour;
