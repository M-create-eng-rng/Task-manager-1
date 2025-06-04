# 📝 Task Manager App
This is a simple Task Manager web application built using:
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
## 🚀 Features
- Add a new task
- View all tasks
- Responsive and clean design
- Built using MVC structure (models, routes, public)
task-manager-project/
├── models/ # Mongoose model (Task.js)
├── routes/ # Backend routes (taskRoutes.js)
├── public/ # Frontend files (index.html, styles.css, script.js)
├── server.js # Main Express server
├── package.json # Node dependencies
└── README.md # Project instructions
## 💻 How to Run This Project
git clone https://github.com/your-username/task-manager-project.git
cd task-manager-project
npm install
node server.js
http://localhost:3000


New Features to Added
1. User Authentication (Optional)
a. Add login/signup with JWT.
b. Protect task routes.
2. Task Prioritization
a. Add priority field: Low, Medium, High.
b. Filter/sort tasks by priority or due date.
3. Due Dates and Reminders
a. Add a due Date field in the Task schema.
b. Highlight overdue tasks in frontend.
4. Enhanced UI
a. Add animaƟons, beƩer forms, and task grouping using modern JS (or
a lightweight frontend framework like React later).
API Source: hƩps://api.quotable.io/random
Frontend (script.js):
In index.html

Step 1: Extend Task Model
Modify backend/models/Task.js to include:
 priority
 dueDate
File: backend/models/Task.js
Add priority and Due Date field

ඡ Step 2: Update Frontend Form
Edit frontend/index.html:
 Add form fields for priority and due-Date.
File: frontend/index.html
Add input fields for priority and due date.

Step 3: Modify Task Submission
Update submitTask() in frontend/script.js:
 Ensure the form data includes the new fields.
File: frontend/script.js
Update submitTask() to include priority and dueDate.

Step 4: Display Tasks with Priority & Due Date
Update loadTasks() to render the new fields clearly.
Update your loadTasks() funcƟon

Step 5: Add External API (MoƟvaƟonal Quotes)
Use the Quotable API:
 Fetch a quote via fetch('hƩps://api.quotable.io/random')
 Display it prominently on the homepage.
Use the Quotable API in the frontend.
HTML:

Step 6: Highlight Overdue Tasks
Update loadTasks() logic:
 Compare each task’s due date with the current date.
 Apply a CSS class for overdue tasks.
Modify loadTasks() to add a class for overdue tasks.




git remote add origin https://github.com/M-create-eng-rng/Taskmanager.git
git branch -M main
git push -u origin main