// import React, { useEffect, useState } from 'react'
import { Box, Card, CardMedia, Grid, IconButton, Rating, Tooltip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import userImg from '../../assets/Group 1000011096.png'
import aiImg from '../../assets/Group 1000011097 (1).png'
import Feedback from '../feedback/Feedback';
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import styles from './historyList.module.css'

const HistoryList = ({data}) => {
    const[messageList, setMessageList] = useState([])
    const[chatDate,setChatDate] = useState('')

    useEffect(() =>{
        setMessageList(data.msg)
        setChatDate(data.date)
    
    },[data])
  return (
    <Box className={styles.chatContainer} lg={10} md={8} sm={8} sx={2}>
        {messageList.length > 0 && (<p>{chatDate}</p>)}
            
{messageList.map(item =>(
    <>

    
    <Card style={{position:"relative"}} lg={10} md={8} sm={8} sx={2} className={styles.cardContainer}>
            <Grid container spacing={{ xs: 2, md: 12, lg:12, sm:12}}>
                <Grid item lg={1} md={1} sm={1} sx={1}>
                    {item.isAI ? ( <img  src={aiImg} alt='ai image'/>):( <img src={userImg} alt='user image' style={{marginLeft:"10px"}}/>)}
                   
                </Grid>
                <Grid item lg={9} md={9} sm={6} sx={2}>
                <Typography variant='h5' component="div">
                        {item.isAI ? ('Soul AI') : ('You')}
                    </Typography>
                    <Typography  component="div">

                        {item.text}
                    </Typography>

                    
          <Box>
            
          {item.isAI && ( <Rating
        name="simple-controlled"
        value={item.like}
        readOnly 
      />)}
      </Box>
      {item.isAI && (<Box>
              Feedback: {item.dislike}       
               </Box>)}
                
                    </Grid>
            </Grid>
        </Card>
    </>
))}
       
         </Box>
  )
}

export default HistoryList
