// import React from 'react';
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import leftImg from '../../assets/Group 1000011097 (1).png'
import styles from './history.module.css'
import { Button, Card, CardContent, FormControl, IconButton, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import editImage from '../../assets/image 31.png';
import mockData from '../../Json/data.json';
import MenuIcon from '@mui/icons-material/Menu';
import crossIcon from '../../assets/X.png'
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
    const[ratingValue, setRatingValue] = useState('')
    const[showSideBar, setShowSideBar] = useState(false)
    const[filteredData, setFilteredData] = useState(chatData)

    const handleRatingChange = (e) =>{
        
        let rating = e.target.value
        console.log(rating)
        setRatingValue(rating)
        let msgData = chatData.map(item => item.msg);
       
        let dataCombined = [];
        msgData.forEach(item => {
          dataCombined = [...dataCombined,...item]
        })
        let deepCopy = JSON.parse(JSON.stringify(chatData));
        let filterData = [];
        let newData = [];
        deepCopy.forEach(elem =>{
          filterData = elem.msg.filter(item => Number(item.like) === Number(rating))
          let index;
          filterData.forEach(ele =>{
            index = dataCombined.findIndex(elem => elem.text === ele.text)
          })
          if(index !== undefined){
            filterData = [dataCombined[index-1],...filterData]
          }
          newData = [...newData,{date:elem.date,msg:filterData}]
        })
        setFilteredData(newData)
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item  lg={2} md={2} sm={2}  sx={{ display: { xs: 'none', sm: 'block' } }} >
            <Grid container spacing={{lg:3, md:1, sm:1}} className={styles.leftContent}>
            <Grid item>
            <img className={styles.leftImage} src={leftImg}/>
            </Grid>
            <Grid item>
           <Typography variant='h6' className={styles.newChat}> <Link to="/">New Chat</Link></Typography>
            </Grid>
            <Grid item>

            <img src={editImage} height='30'/>
            </Grid>
            </Grid>
        <button item className={styles.past}>
            <Link to="/chatHistory">Past Conversations</Link>
        </button>
        </Grid>
        <Grid item lg={10} md={10} sm={10} xs={12}>
            <Box className={styles.rightContainer}>
            <IconButton  sx={{ display: { xs: 'block', sm: 'none' } }} edge="start" color="inherit" aria-label="menu" >
        <MenuIcon onClick={() => setShowSideBar(true)} />
      </IconButton>
    
             {showSideBar ? (
        <div  className={styles.sidebar}>
        <div  className={styles.sideItem}>
        <Grid item>
        <img className={styles.leftImage} src={leftImg}/>
        </Grid>
        <Grid item>
        <Typography variant='h6'> <Link to="/">New Chat</Link></Typography>
        </Grid>
        <Grid item>

        <img src={editImage} height='25'/>
        </Grid>
        <Grid item>

                <img src={crossIcon} onClick={() => setShowSideBar(false)} height='20'/>
            </Grid>
        </div>
        <div  className={styles.sidePast}>
        <Link to="/chatHistory">Past Conversations</Link>
    </div>
        </div>
    ) : (null)}
            <Typography variant='h5' className={styles.heading}>Soul AI</Typography>
            <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  className={styles.textContainer}
>
<Typography variant='h4' className={styles.heading2}>Conversation History</Typography>
<FormControl sx={{ m: 1, minWidth: 120}} size="small">
      <InputLabel id="demo-select-small-label">All Ratings</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={ratingValue}
        label="Age"
        onChange={handleRatingChange}
        style={{ borderRadius:"15px", backgroundColor:"#fff", color:"black"}}
      >
    
        <MenuItem value="1">1 Star</MenuItem>
        <MenuItem value="2">2 Star</MenuItem>
        <MenuItem value="3">3 Star</MenuItem>
        <MenuItem value="4">4 Star</MenuItem>
        <MenuItem value="5">5 Star</MenuItem>
      </Select>
    </FormControl>
</Stack>
{filteredData.length>0 ?(filteredData.map((item) => <HistoryList data={item}/>)) : ('')}
            
            </Box>
        </Grid>
      </Grid>
     
    </Box>
  )
}

export default ChatHistory
