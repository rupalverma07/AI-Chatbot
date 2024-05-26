import { Box, Card, CardMedia, Grid, IconButton, Rating, Tooltip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import userImg from '../../assets/Group 1000011096.png'
import aiImg from '../../assets/Group 1000011097 (1).png'
import Feedback from '../feedback/Feedback';
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import styles from './list.module.css'

const MessagesLlist = ({data,index}) => {
    const[isModalOpen, setIsModalOpen] = useState(false)
    const [value, setValue] = React.useState(0);
    const [showStar, setShowStar] = useState(false)
    const [userFeedback, setUserFeedback] = useState('');
    const [chatHistory, setChatHistory] = useState([])
    const handleFeedback = (type) =>{
        if(type === 'dislike'){
            setIsModalOpen(true)
        }else if(type === 'like'){
setShowStar(true)
        }
    }
    const receiveFdbkText = (val) =>{
        setUserFeedback(val)
        // data.dislike = val
        // setChatHistory([...chatHistory,data])
        // console.log(chatHistory,'text')
    }
    const ratingHandler = (e) =>{
        setValue(e.target.value)
        // if(data.isAI){
        //     data.like = e.target.value
        // }
        // setChatHistory([...chatHistory,data])
        // console.log(chatHistory,'rating')
    }
    useEffect(() =>{
      if(data.isAI){
       data.like = value;
       data.dislike = userFeedback
      } 
     
    },[value,Feedback,data])
    return (
        <Box className={styles.chatContainer} lg={10} md={8} sm={8} sx={2}>
        <Card style={{position:"relative"}} lg={10} md={8} sm={8} sx={2} className={styles.cardContainer}>
            <Grid container spacing={{ xs: 2, md: 12, lg:12, sm:12}} >
                <Grid item lg={1} md={1} sm={1} sx={1}>
                    {data.isAI ? ( <img  src={aiImg} alt='ai image' />):( <img src={userImg} alt='user image' style={{marginLeft:"10px"}}/>)}
                   
                </Grid>
                <Grid item lg={9} md={9} sm={6} sx={2}>
                <Typography variant='h5' component="div">
                        {data.isAI ? ('Soul AI') : ('You')}
                    </Typography>
                    <Typography  component="div">

                        {data.text}
                    </Typography>

                    {data.isAI && (
            <div style={{ position: "absolute", top: "10px", right: "10px" }}>
              <Tooltip title="Like">
                <IconButton onClick={() => handleFeedback("like")}>
                  <ThumbUpIcon
                    // color={feedback[msg.id] === "like" ? "primary" : "disabled"}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="Dislike">
                <IconButton onClick={() => handleFeedback("dislike")}>
                  <ThumbDownIcon
                    // color={
                    //   feedback[msg.id] === "dislike" ? "error" : "disabled"
                    // }
                  />
                </IconButton>
              </Tooltip>
            </div>
          )}
          <Box>
            <p>Rate this response</p>
          {data.isAI && showStar && ( <Rating
        name="simple-controlled"
        value={value}
        onChange={ratingHandler}
      />)}
      </Box>
                <Box>
              Feedback: {userFeedback}       
               </Box>
                    </Grid>
            </Grid>
        </Card>
         <Feedback setModal={isModalOpen} stterFunc={setIsModalOpen} sendFdbkText={receiveFdbkText}/>
         </Box>
      )
}

export default MessagesLlist
