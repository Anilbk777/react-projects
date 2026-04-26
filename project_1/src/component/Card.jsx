import { Bookmark } from "lucide-react";

function Card({ image,company, posted, type,level,role,salary,location}) {
  return (
    <>
      <div className="card">
        <div>
          <div className="top">
            <img
              src= {image}
              alt="amazon"
            />
            <button>
              save <Bookmark size={15} />
            </button>
          </div>
          <div className="center">
            <h3>
              {company} <span>{posted}</span>
            </h3>
            <h2>{role}</h2>
            <div className="tag">
              <h4>{type}</h4>
              <h4>{level}</h4>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{salary}</h3>
            <p>{location}</p>
          </div>
          <button>Apply now</button>
        </div>
      </div>
    </>
  );
}

export default Card;
