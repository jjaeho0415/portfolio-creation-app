import React from "react";
import "../styles/ProjectItem.css";

const SavedItem = ({ data, onDeleteItem }) => {
  const handleDeleteClick = () => {
    onDeleteItem(data.id);
  };
  return (
    <div className='projectItem'>
      <div className='logoImageBox'>
        <img src={data.image} alt='프로젝트 이미지' />
      </div>
      <div className='projectItemDescription'>
        <div
          className='descriptionText'
          dangerouslySetInnerHTML={{ __html: data.text }}
        />
      </div>
      {data && (
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
          onClick={handleDeleteClick}
        >
          삭제
        </button>
      )}
    </div>
  );
};

const SavedList = ({ onDeleteItem }) => {
  const savedData = JSON.parse(localStorage.getItem("savedData")) || [];

  return (
    <div>
      {savedData.map((item) => (
        <SavedItem key={item.id} data={item} onDeleteItem={onDeleteItem} />
      ))}
    </div>
  );
};

const ProjectItem = () => {
  const handleDeleteItem = (id) => {
    const savedData = JSON.parse(localStorage.getItem("savedData")) || [];
    const updatedData = savedData.filter((item) => item.id !== id);
    localStorage.setItem("savedData", JSON.stringify(updatedData));
  };
  return (
    <div className='projectItemLists'>
      <SavedList onDeleteItem={handleDeleteItem} />
    </div>
  );
};

export default ProjectItem;
