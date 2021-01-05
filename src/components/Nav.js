import React from 'react';

import { Link } from 'react-router-dom';

// ScrollableSection package
import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from 'react-scroll-section';

const Nav = () => {
  const homeSection = useScrollSection('home');
  const booksSection = useScrollSection('books');
  const musicSection = useScrollSection('music');

  return (
    <ul className="nav">
      <li onClick={homeSection.onClick} selected={homeSection.selected}>
        <Link to="/home">Home</Link>
      </li>
      <li onClick={booksSection.onClick} selected={booksSection.selected}>
        <Link to="/books">Books</Link>
      </li>
      <li onClick={musicSection.onClick} selected={musicSection.selected}>
        <Link to="/music">Music</Link>
      </li>
      <li>Projects</li>
    </ul>
  );
};

export default Nav;
