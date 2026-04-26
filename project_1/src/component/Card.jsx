const Card = ({userName,age, Image}) => {
  return (
    <>
      <div className="card">
        <img
          src={Image}
          alt="Earth"
        />
              <h3>{userName}, {age}</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <button>view profile</button>
      </div>
    </>
  );
};

export default Card;
