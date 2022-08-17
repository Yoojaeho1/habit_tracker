import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && props.onAdd(name);
    this.inputRef.current.value = "";
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="습관을 입력하세요."
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
