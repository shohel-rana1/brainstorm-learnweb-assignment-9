import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'
const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="bg-img">
            <h1 className="text-color">The essential skills <br /> we need to learn  for the 21st century</h1>
            <div className="container row mx-auto pb-5">
                {
                    courses.map(course => <Course
                        key={course.key}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;