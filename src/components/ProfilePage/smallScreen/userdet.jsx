import GridOnIcon from "@mui/icons-material/GridOn";
// import TvIcon from "@mui/icons-material/Tv";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import "./small.css"
import { AuthContext } from "../../../context/authContext";
import {useState, useEffect, useContext} from 'react';
import axios from "axios";
const Userdet = ({userName}) => {
  const { user } = useContext(AuthContext);
    const [isUser, setIsUser] = useState(false);
    const [User, setUser] = useState(user);
    const [isLoading, setIsLoading] = useState(true);
    const [isFollowing, setIsFollowing] = useState(false);
    //check if user is following User
    useEffect(()=>{
      let done = true;
      const fetchData = async () => {
        if(!done){
          return;
        }
        const result = await axios(`/api/users/username/${userName}`);
        if(result.data.username===user.user.username){
            setIsUser(true);
        }
        setUser(result.data);
        if(user.user.following.includes(result.data._id)){
          setIsFollowing(true);
        }
        setIsLoading(false);
      };
      fetchData();
      return () =>  done = false;
      
    },[userName,user.user]);

    const noImage = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
    if(isLoading){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    else{
    return (
        <>
            <div className="su-profile">
                <div className="sprofile-image">
                <img
                    src={User.profileImage ? User.profileImage : noImage}
                    alt={User.username}
                />
                </div>
                <div className="sprofile-det">
                    <div className="susers-set">
                        <span>{User.username}</span>
                        
                    </div>
                    {
                  isUser?
                  <>
                  <button className="smallButton">Edit Profile</button>
                  </>:
                  <>
                  {
                    isFollowing?
                    <button
                      className="smallButton" 
                    onClick={()=>{
                      axios.put(`/api/users/follow/${User._id}`,{
                        userId:user.user._id
                      })
                      .then(res=>{
                        setIsFollowing(false);
                      })
                    }}>Unfollow</button>:
                    <button
                      className="smallButton"
                     onClick={()=>{
                      axios.put(`/api/users/follow/${User._id}`,{
                        userId:user.user._id
                      })
                      .then(res=>{
                        setIsFollowing(true);
                      })
                    }}>Follow</button>
                  }
                  <TurnedInNotIcon />
                  </>
                }
                </div>
            </div>
            <div className="suname">
            <div className="name">{User.fullname}</div>
              <div className="bio">
                <span>
                  {User.bio}
                </span>
              </div>
             </div>
             
                <ul className="stablists">
                <li>
                  <span className="de">{User.posts.length}</span> posts
                </li>
                <li>
                  <span className="de">{User.followers.length}</span> followers
                </li>
                <li>
                  <span className="de">{User.following.length}</span> following
                </li>
              </ul>
             
             <div className="stablist">
            <div className="tablist-items">
              <div className="tabButton activeTab">
                <GridOnIcon />
              </div>
              {/* <div className="tabButton">
                <TvIcon  /> 
              </div>
              <div className="tabButton">
                <TurnedInNotIcon  />
                
              </div> */}
            </div>
          </div> 
        </>         
    )}
}

export default Userdet
