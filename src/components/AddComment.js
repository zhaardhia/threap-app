/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ButtonAdd from './ButtonAdd';

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
    <div className="xl:w-[50%] md:w-[70%] sm:w-[80%] w-[95%] mx-auto border-[0.1rem] border-dotted rounded-2xl p-5 flex flex-col gap-4 text-[#565254]  items-center">
      {/* <div className="w-14 h-14 rounded-full align-middle">
        <img src={authUser.avatar} className="rounded-full" alt="user avatar" />
      </div> */}
      <p className="text-lg">Fill your thoughts up here:</p>
      <textarea name="" id="" cols="10" rows="10" placeholder="What's on your mind?" className="bg-[#EEE9DA] rounded-2xl h-[5rem] w-[90%] p-3 shadow-lg" value={text} onChange={handleTextChange}></textarea>
      <ButtonAdd
        ctaLabel="Add Comment"
        type="addComment"
        onClick={addcomment}
        style="w-[90%]"
      />
    </div>
  );
};

AddComment.propTypes = {
  comment: PropTypes.func.isRequired,
};

export default AddComment;
