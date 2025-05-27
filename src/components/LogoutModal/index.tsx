import React, { useState } from 'react';
import { Flex, Modal, Typography } from 'antd';

const LogoutModal: React.FC = ({ handleOk, isModalOpen, setIsModalOpen }) => {
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const modalStyle = {

    }
    const { Title, Paragraph } = Typography;
    return (
        <Modal
            title=""
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            style={modalStyle}
            okText="Log out"
            cancelText="cancle"
            okButtonProps={{
                style: {
                    backgroundColor: '#fff',
                    color: '#000',
                    borderRadius: '4px',
                    width: '40%'
                },
            }}
            cancelButtonProps={{
                style: {
                    backgroundColor: '#0F172A',
                    color: '#fff',
                    borderRadius: '4px',
                    width: '40%'
                },
            }}
        >
            <Flex align="center" style={{ flexDirection: 'column' }}>
                <img src='/img/dangerIcon.svg' />
                <Title level={4}> Log out</Title>
                <Paragraph>Are you sure you want to sign out of your account?</Paragraph>
            </Flex>

        </Modal>

    );
};

export default LogoutModal;