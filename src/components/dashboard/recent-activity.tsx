import React from 'react';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Activity } from '../../types/Activity'; // Import the Activity type

interface RecentActivityProps {
  activities: Activity[];
}

export function RecentActivity({ activities }: RecentActivityProps) {
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
