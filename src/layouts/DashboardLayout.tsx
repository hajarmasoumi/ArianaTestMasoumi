import { Col, Row } from 'antd';
import { Button, Flex, Typography } from 'antd';
import Providers from '../providers.tsx';
import { LogoutOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react'
import LogoutModal from '../components/LogoutModal/index.tsx';
import { containStyle, emailStyle, nameStyle } from './style/index.js';
import { useNavigate } from 'react-router-dom';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const token = localStorage.getItem('token')
    const { Title, Paragraph } = Typography;
    const [isModalOpen, setIsModalOpen] = useState(false)
    let navigate = useNavigate();

    useEffect(() => {
        if (!token) navigate("/");
    }, [token])
    const handleLogOut = () => {
        setIsModalOpen(true)
    }
    const handleOk = () => {
        localStorage.clear();
        setIsModalOpen(false)

    }
    return (
        <Providers>
            <LogoutModal
                setIsModalOpen={setIsModalOpen}
                isModalOpen={isModalOpen}
                handleOk={handleOk} />
            <Row justify="center">
                <Col span={5}
                    style={containStyle}>
                    <Flex align="center" style={{ flexDirection: 'column' }}>
                        <img src='/img/person.jpg' width={64} height={64} style={{ borderRadius: '100%' }} />
                        <Paragraph style={nameStyle}>Shahab Hosseini</Paragraph>
                        <Paragraph style={emailStyle}>@ShahabH</Paragraph>
                    </Flex>
                    <Flex align="end" >
                        <Button onClick={handleLogOut} type="primary" danger icon={<LogoutOutlined />} style={{ width: '100%' }}>
                            Logout
                        </Button>
                    </Flex>

                </Col>
                <Col span={19} style={{ padding: '20px' }}>
                    <Flex align="start" >
                        <img src='/img/Logo.svg' width={118} height={30} alt="React Logo" />
                    </Flex>
                    <Flex align="center" justify="center" style={{ height: '100%' }} >
                        {children}
                    </Flex>

                </Col>
            </Row>
        </Providers >)

}
export default DashboardLayout