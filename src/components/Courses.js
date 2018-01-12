import React, { Component } from 'react';
import '../css/Courses.css';
import CourseListItem from './CourseListItem';

var testCourses = [
  {
    code: "TIEP1",
    name: "Lausekielinen Ohjelmointi I",
    credits: 5,
    url: "https://www10.uta.fi/opas/opetusohjelma/marjapuuro.htm?id=34877"
  },
  {
    code: "TIEP3",
    name: "Tietokantojen perusteet",
    credits: 5,
    url: "https://www10.uta.fi/opas/opetusohjelma/marjapuuro.htm?id=35528"
  },
  {
    code: "FILP1A",
    name: "Johdatus filosofiaan",
    credits: 2,
    url: "https://www10.uta.fi/opas/opetusohjelma/marjapuuro.htm?id=36647"
  }
]

class Courses extends Component {
  render() {
    return (
      <div className="Courses">
        <ul>
          { testCourses.map((course) => <CourseListItem key={course.code} course={course} />) }
        </ul>
      </div>
    );
  }
}

export default Courses;
