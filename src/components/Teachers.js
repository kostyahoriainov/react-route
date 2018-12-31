import React from 'react';
import {teachersList}  from '../data';

const Teachers = () => {
  let teachers = teachersList.map((teacher) => {
    return (
      <li className="teacher" key={teacher.id} >
        <img className="teacher-img" src={teacher.im} alt="teacher" />
        <h3>{teacher.name}</h3>
        <p>{teacher.bio}</p>
      </li>
    );
  }); 
  
  return (
    <div className="main-content">
      <h2>Teachers</h2>
      <ul className="group">
        {teachers}    
      </ul>
    </div>
  );
}

export default Teachers;