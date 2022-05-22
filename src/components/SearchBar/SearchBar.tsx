import React from "react";
import "./SearchBar.css";

interface Props {
  onChange: (text: string | null) => void; // The function that the user will call to manipulate the input text
  timeout?: number; // Timeout for the debounce
}

const SearchBar: React.FC<Props> = ({ onChange, timeout = 400 }) => {
  let typeTimeout: NodeJS.Timeout;

  const onChangeText = (query: string | null) => {
    // Cancelling the previous `setTimeout` to set a new one above
    clearTimeout(typeTimeout);

    // Setting a timeout to do a debounced input state
    typeTimeout = setTimeout(() => {
      onChange(query);
    }, timeout);
  };

  return (
    <div>
      <input
        onChange={(e) => {
          // If the input has no value, null will be returned
          onChangeText(e.target.value || null);
        }}
        className="searchbar"
      />
    </div>
  );
};

export default SearchBar;
