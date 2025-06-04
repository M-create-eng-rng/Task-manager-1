const form = document.getElementById('taskForm');
const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');





// Load tasks from the server
async function loadTasks() {
  const response = await fetch('/tasks');
  const tasks = await response.json();

  const taskList = document.getElementById( 'tasklist');
  taskList.innerHTML = ' ':

  tasks.foreach( task =>  {
    const taskItem = document.createElement( 'div' );
    taskItem.innerHTML=
    <strong>${task.description}</strong>
    <span>priority: ${task.priority}</span>
    <span>due: ${task.dueDate? new Date( task.dueDate) . toLocaleDateString()  : 'N/A'}</span>;
    taskList.appendChild(taskItem);

    
  });}



// Handle form submit
form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent page reload











document.getElementById( 'taskform' ).addEventListener( 'submit', async (e) => { e.preventDefault();

  const description= document.getElementById('description').value;
  const priority = document.getElementById ( 'priority').value;
  const dueDate = document.getElementById ('dueDate').value;

  const res = await fetch('http://localhost:5000/tasks',{
    method: 'Post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description,priority,dueDate }) });

    if (res.ok){loadTasks(document.getElementById ( 'taskform' ).reset();}});




async function getQuote() {

  const response = await fetch( 'https://api.quotable.io/random');
  const data = await response.json();
  document.getElementById('quote').innerText =' "${data.content}"- ${data.author}';}

   getQuote();
  
}






























































  const title = input.value.trim();

  if (title) {
    await fetch('/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    });

    input.value = ''; // Clear input
    loadTasks();      // Refresh task list
  }
});

// Load tasks when the page starts
loadTasks();


document.getElementById('taskForm'). addEventListener( 'submit' ,  async (e) =>  { e.preventDefault ();

  
  const description = document.getElementById('description').value;
  const priority = document.getElementById('priority').value;
  const dueDate = document.getElementById('dueDate').value;

  const res = await fetch( 'http://localhost:5000/task' ,{
    method:  'POST' ,
    headers: {'Content - Type': 'application/json'},
    body: JSON . stringify({ description, priority, dueDate })
  });
    

    if (res.ok)  {loadTasks(); Document.getElementById(taskform) .reset();}
});

