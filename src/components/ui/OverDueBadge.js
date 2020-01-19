import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px'
  }
}))(Badge);

export default function OverDueBadge() {
  return (
    <IconButton aria-label='cart'>
      <StyledBadge badgeContent={3} color='secondary'>
        <NotificationsActiveRoundedIcon />
      </StyledBadge>
    </IconButton>
  );
}
