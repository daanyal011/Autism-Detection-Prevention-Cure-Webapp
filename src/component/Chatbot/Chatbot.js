import React from 'react';
import ExtensionIcon from '@mui/icons-material/Extension';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

function Chatbot({ title, to, icon, selected, setSelected }) {
  const handleClick = () => {
    setSelected(title);
  };

  return (
    <ListItem
      button
      component="a"
      href={to}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ListItemIcon>
        {icon || <ExtensionIcon />}
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
}

export default Item;
