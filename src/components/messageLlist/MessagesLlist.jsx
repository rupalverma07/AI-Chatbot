import { Box, Card, CardMedia, Grid, IconButton, Rating, Tooltip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import userImg from '../../assets/Group 1000011096.png'
import aiImg from '../../assets/Group 1000011097.png'
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
        <Box className={styles.chatContainer}>
        <Card style={{position:"relative"}} className={styles.cardContainer}>
            <Grid container spacing={3}>
                <Grid item>
                    {data.isAI ? ( <img  src={aiImg} alt='ai image' height='80' width='80'/>):( <img src={userImg} alt='user image' style={{marginLeft:"10px"}}/>)}
                   
                </Grid>
                <Grid item style={{width:"70%"}}>
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
