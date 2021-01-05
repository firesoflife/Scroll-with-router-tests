import React from 'react';

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
        Home
      </li>
      <li onClick={booksSection.onClick} selected={booksSection.selected}>
        Books
      </li>
      <li onClick={musicSection.onClick} selected={musicSection.selected}>
        {' '}
        Music
      </li>
      <li>Projects</li>
      {/* {sections.map(({ id, onClick, selected }) => (
        <li key={id} onClick={onClick} selected={selected}>
          {id.toUpperCase()}
        </li>
      ))} */}
    </ul>
  );
};

export default Nav;
