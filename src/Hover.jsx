import React, { useState } from 'react';

function HoverText(props) {
  const [text, setText] = useState(props.initialText || 'Hover me');

  return (
    <span
      onMouseEnter={() => setText(props.textOnHover || 'I was hovered')}
      onMouseLeave={() => setText(props.initialText || 'Hover me')}
    >
      {text}
    </span>
  );
}

export default HoverText;
