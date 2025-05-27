import { Col, Divider, Row } from 'antd';
import { Button, Card, Flex, Typography } from 'antd';
import Providers from '../providers.tsx';
import { cardBodyStyle, cardStyle } from './style/index.js';

const Loginlayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {



    return (
        <Providers>
            <Row justify="center">
                <Col span={8} />
                <Col span={8} >
                    <Card hoverable style={cardStyle} styles={{ body: cardBodyStyle }}>
                        <img src='/img/Logo.svg' alt="React Logo" />
                        {children}
                    </Card>
                </Col>
                <Col span={8} />
            </Row></Providers>)

}
export default Loginlayout