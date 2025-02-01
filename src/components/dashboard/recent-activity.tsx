import React from 'react';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: 'Conversation',
      title: 'Discussion about career',
      time: '2 hours ago',
      description: 'Discovered new values related to personal growth',
    },
    {
      id: 2,
      type: 'Analysis',
      title: 'Deep dive into values',
      time: '5 hours ago',
      description: 'Gained a deeper understanding of work-life balance',
    },
    {
      id: 3,
      type: 'Conversation',
      title: 'About relationships',
      time: '1 day ago',
      description: 'Gained new insights into the importance of trust',
    },
  ];

  return (
    <List>
      {activities.map((activity) => (
        <ListItem key={activity.id} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Avatar" src={`/avatars/0${activity.id}.png`} />
          </ListItemAvatar>
          <ListItemText
            primary={activity.title}
            secondary={
              <>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  {activity.description}
                </Typography>
                {' — ' + activity.time}
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}
