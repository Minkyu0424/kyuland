import React, { useRef } from "react";

const NewTodo = () => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const eneteredText = textInputRef.current!.value;
    console.log(eneteredText);
    
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add ToDo</button>
    </form>
  );
};

export default NewTodo;
