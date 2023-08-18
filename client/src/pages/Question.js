import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTitle, setContent, savePost } from '../actions/postAction';
import PostEditor from '../components/PostEditor';
import Guideline from '../components/Guideline';
import './Question.css'

const Question = () => {
  const title = useSelector((state) => state.title);
  const content = useSelector((state) => state.content);
  const dispatch = useDispatch();

  const handleTitleChange = (event) => {
    dispatch(setTitle(event.target.value));
  };

  const handleSave = () => {
    dispatch(savePost(title, content)); 
  };

  const handleCancel = () => {
    dispatch(setTitle(''));
    dispatch(setContent(''));
  };

  return (
    <div className='Question-Wrapper'>
      <div className='Category-Text'>질문 작성</div>
      <Guideline />
      <div className='Title-Wrapper'>
        <p className='Title-Title'>Title</p>
        <p className='Title-Text'>Be specific and imagine you’re asking a question to another person.</p>
        <input className='Input-Title'
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <PostEditor content={content} onContentChange={(newContent) => dispatch(setContent(newContent))} />
      <div className='Btn-Wrapper'>
        <button className='Post-Save-Btn' onClick={handleSave}>게시</button>
        <button className='Post-Cancel-Btn' onClick={handleCancel}>취소</button>
      </div>
    </div>
  );
};

export default Question;