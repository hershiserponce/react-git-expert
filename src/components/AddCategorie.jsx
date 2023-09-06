import { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategorie = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    // setCategorie(categories=>[inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };
  return (
    <>
      <form onSubmit={onSubmit} aria-label='form'>
        <input
          type="text"
          placeholder="Buscar Gif"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </>
  );
};



AddCategorie.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}