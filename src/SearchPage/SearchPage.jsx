import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from "axios"
import { Box, Flex, Heading, Select, SimpleGrid, Skeleton, SkeletonCircle } from '@chakra-ui/react';
import SingleProduct from './SingleProduct';
import { useSelector } from 'react-redux';
import Pagination from './Pagination';
import { key3 } from '../Api_key';

const getdata = async (querry, offset, sort) => {
    const options = {
        method: 'GET',
        url: 'https://asos2.p.rapidapi.com/products/v2/list',
        params: {
            store: 'US',
            offset: offset,
            categoryId: '4209',
            limit: '32',
            country: 'US',
            sort: sort,
            currency: 'USD',
            sizeSchema: 'US',
            lang: 'en-US',
            q: querry
        },
        headers: {
            'X-RapidAPI-Key': key3,
            'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
        }
    };

    const res = await axios(options);
    return res.data.products;

}


const SearchPage = () => {
    const [data, setData] = useState([]);
    const [searchParams] = useSearchParams();
    const [offset, setOffset] = useState(1);
    const [sort, setSort] = useState();
    const [load, setLoad] = useState(true)
    const q = useSelector((state => state.querryManager.q));
    console.log(data);
    const changeOffset = (offset) => {
        setLoad(true);
        setOffset(offset);

    }
    useEffect(() => {
        if (q == "") {
            getdata(searchParams.get("q"), offset, sort).then(res => {
                setData(res);
                setLoad(false)
            })
        } else {
            getdata(q, offset, sort).then(res => { setData(res); setLoad(false) })
        }

    }, [q, offset, sort])
    return (
        <>
            <Box p="20px" textAlign="center" bgColor="#f8f8f8">
                <Heading size="md">{`Results For: ${searchParams.get("q")}`}</Heading>
            </Box>
            <Box p="20px" bgColor="#eeeeee">
                <Select borderRadius="0px" border="1px solid black" w="200px" placeholder='Sort by Price' onChange={(e) => setSort(e.target.value)}>
                    <option value='freshness'>What's new</option>
                    <option value='pricedesc'>Price high to low</option>
                    <option value='priceasc'>Price low to high</option>


                </Select>

            </Box>




            <Box w="80%" m="auto" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "8px" }}>
                {load ?

                    Array(10)
                        .fill("")
                        .map((e) => (
                            <Box padding="6" h="470px " boxShadow="md" bg="white" mt="30px">
                                <Skeleton
                                    h="200px"
                                    startColor="pink.100"
                                    mb="25px"
                                    endColor="orange.100"
                                    size="10"
                                />
                                <Skeleton
                                    h="16px"
                                    w="100%"
                                    startColor="orange.300"
                                    endColor="pink.200"
                                    mb="15px"
                                />
                                <Skeleton h="16px" w="85%" mb="15px" />
                                <Skeleton h="30px" mb="15px" w="55%" />

                                <Skeleton h="20px" mb="15px" w="30%" />
                                <Skeleton h="30px" mb="15px" w="100%" endColor="gray.600" />
                            </Box>
                        ))

                    : data.map((p) => <SingleProduct{...p} />)}


            </Box>
            <Box w="80%" m="auto" mt="30px">
                <Pagination offset={offset} onClick={changeOffset} />
            </Box>
        </>

    )
}

export default SearchPage;