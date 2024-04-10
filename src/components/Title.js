import React, { useState, useEffect, useContext } from "react";
import "../styles/Title.css";
import isLoginContext from "../contexts/IsLoginContext";

const Title = () => {
  const { isLogin } = useContext(isLoginContext);
  const [isEditing, setIsEditing] = useState(false);
  const initialTitle = {
    title: "제목을 입력하세요.",
    subTitle: "클릭해서 입력하세요(예. 좌우명 등등)",
  };
  const [editedText, setEditedText] = useState([initialTitle]);

  useEffect(() => {
    const storedText = localStorage.getItem("editedText");
    if (storedText) {
      setEditedText(JSON.parse(storedText));
    }
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    localStorage.setItem("editedText", JSON.stringify(editedText));
  };

  // 입력된 텍스트를 업데이트하는 함수
  const handleTextChange = (event) => {
    const { name, value } = event.target;
    setEditedText((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className='mainContainer'>
        <div className='titleContainer'>
          <div className='titleContent'>
            <div className='textContent'>
              {isLogin ? (
                <>
                  {isEditing ? (
                    <>
                      <input
                        type='text'
                        className='title'
                        name='title'
                        value={editedText.title}
                        onChange={handleTextChange}
                      />
                      <br />
                      <input
                        type='text'
                        name='subTitle'
                        className='subTitle'
                        value={editedText.subTitle}
                        onChange={handleTextChange}
                      />
                    </>
                  ) : (
                    <>
                      <h1 onClick={handleEdit}>
                        <strong>{editedText.title}</strong>
                      </h1>
                      <br />
                      <h5 onClick={handleEdit}>{editedText.subTitle}</h5>
                    </>
                  )}
                </>
              ) : (
                <>
                  <h1>
                    <strong>{initialTitle.title}</strong>
                  </h1>
                  <br />
                  <h5>{initialTitle.subTitle}</h5>
                </>
              )}

              {isEditing ? <button onClick={handleSave}>Save</button> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
