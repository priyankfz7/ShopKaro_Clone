import { Box, Button, Input } from '@chakra-ui/react'

import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { SearchIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeQuerry } from '../Redux/actions/querry.actions';
import { key3, key4 } from '../Api_key';


const SearchInput = () => {
    const iref = useRef(null);
    const [id, setId] = useState("")
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const [f, sf] = useState(false);
    //const q=useSelector((state=>state.q));
    const dispatch = useDispatch();
    const handleClick = (query) => {
        dispatch(changeQuerry(query))
        const q = query.split(" ").join("+");
        // console.log(1)
        //console.log(query)
        navigate(`/search?q=${q}`)
        setQuery("");
        sf(false)



    }
    const handleSubmit = (e) => {
        dispatch(changeQuerry(query))
        e.preventDefault();
        const q = query.split(" ").join("+");
        // console.log(1)
        // console.log(query)
        navigate(`/search?q=${q}`)
        setQuery("")
        sf(false)

    }


    const getdata = (query) => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': key4,
                'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
            }
        };

        fetch(`https://asos2.p.rapidapi.com/v2/auto-complete?q=${query}&store=US&country=US&currency=USD&sizeSchema=US&lang=en-US`, options)
            .then(response => response.json())
            .then(response => setData(response.suggestionGroups[0].suggestions))
            .catch(err => console.error(err));
    }


    const handleChange = (e) => {
        //console.log(data)
        if (id) {
            clearTimeout(id);
        }
        setQuery(e.target.value);
        let new_id = setTimeout(() => {
            getdata(query)
        }, 600);
        setId(new_id);
        //console.log(query)
        //getdata(query)

    }


    return (
        <Box w="40%" m="auto" style={{ position: "relative" }}>
            <form onSubmit={(e) => handleSubmit(e)} style={{ height: "50px", alignItems: "center", display: "flex" }} >
                <Input placeholder="search by category, brand or name" ref={iref} value={query} w="90%" onChange={(e) => handleChange(e)} display="block" style={{ borderRadius: "0px", border: "1px solid black" }} onFocus={() => sf(true)} onBlur={() => setTimeout(() => sf(false), 500)} />
                <Button type="submit" style={{ borderRadius: "0px", border: "1px solid black", borderLeft: "0px" }} display="block" border="1px solid red" w="10%" fontSize="20px"><SearchIcon /></Button>

            </form>
            <Box w="90%" zIndex="100" boxShadow={"md"} bgColor="#eeeeee" style={{ display: f && data.length > 0 ? "block" : "none", position: "absolute", borderRadius: "7px", top: "55px" }} >
                {data.map(q => <Box key={q.searchTerm} style={{ padding: "4px", display: "flex", width: "100%", borderBottom: "0.5px solid gainsboro", backgroundColor: "white", cursor: "pointer", justifyContent: "space-between", _hover: { color: "pink" } }} onClick={() => handleClick(q.searchTerm)}>

                    <p>{q.searchTerm}</p>
                    <p>{q.numberOfResults}</p>
                </Box>)}
            </Box>
        </Box>

    )
}

export default SearchInput