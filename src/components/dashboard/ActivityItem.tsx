import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { Activity } from '../../types/Activity';
import { usePathContext } from '../PathProvider';

interface ActivityItemProps {
  activity: Activity;
}

const ActivityItem = ({ activity }: ActivityItemProps) => {
  const { createPath, dynamicPath } = usePathContext();

  useEffect(() => {
    createPath(activity.id);
  }, [activity.id, createPath]);

  return (
    <Link
      key={activity.id}
      href={{
        pathname: dynamicPath,
        query: {
          title: activity.title,
          conversation_id: activity.id,
          question_title: activity.description,
        },
      }}
      passHref
    >
      <ListItem alignItems="flex-start" component="a">
        <ListItemAvatar>
          <Avatar alt="Avatar" src={`/avatars/0${activity.id}.png`} />
        </ListItemAvatar>
        <ListItemText
          primary={activity.title}
          secondary={
            <>
              <Typography component="span" variant="body2" color="textPrimary">
                {activity.description}
              </Typography>
              {' — ' + activity.time}
            </>
          }
        />
      </ListItem>
    </Link>
  );
};

export default ActivityItem;
