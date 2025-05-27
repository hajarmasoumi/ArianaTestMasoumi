import React, { useState } from 'react';
import { Upload, Button, message, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadFile, UploadProps } from 'antd/es/upload/interface';

const Uploader: React.FC = ({ fileList, setFileList }) => {

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        // Ensure only one file is in the list
        setFileList(newFileList.slice(-1)); // Keep only the last uploaded file
    };

    const handlePreview = async (file: UploadFile) => {
        let src = file.url as string;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj as File);
                reader.onload = () => resolve(reader.result as string);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    return (
        <Card style={{ width: '100%' }}>
            <Upload
                action="https://www.mockapi.io/api/upload" // Replace with your upload URL
                listType="picture-card"
                fileList={fileList}
                onChange={handleChange}
                onPreview={handlePreview}
                maxCount={1} // Restrict to a single file
                beforeUpload={() => false} // Prevent automatic upload
            >
                {fileList.length < 2 && <Button icon={<UploadOutlined />}>Upload</Button>}
            </Upload>
        </Card>
    );
};

export default Uploader;