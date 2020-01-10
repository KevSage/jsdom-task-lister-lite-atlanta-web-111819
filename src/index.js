document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.getElementById('create-task-form') 
  const toDoList = document.getElementById('tasks')
  form.addEventListener('submit', function(event) {
     event.preventDefault();
     let li = document.createElement('li')
     let text = form.querySelector('#new-task-description').value
     let taskColor = form.querySelector('#priority').value
     li.textContent = text
     li.style.color = taskColor
     toDoList.appendChild(li)
     createDelete(li)

     
     console.log(li)
     form.reset()
      
  })
  
  
})

// Create a delete button
function createDelete(li) {
  // const toDos = document.querySelectorAll('li')
  // toDos.forEach(function(todo) {
     let span = document.createElement('span')
     span.style.color = 'red'
     li.appendChild(span)

     let close = document.createTextNode('     \u00D7')
     span.appendChild(close)

     span.addEventListener('click', function() {
       span.parentNode.remove()
    //  })
  })
}