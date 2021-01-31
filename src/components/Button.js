// import React from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';

// export function Button() {
//   return (
//     <Link to='reservation'>
//       <button className='btn'>reservation</button>
//     </Link>
//   );
// }

import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
// scss class that im automatically creating here
//set sizes med/large 
//make sure to class to apply to its automatically otherwide it set by default on that 0 array i signed
const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];
// pass prop /class => pass with logic
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  // check if true or flase .if false i want the value to style at 0 which is first option in styles array
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/Chef' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};