import React, { useRef, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Quill의 스타일 파일
// import axios from 'axios';

const PostEditor = ({ content, onContentChange }) => {
    const QuillRef = useRef(null);

    // const imageHandler = () => {
    // // 파일을 업로드 하기 위한 input 태그 생성
    //     const input = document.createElement("input");
    //     const formData = new FormData();
    //     input.setAttribute("type", "file");
    //     input.setAttribute("accept", "image/*");
    //     input.click();

    //     input.onchange = async () => {
    //         const file = input.files;
    //         if (file !== null && file[0] !== undefined) {
    //             formData.append(file[0]);

    //             try {
    //                 const response = await axios.post('http://localhost:3001/posts', formData)
    //                 const imageUrl = response.data.url

    //                 const range = QuillRef.current?.getEditor().getSelection()?.index;
    //                 if (range !== null && range !== undefined) {
    //                     let quill = QuillRef.current?.getEditor();

    //                     quill?.setSelection(range, 1);

    //                     quill?.clipboard.dangerouslyPasteHTML(
    //                         range,
    //                         `<img src=${imageUrl} alt="이미지 태그가 삽입됩니다." />`
    //                     );
    //                 }
    //             } catch (error) {
    //                 console.error('이미지 업로드 에러:', error);
    //             }
    //         }
    //      };  
    // };


    const modules = useMemo(() => ({
        toolbar: [
            [{ 'font': [] }],
            [{ 'header': '1' }, { 'header': '2' }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link'],
            ['clean']
        ],
            // handlers: {
            //     image: imageHandler,
            // },
        }),
    []);

    return (
        <div>
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
