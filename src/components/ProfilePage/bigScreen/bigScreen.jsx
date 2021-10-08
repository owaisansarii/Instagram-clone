
import GridOnIcon from "@mui/icons-material/GridOn";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import SettingsIcon from "@mui/icons-material/Settings";
import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";
import {useState,useEffect} from 'react';
import axios from 'axios';
const BigScreen = ({userName}) =>{
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
      return ()=> done =false
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
    return(
        <>
           <div className="u-profile">
            <div className="profile-image">
              <img
                src={User.profilePicture || noImage}
                alt={User.username}
              />
            </div>
            <div className="profile-det">
              <div className="users-set">
                <span>{User.username}</span>
                {
                  isUser?
                  <>
                  <button>Edit Profile</button>
                  <SettingsIcon />
                  </>:
                  <>
                  {
                    isFollowing?
                    <button onClick={()=>{
                      axios.put(`/api/users/follow/${User._id}`,{
                        userId:user.user._id
                      })
                      .then(res=>{
                        setIsFollowing(false);
                      })
                    }}>Unfollow</button>:
                    <button onClick={()=>{
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
              <ul className="profile-stats">
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
              <div className="name">{User.fullname}</div>
              <div className="bio">
                <span>
                  {User.bio}
                </span>
              </div>
            </div>
          </div> 
          <div className="tablist">
            <div className="tablist-items">
              <div className="tabButton">
                <GridOnIcon fontSize="smaller" />
                <span>POSTS</span>
              </div>
              {/* <div className="tabButton">
                <TvIcon fontSize="smaller" />
                <span> IGTV</span>
              </div>
              <div className="tabButton">
                <TurnedInNotIcon fontSize="smaller" />
                <span>SAVED</span>
              </div> */}
            </div>
          </div>
        </>
    )
    }
}

export default BigScreen;