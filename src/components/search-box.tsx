import React, { ChangeEvent } from 'react';
import '../components/search-box.css';
import { CiSearch } from 'react-icons/ci';

interface InputProps {
  type: string;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  inputChange?:any
}

const Search: React.FC<InputProps> = ({ type, className, value, inputChange }) => {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    localStorage.setItem('input-text',newValue);
    inputChange(newValue);
  
    let params = new URLSearchParams(window.location.search);
    params.append('q', newValue);
    
    for (const [key, value] of params.entries()) {
      if (value.length === 0) {
        window.history.replaceState(null, '', '/');
      } else if (value.length >= 20) return;
      else {
        window.history.replaceState(null, '', `${key}=${value}`);
      }
    }
  };

  return (
    <div className="search-wrapper">
      <input type={type} className={className} onChange={handleInput} value={value} />
      <CiSearch size={30} className="search-icon" />
    </div>
  );
};

export default Search;
