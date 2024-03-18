import React, { useState } from 'react';
import { Button, Popover, Typography } from '@mui/material';

const ButtonWithPopover = ({ buttonText, popoverText }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Button
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {buttonText}
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 2 }}>{popoverText}</Typography>
      </Popover>
    </div>
  );
};

const MyComponent = () => {
  const buttonsData = [
    { id: 1, buttonText: 'Button 1', popoverText: 'Popover text 1' },
    { id: 2, buttonText: 'Button 2', popoverText: 'Popover text 2' },
    { id: 3, buttonText: 'Button 3', popoverText: 'Popover text 3' },
  ];

  return (
    <div>
      {buttonsData.map((button) => (
        <ButtonWithPopover
          key={button.id}
          buttonText={button.buttonText}
          popoverText={button.popoverText}
        />
      ))}
    </div>
  );
};

export default MyComponent;
