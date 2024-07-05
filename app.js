async function loadTodos() {
  try {
   
    const response = await fetch("/data.json");
    if (!response.ok) {
      throw new Error('Loading error' + response.statusText);
    }
    const todos = await response.json();
    
    const fragment = document.createDocumentFragment();
    

    for (let i = 0; i < todos.results.length; i++) {
      console.log(todos.results[i].title);
      
    
      const row = document.createElement("tr");
      const column1 = document.createElement("td");
      column1.textContent = todos.results[i].title;
      const column2 = document.createElement("td");
      column2.textContent = todos.results[i].priority;
      const column3 = document.createElement("td");
      column3.textContent = todos.results[i].isDone;
      
    
      row.appendChild(column1);
      row.appendChild(column2);
      row.appendChild(column3);
      
    
      fragment.appendChild(row);
    }
    
   
    document.getElementById("table-container").appendChild(fragment);
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
}


loadTodos();
