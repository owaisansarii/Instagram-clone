import { useState, useEffect } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import "./create.css";
const Create = () => {
  const location = useLocation();
  const [image, setImage] = useState();
  const [file, setFile] = useState();
  const history = useHistory();
  const handleClick = () => {
    history.push({
      pathname: "/create/details",
      state: file,
    });
  };
  useEffect(() => {
    const file = location.state.image;
    setFile(location.state);
    const url = URL.createObjectURL(file);
    const alt = file.name;
    setImage({ src: url, alt: alt });
  }, [location]);
  return (
    <>
      <div className="create">
        <div className="create_header">
          <Link to="/">
            <div className="cross">
              <i className="fas fa-times"></i>
            </div>
          </Link>
          <div className="heading">New Photo Post</div>

          <button onClick={handleClick}>Next</button>
        </div>
        <div className="photo_container">
          {image && <img src={image.src} alt={image.alt}></img>}
        </div>
      </div>
    </>
  );
};

export default Create;
