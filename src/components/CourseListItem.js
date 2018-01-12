import React, { Component } from 'react';
import '../css/CourseListItem.css';

class CourseListItem extends Component {
  render() {
    return (
      <li>
        <button onClick={() => console.log("stringi vaan sinne")}>
          <span className="course-name">{ this.props.course.name }</span>
          <span className="course-credits">{ this.props.course.credits }</span>
        </button>
      </li>
    );
  }
}

export default CourseListItem;
