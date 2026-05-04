const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create responsive login UI",
        taskDate: "2026-05-01",
        category: "UI/UX",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve mobile menu issue",
        taskDate: "2026-04-28",
        category: "Bug Fix",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Integrate user API",
        taskDate: "2026-04-30",
        category: "Backend",
      },
    ],
  },

  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Dashboard",
        taskDescription: "Create analytics dashboard",
        taskDate: "2026-05-02",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write Tests",
        taskDescription: "Unit testing for components",
        taskDate: "2026-04-29",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy App",
        taskDescription: "Deploy to production server",
        taskDate: "2026-04-27",
        category: "DevOps",
      },
    ],
  },

  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Optimize Images",
        taskDescription: "Reduce image sizes",
        taskDate: "2026-05-03",
        category: "Performance",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Refactor Code",
        taskDescription: "Improve code structure",
        taskDate: "2026-04-25",
        category: "Code Quality",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Add Dark Mode",
        taskDescription: "Implement theme switch",
        taskDate: "2026-04-26",
        category: "Feature",
      },
    ],
  },

  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Setup CI/CD",
        taskDescription: "Automate deployment",
        taskDate: "2026-05-04",
        category: "DevOps",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Login Error",
        taskDescription: "Resolve auth issue",
        taskDate: "2026-04-24",
        category: "Bug Fix",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Add Notifications",
        taskDescription: "Push notification system",
        taskDate: "2026-04-23",
        category: "Feature",
      },
    ],
  },

  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Profile Page",
        taskDescription: "User profile UI",
        taskDate: "2026-05-05",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Backup user data",
        taskDate: "2026-04-22",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Security Audit",
        taskDescription: "Check vulnerabilities",
        taskDate: "2026-04-21",
        category: "Security",
      },
    ],
  },
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  
  return { employees, admin }
};
