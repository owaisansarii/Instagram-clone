
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import {useState, useEffect} from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const LikedBy = ({likes}) => {
    const [likedBy, setLikedBy] = useState([]);
    

    
    useEffect(() => {
        axios.get(`/api/users/username/${likes}`)
        .then(res => {
            setLikedBy(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [likes]);

    
    return (
        <Grid container spacing={2}>
            <Grid item xs>
                <Avatar src={likedBy.profileImage} 
                    sx={{mr: 2, width: '40px', height: '40px'}}
                />
            </Grid>
            <Grid item xs={8}>
                <Typography variant="h6"
                    sx={{mr: 10}}
                >{likedBy.username || "You"}</Typography>
            </Grid>
            <Grid item xs>      
            </Grid>
        </Grid>
        );
}


export default function LikesModal({likes}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div onClick={handleOpen}>{likes.length} likes</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h4">
            Liked by
          </Typography>
          {
            likes.length > 0 ?
              likes.map((like,index) => (
                <LikedBy key={index} likes={like} />
              ))
            :
              <Typography>No one has liked this yet</Typography>
        }
        </Box>
      </Modal>
    </div>
  );
}