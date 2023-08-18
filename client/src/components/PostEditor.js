import React, { useRef, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Quill의 스타일 파일
import './PostEditor.css';

const PostEditor = ({ content, onContentChange }) => {
    const QuillRef = useRef(null);

    const modules = useMemo(() => ({
        toolbar: [
            [{ 'font': [] }],
            [{ 'header': '1' }, { 'header': '2' }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link'],
            ['clean']
        ],
        }),
    []);

    return (
        <div className='Editor-Wrapper'>
          <p className='Editor-Title'>What are the details of your problem?</p>
          <span className='Editor-Text'>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</span>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={onContentChange}
            modules={modules}
            ref={QuillRef}
            formats={PostEditor.formats}
            placeholder="내용을 입력하세요..."
          />
        </div>
    );
};
    
PostEditor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet',
  'link', 'image'
];

export default PostEditor;
