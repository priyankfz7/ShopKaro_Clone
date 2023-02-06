import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, parsePath } from 'react-router-dom';
import { BsFillQuestionCircleFill } from "react-icons/bs"
import axios from 'axios';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import loadingImg from "./loader.gif"
const CartPage = () => {
    const [data, setData] = useState(null);
    const token = useSelector(state => state.authManager.token);
    const isauth = useSelector(state => state.authManager.isauth)
    const delfun = async (_id) => {
        await axios({
            method: 'DELETE',
            url: `https://spring-bud-bream-garb.cyclic.app/cart/${_id}`,
            headers: {
                'authentication': token,
            }
        })
    }

    //console.log(cartTotal)
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://spring-bud-bream-garb.cyclic.app/cart/',
            headers: {
                'authentication': token,
            }
        }).then(res => { setData(res.data) })

    }, [delfun]);

    if (!isauth) {
        return <Box m="auto">
            <Heading align="center" mt="30px" mb="30px">You are not logged in!!!</Heading>



            <Link to="/login"><Button mb="30px" w="200px" display="block" m="auto" borderRadius="0px" border="1px solid red" color="red">Login</Button></Link>

        </Box>
    }
    if (!data) {
        return <Box w="70%" m="auto">
            <Image display="block" m="auto" src={loadingImg} />
        </Box>

    }
    return (
        <Box>{data.length == 0 ? <Box w="300px" m="auto">
            <Heading align="center" mt="30px" mb="30px">Cart is Empty!</Heading>
            <div>

                <img src="https://www.seekpng.com/png/full/769-7692988_paytm-mall-logo.png" alt="err" /><br />
                <Link to="/"><Button mb="30px" w="100%" borderRadius="0px" border="1px solid red" color="red">Start Shopping</Button></Link>
            </div>
        </Box> : <Flex w="80%" justify="space-between" m="auto">
            <Box w="60%">
                {data.map((p) =>
                    <CartItem delfun={delfun} {...p} />

                )}
            </Box>
            <Box w="35%" p="30px" position="sticky" top="180px">
                <Heading fontWeight="extrabold" mb="30px">Summary</Heading>
                <Flex justify="space-between" mb="20px">
                    <Flex >
                        <Text fontSize="20px" mr="20px">SubTotal </Text>
                        <BsFillQuestionCircleFill size={"13px"} />
                    </Flex>
                    <Text fontSize="20px">{`$${data.reduce((acc, p) => {
                        return acc + p.price;
                    }, 0)}`}</Text>
                </Flex>
                <Flex justify="space-between" mb="20px">
                    <Text fontSize="20px">Estimated Delivery & Handling</Text>
                    <Text fontSize="20px">$18</Text>
                </Flex>
                <Flex justify="space-between" mb="20px" p="20px" borderTop="1px solid gainsboro" borderBottom="1px solid gainsboro">
                    <Text fontWeight="bold" fontSize="20px">Total</Text>
                    <Text fontWeight="bold" fontSize="20px">{`$${data.reduce((acc, p) => {
                        return acc + p.price;
                    }, 0) + 18}`}</Text>
                </Flex><Link to="/checkout">
                    <Button bgColor="black" borderRadius="30px" color="white" fontSize="20px" w="100%" p="30px" _hover={{ bgColor: "gray.500" }}>
                        Go To Checkout
                    </Button>
                </Link>
            </Box>
        </Flex>}</Box>

    )
}

export default CartPage