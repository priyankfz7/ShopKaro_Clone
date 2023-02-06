import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const CartItem = ({ name, price, brand, image, _id, delfun }) => {
    const [load, setload] = useState(false);
    const token = useSelector(state => state.authManager.token);

    const handleDelete = () => {
        setload(true)
        delfun(_id).then(res => setload(false))

    }
    return (
        <Flex mb="10px" borderBottom="1px solid gainsboro">
            <Box w="30%" p="20px" mr="30px">
                <Image w="100%" src={`http://${image}`} alt="some" />
            </Box>
            <Box p="30px">
                <Heading fontSize="lg" mb="15px">{brand}</Heading>
                <Text size="16px" mb="15px">{name}</Text>

                <Heading mb="15px" color="gray.500" fontSize="20px">{`$${price}`}</Heading>
                <Button isLoading={load} onClick={() => handleDelete()} borderRadius="0px" border="1px solid gray" bgColor="white" _hover={{ bgColor: "#ED0000", color: "white" }}>Remove </Button>
            </Box>
        </Flex>
    )
}

export default CartItem