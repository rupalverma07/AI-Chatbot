// import React from 'react';
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import leftImg from '../../assets/Group 1000011097.png'
import styles from './history.module.css'
import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import editImage from '../../assets/image 31.png';
import mockData from '../../Json/data.json';

import { Link } from 'react-router-dom';
import MessagesLlist from '../../components/messageLlist/MessagesLlist';
import HistoryList from '../../components/historylist/HistoryList';
const getChatData = () =>{
    let chats = JSON.parse(localStorage.getItem("conversation"))
    if(chats !== null){
        return chats;
    }else{
        return [];
    }
}
const ChatHistory = () => {
    const[chatData, setChatData] = useState(getChatData())
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item  spacing={2} lg={2} >
            <Grid container className={styles.leftContent}>
            <Grid item>
            <img className={styles.leftImage} src={leftImg}/>
            </Grid>
            <Grid item>
            <Link to="/"><Typography variant='h6'>New Chat</Typography></Link>
            </Grid>
            <Grid item>

            <img src={editImage} height='30'/>
            </Grid>
            </Grid>
        <Grid item className={styles.past}>
            <Link to="/chatHistory">Past Conversations</Link>
        </Grid>
        </Grid>
        <Grid item lg={10}>
            <Box className={styles.rightContainer}>
            <Typography variant='h5' className={styles.heading}>Bot AI</Typography>
            {chatData.map((item) => <HistoryList data={item}/>)}
            </Box>
        </Grid>
      </Grid>
     
    </Box>
  )
}

export default ChatHistory
