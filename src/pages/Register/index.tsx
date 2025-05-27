import { Flex, Input, Typography, UploadFile } from "antd";
import Loginlayout from "../../layouts/Loginlayout.tsx"
import Uploader from "../../components/uploader/index.tsx";
import { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../utils/validationSchema.js";
import InputControlLayout from "../../layouts/InputControlLayout.tsx";
import { Link } from "react-router-dom";
import { ButtonStyle, disableButtonStyle, errorMessageStyle, InputStyle, linkStyle } from "../style/index.js";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
    const { Title, Paragraph } = Typography;
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(registerSchema), });
    const [loading, setLoading] = useState(false)
    const queryClient = useQueryClient()

    const registerData = async (data: any) => {
        const response = await axios.post('https://mock.arianalabs.io/api/staff/register/', data);
        return response.data;
    };
    const mutation = useMutation({
        mutationFn: registerData,
        onSuccess: () => {
            setLoading(false)
            toast.success('successful .....');
        },
        onError: (error) => {
            setLoading(false)
            toast.error('Error...');
        },
    })

    const onSubmit = (data: React.FormEvent) => {
        if (data) {
            setLoading(true)
            const formData = new FormData();
            formData.append('first_name ', data.first_name);
            formData.append('last_name  ', data.last_name);
            formData.append('username  ', data.username);
            formData.append('password  ', data.password);
            formData.append('confirm_password  ', data.confirm_password);
            formData.append('file ', fileList[0]);
            mutation.mutate(formData);
        }

    };
    return (
        <Loginlayout >
            <Flex align="start" vertical>
                <Title level={2}>Sign Up</Title>
                <Title level={5}>Enter your information to create an account.</Title>
                <Uploader fileList={fileList} setFileList={setFileList} />
                <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                    <InputControlLayout>
                        <Title level={5}>First name</Title>
                        <input style={InputStyle} placeholder="Please enter your first name" {...register('first_name')} />
                        {errors.first_name && <Paragraph style={errorMessageStyle}>{errors.first_name?.message}</Paragraph>}
                    </InputControlLayout>

                    <InputControlLayout>
                        <Title level={5}>Last name</Title>
                        <input style={InputStyle} placeholder="Please enter your last name" {...register('last_name')} />
                        {errors.last_name && <Paragraph style={errorMessageStyle}>{errors.last_name?.message}</Paragraph>}
                    </InputControlLayout>

                    <InputControlLayout>
                        <Title level={5}>Username</Title>
                        <input style={InputStyle} placeholder="Please enter username" {...register('username')} />
                        {errors.username && <Paragraph style={errorMessageStyle}>{errors.username?.message}</Paragraph>}
                    </InputControlLayout>

                    <InputControlLayout>
                        <Title level={5}>Password</Title>
                        <input style={InputStyle} placeholder="Please enter password" {...register('password')} />
                        {errors.password && <Paragraph style={errorMessageStyle}>{errors.password?.message}</Paragraph>}
                    </InputControlLayout>

                    <InputControlLayout>
                        <Title level={5}>Confirm Password</Title>
                        <input style={InputStyle} placeholder="Please re-enter your password" {...register('confirm_password')} />
                        {errors.confirm_password && <Paragraph style={errorMessageStyle}>{errors.confirm_password?.message}</Paragraph>}
                    </InputControlLayout>

                    <button type="submit" disabled={loading} style={loading ? disableButtonStyle : ButtonStyle}>Submit</button>
                </form>
                <Flex align="start" direction="row">
                    <Paragraph>Already have an account?</Paragraph>
                    <Link to={'/'} style={linkStyle}>Sign in</Link></Flex>
            </Flex>
        </Loginlayout>
    )
}
export default Register