import React, { useState, useEffect, useRef } from "react";
import "../styles/ProjectModal.css";

const Modal = ({ onClose }) => {
  const noLogoImage = "../assets/images/profile.jpg";
  const initialDescription = `프로젝트 기간 : \n프로젝트 개요 : \n활용 기술스택 : \n담당 역할(기여도) : \n강조할 점 : \n성과 : \n느낀 점 : \n주소링크(프로젝트 사이트 or 블로그, 깃헙 주소) : `;
  const [text, setText] = useState(initialDescription);
  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState(noLogoImage);

  const fileInputRef = useRef(null);

  useEffect(() => {
    const storedText = localStorage.getItem("modalText");
    const storedImage = localStorage.getItem("modalImage");

    if (storedText) {
      setText(storedText);
    }

    if (storedImage) {
      setImage(storedImage);
    } else {
      setImage(noLogoImage);
    }
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const textLink = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(
      urlRegex,
      (url) => `<a href="${url}" target="_blank">${url}</a>`
    );
  };

  const formatText = (text) => {
    return text.replace(/\n/g, "<br>");
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleAllSave = () => {
    let savedData = JSON.parse(localStorage.getItem("savedData")) || [];
    const newIndex = savedData.length + 1;

    const newData = {
      id: newIndex, // 배열의 길이를 인덱스로 사용
      image: image,
      text: text,
    };

    savedData.push(newData);
    localStorage.setItem("savedData", JSON.stringify(savedData));
    onClose();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='modalBackground'>
      <div className='modalContent'>
        <div className='modalHeader'>
          <button className='closeButton' onClick={onClose}>
            X
          </button>
        </div>
        <div className='modalBody'>
          <div className='projectLogoImageContainer'>
            <div className='projectLogoImage'>
              {isEditing ? (
                <>
                  <img
                    src={image}
                    alt='프로젝트 로고 사진'
                    onClick={handleImageClick}
                  />

                  <input
                    type='file'
                    accept='image/*'
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </>
              ) : (
                <img src={image} alt='프로젝트 로고 사진' />
              )}
            </div>
          </div>
          <div className='projectDescription'>
            {isEditing ? (
              <textarea
                className='textInput'
                value={text}
                onChange={handleTextChange}
                placeholder='내용을 입력하세요.'
              ></textarea>
            ) : (
              <div
                className='textDisplay'
                dangerouslySetInnerHTML={{ __html: textLink(formatText(text)) }}
              />
            )}
          </div>
        </div>
        <div
          className='modalFooter'
          style={{ justifyContent: isEditing ? "flex-end" : "space-between" }}
        >
          {!isEditing ? (
            <>
              <div className='alertText'>
                저장버튼을 클릭하면 리스트에 추가되고 수정이 불가합니다!
              </div>
              <div className='editButtonContainer'>
                <button onClick={handleEdit}>수정</button>
                <button onClick={handleAllSave}>저장</button>
              </div>
            </>
          ) : (
            <button className='saveButton' onClick={handleSave}>
              저장
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
