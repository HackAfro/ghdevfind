import React from 'react';
import PropTypes from 'prop-types';

import './Badge.css';

const Badge = ({
  color, fontSize, icon, text, fontWeight, uppercase, ...others
}) => (
  <span
    className={`badge hint--bottom-right hint--bounce hint--rounded ${color}`}
    style={{
      fontSize: `${fontSize}px`,
      backgroundColor: `${color}`,
      fontWeight,
      textTransform: `${uppercase ? 'uppercase' : 'capitalize'}`,
    }}
    aria-label={text}
    {...others}
  >
    {icon}
    {text}
  </span>
);

Badge.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.number,
  icon: PropTypes.node,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  uppercase: PropTypes.bool,
  fontWeight: PropTypes.number,
};

Badge.defaultProps = {
  color: 'black',
  fontSize: 22,
  icon: '',
  text: '',
  uppercase: true,
  fontWeight: 600,
};

export default Badge;