
import React from 'react'
import { Avatar,  Divider, List, ListItem, ListItemAvatar, ListItemText,  Typography } from '@mui/material'

export default function Friends() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'black' , color:"white"}}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Asim sawafta"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="#4b4b4b"
              >
                Lorem ipsum ipsumipsum .7
              </Typography>
              
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      
    </List>
    
  )
}
