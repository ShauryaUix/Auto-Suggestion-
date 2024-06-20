import React from 'react';
import './suggestions-page.css';
import { AutosuggestionData } from './Landing';

const Suggestions: React.FC<{ queryResult: AutosuggestionData[] }> = ({ queryResult }) => {
  return (
    <div className="suggestions-wrapper">
      {queryResult &&
        queryResult.map((item, idx) => (
          <a key={idx} href={`http://${item.domain}`} className="content-wrapper" >
            <img src={item.logo} className="logo" />
            <div>{item.name}</div>
          </a>
        ))}
    </div>
  );
};

export default Suggestions;
