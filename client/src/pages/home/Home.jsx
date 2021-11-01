import axios from "axios";
import { useState, useEffect } from "react";
import List from "../../components/list/List.jsx";
import Featured from "../../components/featured/Featured.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import "./home.scss";

const Home = ({type}) => {
    const [lists, setLists] = useState([]);
    const[genre, setGenre] = useState(null);

    useEffect(()=>{
        const getRandomLists = async ()=>{
            try{
                const res = await axios.get(
                    `lists${type ? "?type=" + type : ""}
                    ${genre ? "&genre=" + genre : ""}`,
                    {
                        headers: {
                            token:
                                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTZhYzFiZTE3OTdkNGNmMmRhNjc1NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzg5MzMwMywiZXhwIjoxNjM0MzI1MzAzfQ.8kNbZypyiZzGdKpOIPzpgvkj-74LzgT7JpFGSgfKOIQ",
                        },
                    }
                );
                // console.log(res);
                setLists(res.data);
            }catch(err){
                console.log(err);
            }
        };
        getRandomLists();
    }, [type, genre]);

    return (
        <div className="home">
            <Navbar/>
            <Featured type={type} />
            {lists.map((list)=>(
                <List list={list} />
            ))}
        </div>
    );
};

export default Home
