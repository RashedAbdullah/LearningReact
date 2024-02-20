import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Fingerprint from '@mui/icons-material/Fingerprint';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

const Buttons = () => {
  return (
    <div >
       <form action="">
        <input type="text" />
        {/*  all about button */}
        <Button sx={{width: {xs: 1, md: 400}, color: "blue", mx: 30, ':hover': {color: "aqua"}}}  size='medium'  type='submit' variant="contained">contained</Button>
        <Button type='submit' variant="contained" disabled>contained</Button>
        <Button color='error' disableElevation>disableElevation</Button>
        <Button color='secondary' disableFocusRipple>disableFocusRipple</Button>
        <Button disableRipple>disableRipple</Button>
        <Button disableTouchRipple>disableTouchRipple</Button>
        <Button type='submit' variant="text">text</Button>
        <Button type='submit' variant="outlined">outlined</Button>
        <Button disabled>disabled</Button>
        <Button>Primary</Button>
        <Button href='' variant='elevated'>Link</Button>

        {/* button icon */}
        <Button variant='contained' startIcon={<DeleteIcon />} endIcon={<SendIcon />}>Button</Button>
        <Button variant='outlined' startIcon={<DeleteIcon />} endIcon={<SendIcon />}>Button</Button>

        <IconButton color='primary'> <AddShoppingCartIcon fontSize='small'/></IconButton>
        <IconButton color='error'>  <Fingerprint /></IconButton>

        {/* Upload file */}
            <Button component="label" variant='contained' startIcon={<CloudUploadIcon/>}>
                <VisuallyHiddenInput type="file" />
                Upload
            </Button>

       </form>
    </div>
  )
}

export default Buttons
