import React, { Component } from "react";
import CourseListItem from "./CourseListItem";

const CourseList = props => {

    const { courses } = props;

    return (
        <div className="container course-list"><br></br><br></br><br></br>
            {courses.map((course) =>  
                <CourseListItem key={course.id} course={course} />
            )}
        </div>
    )
}

export default CourseList