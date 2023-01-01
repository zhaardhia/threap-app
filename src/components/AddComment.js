import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const AddComment = ({ comment }) => {
  const [text, setText] = useState('');
  const authUser = useSelector((state) => state.authUser);

  function addcomment() {
    if (text.trim()) {
      comment(text);
      setText('');
    }
  }

  function handleTextChange({ target }) {
    if (target.value.length <= 320) {
      setText(target.value);
    }
  }

  return (
    <div className="xl:w-[50%] sm:w-[80%] w-[95%] fixed bottom-0 xl:left-[25%] sm:left-[10%] left-3 mx-auto border-2 rounded-t-3xl p-5 flex justify-around gap-4 text-[#565254] bg-white items-center">
      <div className="w-14 h-14 rounded-full align-middle">
        <img src={authUser.avatar} className="rounded-full" alt="user avatar" />
      </div>
      <input name="" id="" cols="10" rows="10" placeholder="Add a comment" className="bg-[#fad4b6] rounded-2xl h-[5rem] w-[60%] p-3" value={text} onChange={handleTextChange}></input>
      <button className="w-[5rem] h-[3rem] rounded-lg bg-slate-100 shadow-md" onClick={addcomment}>Send</button>
    </div>
  );
};

AddComment.propTypes = {
  comment: PropTypes.func.isRequired,
};

export default AddComment;
