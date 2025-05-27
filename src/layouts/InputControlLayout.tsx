import { Col, Divider, Row } from 'antd';
import { Flex } from 'antd';

const InputControlLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {


    return (
        <Flex align="start" vertical>
            {children}
        </Flex>)

}
export default InputControlLayout