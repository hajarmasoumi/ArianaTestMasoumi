import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../utils/validationSchema';
import Loginlayout from '../../layouts/Loginlayout.tsx';
import { Flex, Typography } from 'antd';
import InputControlLayout from '../../layouts/InputControlLayout.tsx';
import { Link } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { ButtonStyle, disableButtonStyle, errorMessageStyle, InputStyle, linkStyle } from '../style/index.js';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), });
    const { Title, Paragraph } = Typography;
    const [loading, setLoading] = useState(false)
    let navigate = useNavigate();

    const postData = async (data: { name: string; email: string }) => {
        const response = await axios.post('https://mock.arianalabs.io/api/staff/auth/', data);
        return response.data;
    };
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: postData,
        onSuccess: (data) => {
            setLoading(false)
            localStorage.setItem('token', data?.token);
            navigate("/dashboard");
        },
        onError: (error) => {
            setLoading(false)
            toast.error('Error...');

        },
    })

    const onSubmit = (data: React.FormEvent) => {
        setLoading(true)
        const finalData = {
            username: data.username as string,
            password: data.password as string,
        };
        mutation.mutate(finalData);
    };

    return (
        <Loginlayout>
            <Flex align="start" vertical>
                <Title level={2}>Login</Title>
                <Paragraph type='secondary'>Enter your username and password to login to your account.</Paragraph>
                <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                    <InputControlLayout>
                        <Title level={5}>Username</Title>
                        <input style={InputStyle} placeholder="Please enter your username" {...register('username')} />
                        {errors.username && <Paragraph style={errorMessageStyle}>{errors.username?.message}</Paragraph>}
                    </InputControlLayout>

                    <InputControlLayout>
                        <label>Password</label>
                        <input style={InputStyle} placeholder="Please enter your password" {...register('password')} />
                        {errors.username && <Paragraph style={errorMessageStyle}>{errors.password?.message}</Paragraph>}
                    </InputControlLayout>
                    <button disabled={loading} type="submit" style={loading ? disableButtonStyle : ButtonStyle}>Submit</button>
                </form>
                <Flex align="start" direction="row">
                    <Paragraph >Dont have an account?</Paragraph>
                    <Link to={'/register'} style={linkStyle}>Sign up</Link>
                </Flex>

            </Flex>
        </Loginlayout>

    );
}
export default Login;