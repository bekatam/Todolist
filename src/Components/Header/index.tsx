import React, { useState, useEffect, memo } from 'react';
import './Header.css';
import LoopIcon from '@mui/icons-material/Loop';

export const Header:React.FC = memo(() => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const getQuote = async () => {
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();
      const randomNumber = Math.floor(Math.random() * data.length);
      setQuote(data[randomNumber].text + ' - ' + data[randomNumber].author)
    };
    getQuote()
  },[]);

  return (
    <>
      <div className="header__title">Simple To Do List</div>
      <div className="header__subtitle">{quote ? quote : <><LoopIcon/>Loading quote...</>}</div>
    </>
  );
})
