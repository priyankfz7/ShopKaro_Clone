import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useEffect } from "react"
import { useState } from "react"
import { Input, Button, Box, Text, Flex, Image, Heading } from '@chakra-ui/react'



const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [age, setAge] = useState('')
    const [msg, setMsg] = useState('')
    const [col, setCol] = useState('')

    const payload = {
        name, email, password, age
    }
    console.log(payload)

    const handleClick = async () => {
        if (payload.name.length > 0 && payload.age.length > 0) {
            if (confirm == password) {
                try {
                    await fetch('https://spring-bud-bream-garb.cyclic.app/users/register', {
                        method: "POST",
                        body: JSON.stringify(payload),
                        headers: {
                            "Content-type": "application/json"
                        }
                    }).then(res => {
                        alert("registration Successfull")
                        navigate("/login")
                    }
                    )

                } catch (err) {
                    console.log(err)
                    alert("something went wrong")
                }
                setAge('')
                setEmail('')
                setName('')
                setPassword('')
                setMsg('')
                setConfirm('')
            } else {
                alert('Password does not match')
                setPassword('')
                setConfirm('')
            }
        } else {
            alert('Fill all the details to proceed')
        }
    }

    const handlePass = (password) => {
        if (password.length < 8) {
            setCol('tomato')
            setMsg('Password should be of 8 characters')
        } else if (!password.includes('1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' || '0')) {
            setCol('tomato')
            setMsg('Please have a strong password (Password does not contain Numbers)')
        } else if (!password.includes('@' || '#' || '$' || '%' || '^' || '&' || '*' || '!')) {
            setCol('tomato')
            setMsg('Please have a strong password (Password does not contain special character)')
        } else {
            setCol('green')
            setMsg("Password is strong")
        }

    }
    useEffect(() => {
        setTimeout(handlePass(password), 1000)
    }, [password.length, password])


    return (


        <Box w="40%" m="auto" mt="30px" mb="30px" shadow="2xl" p="20px" borderRadius="15px" >
            <Heading mb="20px" align="center">Sign Up</Heading>
            <Flex direction='column'>
                <Input mt='2%' type="text" placeholder="Enter Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                <Input mt='2%' type="text" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} />
                <Input mt='2%' type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input mt='2%' type="password" placeholder="Enter Password" value={password} onChange={(e) => {
                    setPassword(e.target.value)
                    handlePass(password)
                }} />
                <Text m='auto' color={col}>{msg}</Text>
                <Input mt='2%' mb='4%' m='auto' type="password" placeholder="Confirm Password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
            </Flex>
            <Box >
                <Button display="block" w="100%" mt='10px' style={{ borderRadius: "0px", backgroundColor: "black", color: "white", marginBottom: "10px" }} onClick={handleClick}>Register</Button>
            </Box>

        </Box>










    )
}

export default Signup