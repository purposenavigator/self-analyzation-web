import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export function HowToUse() {
  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h5" component="div">
            How to Use the App
          </Typography>
        }
      />
      <CardContent>
        <List>
          <ListItem>
            <ListItemText primary="1. Select an interesting question from the 'Questions' section." />
          </ListItem>
          <ListItem>
            <ListItemText primary="2. Think deeply about the selected question and provide your answer." />
          </ListItem>
          <ListItem>
            <ListItemText primary="3. The AI will analyze the conversation and extract your values." />
          </ListItem>
          <ListItem>
            <ListItemText primary="4. You can review past conversations in the 'Conversation History' section." />
          </ListItem>
          <ListItem>
            <ListItemText primary="5. Check the 'Values List' to see how your values have changed over time." />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
