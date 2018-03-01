import React, { Component } from 'react';
import '../css/CourseListItem.css';

class CourseListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false
    };
  }

  toggleIsSelected = () => {
    this.setState({ isSelected: !this.state.isSelected });
  }

  render() {
    const { isSelected } = this.state;
    const { course } = this.props;

    return (
      <li>
        <button
          onClick={this.toggleIsSelected}
          className={isSelected ? 'isSelected' : ''}
        >
          <span className="course-name">{ course.name }</span>
          <span className="course-credits">{ course.credits }</span>
        </button>
      </li>
    );
  }
}

export default CourseListItem;
