import React, { useState, useRef } from "react";
import "../styles/Project.css";
import ProjectModal from "./ProjectModal";
import ProjectItem from "./ProjectItem";

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className='projectContainer'>
        <div className='projectTitleContainer'>
          <div className='projectTitleText'>
            <h1>Project</h1>
          </div>
          <div className='projectAddButton'>
            <button
              onClick={toggleModal}
              style={{ width: "100px", height: "45px", fontSize: "15px" }}
            >
              프로젝트 추가
            </button>
          </div>
        </div>
        <div className='projectSection'>
          <ProjectItem />
        </div>
      </div>
      {isModalOpen && (
        <div className='modalBackground'>
          <div className='modalContent' ref={modalRef}>
            <ProjectModal onClose={toggleModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
