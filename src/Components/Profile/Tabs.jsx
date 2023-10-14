import React from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps';
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
export default function MyTabs() {
  return (
    <Box
        sx={{
            width: "100%",
            typography: "bodyl",
            display: "flex",
            justifyContent: "center",
            alignltems :"center",
          }}  >

            <Tabs sx={{
                color:"white"
                
            }}
            aria-label="disabled tabs example"/>

            <Tab
                icon={<AppsIcon/>}
                label="Posts"
                iconPosition="start"
                sx={{color:"white"}}
            />

                <Tab 
                icon={<BookmarkBorderIcon/>}
                label="Reels"
                iconPosition="start"
                sx={{color:"white"}}
                />

                <Tab 
                icon={<AssignmentIndOutlinedIcon/>}
                label="Taged"
                iconPosition="start"
                sx={{color:"white"}}
                />




    </Box>
  )
}