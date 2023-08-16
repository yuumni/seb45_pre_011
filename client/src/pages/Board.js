import React, { useState } from 'react';
import PostEditor from '../components/Editor';
import axios from 'axios';

const Board = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleContentChange = (newContent) => {
        setContent(newContent);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handlePostSubmit = async () => {
        try {
            const postData = {
                title: title,
                content: content,
                imageUrl: imageUrl
            };
            const response = await axios.post('http://localhost:3001/posts', postData);
            console.log('게시글 작성 완료:', response.data);
        } catch (error) {
            console.error('게시글 작성 에러:', error);
        }
    };

    const handlePostCancel = () => {
        // 이미지 업로드 취소 처리 및 내용 초기화
        setImageUrl('');
        setContent('');
    };

    return (
        <div>
            <h1>게시글 작성</h1>
            <input
                type="text"
                placeholder="제목을 입력하세요"
                value={title}
                onChange={handleTitleChange}
            />
            <PostEditor
                setContent={handleContentChange}
                setImageUrl={setImageUrl}
            />
            <button onClick={handlePostSubmit}>작성</button>
            <button onClick={handlePostCancel}>작성 취소</button>
        </div>
    );
};

export default Board;
