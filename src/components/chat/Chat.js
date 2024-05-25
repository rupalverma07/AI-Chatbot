import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import leftImg from '../../assets/Group 1000011097.png'
import styles from './chat.module.css'
import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import editImage from '../../assets/image 31.png';
import mockData from '../../Json/data.json';
import MessagesLlist from '../messageLlist/MessagesLlist';
import Feedback from '../feedback/Feedback';
import { Link } from 'react-router-dom';
const getLocalStorageData = () =>{
    let data = JSON.parse(localStorage.getItem("conversation"))
    if(data !== null){
    return data;
    }else{
        return []
    }
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [inputVal, setInputVal] = useState('');
    const[showChat, setShowChat] = useState(false);
    const [conversation, setConversation] = useState(getLocalStorageData());
   
const handleSendMessage = () =>{
    setShowChat(true)
    if(inputVal.trim()){
        const userMessage = {id:messages.length+1,text:inputVal, isAI:false}
        setMessages([...messages, userMessage])
        setInputVal('')
    

    const availableResp = mockData.find(q => q.question.toLowerCase().includes(inputVal.toLowerCase()))
    if(availableResp){
        setMessages([...messages,userMessage,{id:messages.length+2, text:availableResp.response, isAI:true}])
    }else{
        setMessages([...messages,userMessage,{id:messages.length+2, text:"As an AI Language Model, I don't have the details.", isAI:true}])
    }
}
}
const saveChatData = () =>{
    
    setShowChat(false)
    console.log(messages,'save')
    let date = new Date();
    console.log(date)
    let newConveration = {date:'Today', msg:messages}
    // setIsModalOpen(true)
    setConversation([...conversation,newConveration])
    console.log(conversation)
    setMessages([])
}
useEffect(() =>{
    localStorage.setItem("conversation",JSON.stringify(conversation))
},[conversation])
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item  spacing={2} lg={2} >
            <Grid container className={styles.leftContent}>
            <Grid item>
            <img className={styles.leftImage} src={leftImg}/>
            </Grid>
            <Grid item>
            <Typography variant='h6'>New Chat</Typography>
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
            {showChat ? (messages.map((item,i) => <MessagesLlist data={item} index={i}/>)):(<>
                <Grid className={styles.mainContent}  container justifyContent="center" alignItems="center">
                {/* <Box > */}
                <div>
                <Typography variant='h5'>How Can I Help You Today?</Typography>
                <img src={leftImg}/>
                </div>
                {/* </Box> */}
            </Grid>
            <Grid container spacing={2}>
            <Grid item lg={6}>
                <Card>
                    <CardContent>
                        <Typography variant='h5' component='div'>
                            Hi, what is the weather
                        </Typography>
                        <Typography color="text.secondary">
                            Get immediate AI generated response.
                        </Typography>

                    </CardContent>
                </Card>
            </Grid>
            <Grid item lg={6}>
            <Card>
                    <CardContent>
                        <Typography variant='h5' component='div'>
                                 Hi, what is my location
                        </Typography>
                        <Typography color="text.secondary">
                        Get immediate AI generated response
                        </Typography>

                    </CardContent>
                </Card>
            </Grid>
            <Grid item lg={6}>
            <Card>
                    <CardContent>
                        <Typography variant='h5' component='div'>
                        Hi, what is the temperature
                        </Typography>
                        <Typography color="text.secondary">
                        Get immediate AI generated response
                        </Typography>

                    </CardContent>
                </Card>
            </Grid>
            <Grid item lg={6}>
            <Card>
                    <CardContent>
                        <Typography variant='h5' component='div'>
                        Hi, how are you
                        </Typography>
                        <Typography color="text.secondary">
                        Get immediate AI generated response
                        </Typography>

                    </CardContent>
                </Card>
            </Grid>
            </Grid>

            </>)}
           
            <Grid container spacing={2} mt={2}>
                <Grid item lg={10}>
                    <TextField fullWidth value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
                </Grid>
                <Grid item lg={1} style={{padding:"24px"}}>
                    <Button variant='contained' className={styles.btn} onClick={handleSendMessage}>Ask</Button>
                </Grid>
                <Grid item lg={1} style={{padding:"24px"}}>
                <Button variant='contained' onClick={saveChatData} className={styles.btn}>Save</Button>
                </Grid>
            </Grid>
            </Box>
        </Grid>
      </Grid>
     
    </Box>
  )
}

export default Chat
