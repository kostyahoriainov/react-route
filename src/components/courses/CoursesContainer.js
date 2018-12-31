import React from 'react';
import Course from './Course';

const CoursesContainer = (props) => {
    const courses = props.data.map(course => {
        return <Course title={course.title}
            desc={course.description}
            img={course.im}
            key={course.id} />
    });

    return (
        <div>
            <ul>
                {courses}
            </ul>
        </div>
    )
};

export default CoursesContainer;