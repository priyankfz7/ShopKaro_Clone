import { Box, Heading, Image, Text, Icon, IconButton } from '@chakra-ui/react'
import React from 'react'
import { BiHeart } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const SingleProduct = (props) => {
  const { id, brandName, imageUrl, name, price } = props;
  const navigate = useNavigate();
  return (
    <Box p="8px" cursor="pointer" onClick={() => navigate(`/product/${id}`)}>
      <Box w="100%" style={{ position: "relative" }}>
        <Image w="100%" src={`http://${imageUrl}`} alt="pimg" />
        <IconButton borderRadius="100%" bgColor="#ffffff" position="absolute" right="8px" bottom="18px"><BiHeart /></IconButton>
      </Box>

      <Text fontFamily={"serif"} mb="15px">{name}</Text>

      <Heading size="20px" color="gray.600">{price.current.text}</Heading>

    </Box>
  )
}

export default SingleProduct