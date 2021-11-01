import { useState, useEffect } from "react";
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./listItem.scss"
import axios from "axios";
import {Link} from "react-router-dom";

export default function ListItem({index, item}) {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(()=>{
        const getMovie = async ()=>{
            try{
                const res = await axios.get("/movies/find/"+ item, {
                    headers: {
                        token:
                            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTZhYzFiZTE3OTdkNGNmMmRhNjc1NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzg5MzMwMywiZXhwIjoxNjM0MzI1MzAzfQ.8kNbZypyiZzGdKpOIPzpgvkj-74LzgT7JpFGSgfKOIQ",
                    },
                });
                setMovie(res.data);
            }catch(err){
                console.log(err)
            }
        };
        getMovie();
    },[item]);

    return (
        <Link to={{pathname: "/watch", movie: movie}}>
            <div className="listItem"
            style={{left: isHovered && index * 225 -50 + index*2.5}}
            onMouseEnter={()=>setIsHovered(true)} 
            onMouseLeave={()=>setIsHovered(false)}
            >
            <img
                src={movie.img}
                alt=""
            />
            {isHovered && (
               <> 
                <video src={movie.trailer} autoPlay={true} loop />
                <div className="itemInfo">
                    <div className="icons">
                        <PlayArrow className="icon"/> 
                        <Add className="icon"/>
                        <ThumbUpAltOutlined className="icon"/>
                        <ThumbDownAltOutlined className="icon"/>
                    </div>
                    <div className="itemInfoTop">
                        <span>{movie.duration}</span>
                        <span className="limit">+{movie.limit}</span>
                        <span>{movie.year}</span>
                    </div>
                    <div className="desc">
                        {movie.desc}
                    </div>
                    <div className="genre">{movie.genre}</div>
                </div>
                </>
                )}
            </div>
        </Link>
    )
}
