Lara Taneeb

For our website, there would be three main components: the list of todos, the "add todo" bar, and the search bar.

In the list of todos component, we would have a subcomponent that is an unordered list. This would use the tags <ul> and <li>. Inside of this unordered list, we would have another subcomponent that is the delete button. This would use the tag <button> and it would be repeated with each element of the list. This list of todos would communicate with a prop that is an array of objects, each containing a string with the name of the todo and an id. The list of todos would take information from the array in order to determine what to display. You would use the map function to display the array. It would also be able to edit information inside the array when the delete button is clicked.

In the "add todo" bar, we would have a subcomponent that is a text field. This would use the tag <input>. We would have another subcomponent that is the add button. This would use the tag <button>. The "add todo" bar would communicate with the same array of objects. It would be able to update the information in the array when you click the add button by adding new todos.

In the search bar, we would have a subcomponent that is a text field. This would use the tag <input>. The search bar would communicate with the same array of objects. It would be able to access the array and search through the elements of the array. This would probably use the filter function to sort through the array. This would be passed to the list of todos to be diplayed.