import React, { Component } from 'react';
import cheerio from 'cheerio';

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
  constructor(props) {
    super(props);
    this.state = {
      courseInputValue: '',
      courseHtml: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({courseInputValue: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(this.state.courseInputValue);
      const htmlData = await response.text();

      const $ = cheerio.load(htmlData)

      console.log($('.ope_email').text().trim())

      this.setState({
        courseHtml: htmlData
      });

    } catch(error) {
      console.log(error);
    }

    this.setState({courseInputValue: ''})
  }

  render() {

    return (
      <div className="Courses">
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.courseInputValue}
            onChange={this.handleChange}
            className="course-input"
            type="text"
            placeholder="Linkki kurssiin..."
          />
        </form>
        <ul>
          { testCourses.map((course) => <CourseListItem key={course.code} course={course} />) }
        </ul>
        <p>{this.state.courseHtml}</p>
      </div>
    );
  }
}

export default Courses;
