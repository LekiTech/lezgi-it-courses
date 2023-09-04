import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { translations } from './hintTranslations';

export type HintProps = {
  /**
   * text to be displayed with its meaning as a hint
   */
  children: string | JSX.Element | JSX.Element[];
  meaning: string;
};

export default function Hint({ children, meaning }: HintProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const passedText = (children as string).toLowerCase().replace(/\i/g, 'I');
  console.log('passedText', passedText);
  const hintText = meaning !== '' && meaning != undefined ? meaning : translations[passedText];

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div 
      aria-owns={open ? 'mouse-over-popover' : undefined}
      aria-haspopup="true"
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
      style={{ display: 'inline-block', textDecorationLine: 'underline', textDecorationStyle: 'dotted', cursor: 'help', fontStyle: 'italic' }}
    >
        {children}
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>{hintText}</Typography>
      </Popover>
    </div>
  );
}