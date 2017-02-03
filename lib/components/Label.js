import React from 'react';
function Label({forId = 'label', text = ''}) {
  return <label htmlFor={forId}>{text}</label>
}
export default Label
