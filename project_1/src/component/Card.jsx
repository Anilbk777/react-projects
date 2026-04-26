import { Bookmark } from "lucide-react";

function Card() {
  return (
    <>
      <div className="card">
        <div>
          <div className="top">
            <img
              src="data:image/png;base64,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"
              alt="amazon"
            />
            <button>
              save <Bookmark size={15} />
            </button>
          </div>
          <div className="center">
            <h3>
              Amazon <span>5 days ago</span>
            </h3>
            <h2>Senior UI/UX Designer</h2>
            <div className="tag">
              <h4>Part Time</h4>
              <h4>Senior Level</h4>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai, India</p>
          </div>
          <button>Apply now</button>
        </div>
      </div>
    </>
  );
}

export default Card;
