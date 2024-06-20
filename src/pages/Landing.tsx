import React, {useEffect, useState } from 'react';
import Search from '../components/search-box';
import Suggestions from './suggestions-page';
import useAutoSuggestEffect from '../hooks/ useAutoSuggestEffect';

export interface AutosuggestionData {
  domain: string;
  logo: string;
  name: string;
}

const Landing: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    let val: (string| null)=localStorage.getItem('input-text');
    setQuery(val || "");
  }, [setQuery]);

  const queryResult = useAutoSuggestEffect(query);
  
  const inputChange=(value:string)=>{
     setQuery(value);
  }

  return (
    <div>
    <Search type="text" className="search-input" value={query}  inputChange={inputChange}/>

      <Suggestions queryResult={queryResult} />
    </div>
  );
};

export default Landing;
