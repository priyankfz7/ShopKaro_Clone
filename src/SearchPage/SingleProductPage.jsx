import React, { useEffect, useState } from 'react';
import { Box, Button, Heading, IconButton, Icon, Image, Text, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { AiFillStar, AiFillTag } from 'react-icons/ai'
import { FiTruck } from 'react-icons/fi'
import { MdOutlineAssignmentReturn } from 'react-icons/md'
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios"
import loadingImg from "./loader.gif"
import { key3, key4 } from '../Api_key';
import { useSelector } from 'react-redux';

const addToCart = async (product, token) => {
    //console.log(product)
    const options = {
        method: 'POST',
        url: 'https://spring-bud-bream-garb.cyclic.app/cart/create',
        data: product,
        headers: {
            'authentication': token,
        }

    };
    const res = await axios(options);
    return res.data;
    console.log(res.data)
}
const getProduct = async (id) => {
    const options = {
        method: 'GET',
        url: 'https://asos2.p.rapidapi.com/products/v3/detail',
        params: { id: id, lang: 'en-US', store: 'US', sizeSchema: 'US', currency: 'USD' },
        headers: {
            'X-RapidAPI-Key': key4,
            'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
        }
    };

    const res = await axios(options);
    const data = await res.data;
    return data
}

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const SingleProductPage = (props) => {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState();
    const navigate = useNavigate();
    const [load, setLoad] = useState(true);
    const params = useParams();
    const [data, setData] = useState({});
    const [cartLoad, setcartLoad] = useState(false)
    console.log(data)
    const product_id = params.product_id;
    const token = useSelector(state => state.authManager.token)

    let rating = Math.ceil(Math.random() * 4);
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });
    const handleAdd = (product, token) => {
        setcartLoad(true);
        addToCart(product, token).then(res => { navigate("/cart") });
        setcartLoad(false)


    }

    //console.log(Product)

    // These are the images used in the slide


    useEffect(() => {
        getProduct(product_id).then((res) => {
            setData(res);
            setLoad(false)

        })


    }, [])
    return (load || data == [] ? <Box w="70%" m="auto">
        <Image display="block" m="auto" src={loadingImg} />
    </Box> :
        <Box w="70%" m="auto" mt="20px" display="flex" justifyContent="space-between">


            <Box width="45%"
                position={'relative'}
                //height={'600px'}

                overflow={'hidden'}>
                {/* CSS files for react-slick */}
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
                {/* Left Icon */}
                <IconButton
                    aria-label="left-arrow"
                    borderRadius="full"
                    position="absolute"
                    left={side}
                    top={top}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    onClick={() => slider?.slickPrev()}>
                    <BiLeftArrowAlt />
                </IconButton>
                {/* Right Icon */}
                <IconButton
                    aria-label="right-arrow"
                    borderRadius="full"
                    position="absolute"
                    right={side}
                    top={top}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    onClick={() => slider?.slickNext()}>
                    <BiRightArrowAlt />
                </IconButton>
                {/* Slider */}
                <Slider {...settings} ref={(slider) => setSlider(slider)}>
                    {data.media.images.map((url, index) => (
                        <Box>
                            <Image
                                key={index}
                                width="100%"








                                src={`http://${url.url}`}
                            />

                        </Box>


                    ))}
                </Slider>
            </Box>
            <Box w="40%" p="20px">
                <Heading size="lg" mb="20px">{data.name}</Heading>
                <Heading size="lg" mb="20px" color="gray.500">{data.price.current.text}</Heading>
                <Box mb="20px">
                    {Array(5)
                        .fill("")
                        .map((_, i) => (
                            <Icon
                                as={AiFillStar}
                                key={i}
                                color={i <= rating ? "gold" : "gray.300"}
                            />
                        ))}
                </Box>
                <Text fontSize="20px" mb="20px">Brand: <span style={{ color: "#d01345" }}>{data.brand.name}</span></Text>
                <Box w="100%" mb="15px" p="15px" bgColor="#cde2f5" display="flex"><AiFillTag size="20px" />...Excluded from all discount codes</Box>
                <Button mb="20px" isLoading={cartLoad} w="100%" borderRadius="0px" color="white" bgColor="#018849" onClick={() => !token ? alert("Login Required") : handleAdd({
                    brand: data.brand.name,
                    name: data.name,
                    price: data.price.current.value,
                    image: data.media.images[0].url
                }, token)}>Add To Bag</Button>
                <Box border="1px solid gainsboro" p="15px">
                    <Box display="flex" mb="15px"><FiTruck size="20px" /><span style={{ marginLeft: "20px" }}>Free Delivery</span></Box>
                    <Box display="flex"><MdOutlineAssignmentReturn size="20px" /><span style={{ marginLeft: "20px" }}>Free Returns</span></Box>


                </Box>

            </Box>
        </Box >

    );

}

export default SingleProductPage;