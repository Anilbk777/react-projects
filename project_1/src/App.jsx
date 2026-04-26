import Card from './component/Card';

function App() {

  const jobs = [
    {
      id: 1,
      image:
        "data:image/png;base64,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",
      company: "Amazon",
      posted: "5 days ago",
      type: "Part Time",
      level: "Senior Level",
      role: "Senior UI/UX Designer",
      salary: "$120/hr",
      location: "Mumbai, India",
    },
    {
      id: 2,
      image:
        "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg",
      company: "Google",
      posted: "2 days ago",
      type: "Full Time",
      level: "Mid Level",
      role: "Frontend Engineer",
      salary: "$150k/year",
      location: "Bangalore, India",
    },
    {
      id: 3,
      image:
        "https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen-1024x376.jpg",
      company: "Microsoft",
      posted: "1 week ago",
      type: "Full Time",
      level: "Senior Level",
      role: "Backend Developer",
      salary: "$140k/year",
      location: "Hyderabad, India",
    },
    {
      id: 4,
      image:
        "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
      company: "Netflix",
      posted: "3 days ago",
      type: "Contract",
      level: "Mid Level",
      role: "React Developer",
      salary: "$90/hr",
      location: "Remote",
    },
    {
      id: 5,
      image:
        "https://s3-alpha.figma.com/hub/file/5388452724/888ad143-5a02-49cc-8642-f94240b67589-cover.png",
      company: "Meta",
      posted: "6 days ago",
      type: "Full Time",
      level: "Senior Level",
      role: "Full Stack Engineer",
      salary: "$160k/year",
      location: "Delhi, India",
    },
  ];
  return (
    <>
      <div className="parent">
        {
          jobs.map((job) => {
            return (
              <Card
                key={job.id}
                image={job.image}
                company={job.company}
                posted={job.posted}
                type={job.type}
                level={job.level}
                role={job.role}
                salary={job.salary}
                location={job.location}
              />
            );
          })
        }
        
      </div>
    </>
  );
}

export default App
