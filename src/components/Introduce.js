import React, { useState, useEffect, useRef } from "react";
import "../styles/Introduce.css";
import noProfileImage from "../assets/images/profile.jpg";

const Introduce = () => {
  const [profileImage, setProfileImage] = useState(noProfileImage);
  const initialText = `<클릭해서 입력하세요>.\n이름 : \n연락처 : \n짧은 자기소개 : \n해당직무에 필요한 기술 : \n어학성적 등 보유한 자격증 : \n자신이 참여했던 프로젝트 이름(또는 경력/경험) : \n이루고 싶은 목표나 비전 : \n`;
  const [introduceText, setIntroduceText] = useState(
    localStorage.getItem("introduceText") || initialText
  );
  const fileInputRef = useRef(null);
  const [isEdit, setIsEdit] = useState(false);
  const textAreaRef = useRef(null);

  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    if (!storedImage) {
      setProfileImage(storedImage);
    } else {
      setProfileImage(noProfileImage);
    }

    const storedText = localStorage.getItem("introduceText");
    if (storedText) {
      setIntroduceText(storedText);
    }
  }, []);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  }, [introduceText]);

  const handleEditToggle = () => {
    setIsEdit(true);
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    const imageURL = URL.createObjectURL(selectedImage);
    setProfileImage(imageURL);
    localStorage.setItem("profileImage", imageURL);
  };

  const handleProfileImageClick = () => {
    fileInputRef.current.click();
  };

  const handleSave = () => {
    setIsEdit(false);
    localStorage.setItem("introduceText", introduceText);
  };

  const handleTextChange = (event) => {
    setIntroduceText(event.target.value);
  };

  return (
    <div className='introduceContainer'>
      <div className='introduceTitleText'>
        <h1>Introduce</h1>
      </div>
      <div className='profileSection'>
        <div className='profileImage'>
          <img
            src={profileImage}
            alt='프로필'
            onClick={handleProfileImageClick}
          />
          <input
            ref={fileInputRef}
            type='file'
            onChange={handleImageChange}
            accept='image/*'
            style={{ display: "none" }}
          />
        </div>
        <div className='introduceText'>
          {isEdit ? (
            <>
              <textarea
                ref={textAreaRef}
                value={introduceText}
                onChange={handleTextChange}
                style={{ width: "100%", height: "91%" }}
                rows={12}
              ></textarea>
              <div className='saveButtonContainer'>
                <button className='saveButton' onClick={handleSave}>
                  저장
                </button>
              </div>
            </>
          ) : (
            <div className='introduceText' onClick={handleEditToggle}>
              {introduceText.split("\n").map((line, index) => (
                <div key={index}>
                  {line}
                  <br />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Introduce;
