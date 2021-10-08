import { useState, useEffect, useContext } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { InsProgressBar, insProgress } from "react-ins-progress-bar";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

import "./details.css";

const style = {
  position: "absolute",
  width: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Details = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState();
  const [caption, setCaption] = useState("");
  const handleOpen = async () => {
    setOpen(true);
    insProgress.start();
    const url = "https://api.cloudinary.com/v1_1/dlpvcq6wo/image/upload";
    let fd = new FormData();
    fd.append("upload_preset", "feunuxnp");
    fd.append("tags", "browser_upload"); // Optional - add tag for image admin in Cloudinary
    fd.append("file", image.image);
    const config = {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    };
    try {
      const res = await axios.post(url, fd, config);
      const res2 = await axios.post("/api/posts/", {
        userId: user.user._id,
        image: res.data.url,
        desc: caption,
      });
      const res3 = await axios.put(`/api/users/${user.user._id}`, {
        posts: [...user.user.posts, res2.data._id],
      });
      axios.all([res, res2, res3]).then((res) => {
        insProgress.finish();
        setOpen(false);
        history.push("/");
      });
    } catch (err) {
      console.log(err);
    }
    // axios
    //   .post(url, fd, config)
    //   .then((res) => {
    //     console.log(res.data.secure_url);
    //     handleClose();
    //   })
    //   .then((err) => {
    //     console.log(err);
    //   });
  };

  const location = useLocation();
  const [image, setImage] = useState();
  useEffect(() => {
    const file = location.state.image;
    setImage(location.state);
    const url = URL.createObjectURL(file);
    const alt = file.name;
    setFile({ src: url, alt: alt });
    // setImage(location.state);
  }, [location]);
  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} centered>
          <InsProgressBar
            colors={`
        #1abc9c 15%,
        #2ecc71 15%,
        #3498db 12%,
        #9b59b6 32%,
        #b761da 35%,
        #f1c40f 55%,
        #e67e22 59%,
        #e74c3c 63%,
        #95a5a6 92%`}
          />
          <Typography id="modal-modal-title" variant="h6" component="h3">
            Sharing...
          </Typography>
        </Box>
      </Modal>
      <div className="create_header">
        <Link
          to={{
            pathname: "/create",
            state: image,
          }}
        >
          <div className="cross">
            <i className="fas fa-chevron-left"></i>
          </div>
        </Link>
        <div className="heading">New Photo Post</div>
        <button onClick={handleOpen}>Share</button>
      </div>
      <div className="details-area">
        <img
          src="https://cdn.worldvectorlogo.com/logos/facebook-messenger-white.svg"
          alt=""
          style={{ width: "26px", height: "26px", borderRadius: "50%" }}
        />
        <div
          className="caption"
          style={{
            height: "81px",
            width: "70%",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <textarea
            placeholder="Write a caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
        </div>
        <img src={file && file.src} alt="" />
      </div>
    </>
  );
};

export default Details;
