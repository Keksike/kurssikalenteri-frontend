import React, { Component } from 'react';
import '../css/CourseListItem.css';

class CourseListItem extends Component {
    
    render() {
        return (
        <li key={course.code}>
            <button onClick={() => console.log("stringi vaan sinne")}>
              <span className="course-name">{ course.name }</span>
              <span className="course-credits">{ course.credits }</span>
            </button>
        </li>
        );
    }
}

export default CourseListItem;