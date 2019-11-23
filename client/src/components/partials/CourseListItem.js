import React, { Component } from "react";

const CourseListItem = props => {

    const {course} = props;

    return (
        <div className="container course-list-item">
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4 pt-1">
                
                {course.name} | {course.instructor} <br></br>

                {course.catagories.map((category, index) =>  
                    <span key={index}>{category}, </span>
                )}

                </div>
                <div className="col-4 d-flex justify-content-end align-items-center"></div>          
            </div>
        </div>
    )
}

export default CourseListItem