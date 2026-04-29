const Card = ({ elem }) => {
  return (
    <div className="bg-white h-60 w-50 rounded overflow-y-auto mr-2 ">
      <div className="text-xl text-black p-4 border-b-2">{elem.heading}</div>

      <p className="text-black p-4">{elem.detail}</p>
    </div>
  );
};

export default Card;
