import { useState } from "react"
import { Input, Button, Box, Flex, Text, InputRightElement, InputGroup, Heading, useDisclosure } from '@chakra-ui/react'
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "../Redux/actions/auth.actions"

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)
    const navigate = useNavigate();
    const isauth = useSelector((state => state.authManager.isauth));
    const dispatch = useDispatch();
    //console.log(isauth)

    const payload = {
        email, password
    }

    const handleClick = async () => {
        try {
            await fetch('https://spring-bud-bream-garb.cyclic.app/users/login', {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => res.json()).then(res => {
                if (res.token) {
                    setEmail('')
                    setPassword('')
                    dispatch(login(res.token))
                    navigate("/")
                } else {
                    alert("wrong email or password")

                }
            })

        } catch (err) {
            console.log(err);
            alert("wrong email or password")
        }


    }
    // const handleAdminClick = () => {
    //     fetch('http://localhost:8080/admin', {
    //         method: "POST",
    //         body: JSON.stringify(payload),
    //         headers: {
    //             "Content-type": "application/json"
    //         }
    //     }).then(res => res.json()).then(res => {
    //         if (res.token) {
    //             localStorage.setItem('token', res.token)
    //         } else {
    //             localStorage.setItem('token', 321)
    //         }
    //     }).catch(err => console.log(err))

    //     setEmail('')
    //     setPassword('')
    // }


    return (
        <Box mt='50px' mb='100px'>
            {isauth ? <Box>
                <Heading mb="30px" align="center">You are already logged in</Heading>
                <Button borderRadius="0px" border="1px solid black" display="block" m="auto" onClick={() => { dispatch(logout()) }}>Log Out</Button>
            </Box> : <Box><Heading align="center" mb="25px">Login User</Heading>
                <Flex direction='column' m='auto' w={['90%', '90%', '40%', '40%']}>
                    <Input type="text" placeholder="Enter your  email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ border: "1px solid black", borderRadius: "0px", marginBottom: "15px" }} />
                    <InputGroup size='md'>
                        <Input pr='4rem' type={show ? 'text' : 'password'} placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} style={{ border: "1px solid black", borderRadius: "0px", marginBottom: "15px" }} />
                        <InputRightElement width='4rem'>
                            <Button h='1.75rem' size='sm' onClick={() => setShow(!show)} style={{ borderRadius: "0px", backgroundColor: "white", color: "black" }}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Button style={{ borderRadius: "0px", backgroundColor: "black", color: "white", marginBottom: "10px" }} onClick={handleClick}>Log in</Button>
                    <Box>
                        <Text color="red" mb="10px">Don't have an account?</Text>
                        <Button style={{ borderRadius: "0px", border: "1px solid black", color: "black" }}><Link to="/signup">register</Link></Button>
                    </Box>
                </Flex></Box>}
            {/* <Flex direction='column' m='auto' mt='50px' w={['90%','90%','40%','40%']}>
                <Text color='teal' as='u' fontSize='2xl'>Login as a Seller for Shop Karo</Text>
            <Input mt='20px' type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <InputGroup size='md'>
                    <Input pr='4rem' type={show ? 'text' : 'password'} placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <InputRightElement width='4rem'>
                        <Button h='1.75rem' size='sm' onClick={() => setShow(!show)}>
                            { show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <Button onClick={handleAdminClick}>Log in</Button>
                <Box>
                    <Text>Don't have a Seller account? No worries</Text>
                    <Button><Link to='/adminsign'>Click here</Link></Button>
                </Box>
            </Flex> */}

        </Box>
    )
}

export default Login