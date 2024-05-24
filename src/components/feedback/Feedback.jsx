import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import crossImg from '../../assets/X.png';
import ideaImg from '../../assets/image 34.png'
import { Stack } from '@mui/material';
import styles from './feedback.module.css'
// import * as React from 'react';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
    
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 766,
  height:335,
  bgcolor: 'background.paper',
  border: '1px solid  #00000073',
  boxShadow: 24,
  p: 4,
  borderRadius:10,
  background: '#FAF7FF'
}

const Feedback = ({setModal,stterFunc, sendFdbkText}) => {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    const[feedbackText, setFeedbackText] = useState('')
    const handleClose = () => stterFunc(false);
    const handleFdbkValue = (e) =>{
        setFeedbackText(e.target.value)
        // sendFdbkText(e.target.value)
    }
    const submitFeedback = () =>{
        sendFdbkText(feedbackText)
        stterFunc(false)
    }
    useEffect(() =>{

        stterFunc(setModal)
    },[setModal])
  
    return (
      <div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
          open={setModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          <Stack
  direction="row"
  spacing={2}
  justifyContent="space-between"
  alignItems="center"
>
    <div className={styles.header}>
    <img src={ideaImg} alt='icon' /> 
  <p>Provide Additional Feedback</p>
    </div>
  
  <img src={crossImg}  onClick={handleClose}/>
</Stack>
<textarea rows='13' cols='98' className={styles.areaInput} value={feedbackText} onChange={handleFdbkValue}></textarea>
<button className={styles.fdbkBtn} onClick={submitFeedback}>Submit</button>
          </Box>
        </Modal>
      </div>
    );
}

export default Feedback
