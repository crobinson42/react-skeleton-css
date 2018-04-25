import React from 'react';

const Label = ({ forId = 'label', text = '' }) => (
  <label htmlFor={forId}>{text}</label>
)

export default Label
