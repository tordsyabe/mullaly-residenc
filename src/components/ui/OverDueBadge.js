import React, { useEffect, useState } from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';

import firebase from '../../firebase';

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px'
  }
}))(Badge);

export default function OverDueBadge({ boarders }) {
  const [overDuesCount, setOverDuesCount] = useState(0);

  useEffect(() => {
    let count = 0;
    if (!!boarders) {
      boarders.forEach(boarder => {
        firebase
          .firestore()
          .collection('boarders')
          .doc(boarder.id)
          .get()
          .then(doc => {
            const dateToday = new Date();
            const boarderDue = doc.data().dues.slice(-1)[0];
            if (dateToday > new Date(boarderDue.dueDate.seconds * 1000)) {
              count++;
            }
            setOverDuesCount(count);
          });
      });
    }
  }, []);

  return (
    <IconButton aria-label='cart'>
      <StyledBadge badgeContent={overDuesCount} color='secondary'>
        <NotificationsActiveRoundedIcon />
      </StyledBadge>
    </IconButton>
  );
}
