import { Box, Button } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({ offset, onClick }) => {
    return (
        <Box>
            <Button border="1px solid black" marginRight="1px" borderRadius="0px" bgColor={offset === 1 ? "green.400" : "white"} onClick={() => onClick(1)}>1</Button>
            <Button border="1px solid black" marginRight="1px" borderRadius="0px" bgColor={offset === 2 ? "green.400" : "white"} onClick={() => onClick(2)}>2</Button>
            <Button border="1px solid black" marginRight="1px" borderRadius="0px" bgColor={offset === 3 ? "green.400" : "white"} onClick={() => onClick(3)}>3</Button>
            <Button border="1px solid black" marginRight="1px" borderRadius="0px" bgColor={offset === 4 ? "green.400" : "white"} onClick={() => onClick(4)}>4</Button>
            <Button border="1px solid black" marginRight="1px" borderRadius="0px" bgColor={offset > 4 ? "green.400" : "white"} onClick={() => onClick(offset + 1)}>{">"}</Button>
        </Box>
    )
}

export default Pagination