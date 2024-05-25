// import React, { useEffect, useState } from 'react'
import { Box, Card, CardMedia, Grid, IconButton, Rating, Tooltip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import userImg from '../../assets/Group 1000011096.png'
import aiImg from '../../assets/Group 1000011097.png'
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
    //  let newList = data.msg((elem,i) =>{
    //     let data = {}
    //     if(i %2 !== 0){

    //     }else{

    //     }
    //  })
    },[])
  return (
    <Box className={styles.chatContainer}>
            <p>{chatDate}</p>
{messageList.map(item =>(
    <>

    
    <Card style={{position:"relative"}} className={styles.cardContainer}>
            <Grid container spacing={3}>
                <Grid item>
                    {item.isAI ? ( <img  src={aiImg} alt='ai image' height='80' width='80'/>):( <img src={userImg} alt='user image' style={{marginLeft:"10px"}}/>)}
                   
                </Grid>
                <Grid item style={{width:"70%"}}>
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
