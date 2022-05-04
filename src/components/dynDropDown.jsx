import axios from 'axios'
import React from 'react'
import { Form } from 'react-bootstrap'
export const DynDropDown = (props) => {
  const data=[]
  var final=[]
  
    var courseNames = []
    const getCourseNames = async() => {
      const { data: res } = await axios.post('http://localhost:3001/getAllCourseNames')
      courseNames = res
      console.log(courseNames);
    }
    var courseIds = []
    const getCourseIds = async() => {
      const { data: res } = await axios.post('http://localhost:3001/getAllCourseIds')
      courseIds = res
      console.log(courseIds);
    }
    
    var years=['I','II','III','IV']
    var semesters = [1, 2, 3, 4, 5, 6, 7, 8]
    if (props.label === 'courseNames') {
      final = courseNames
  }
  else if (props.label === 'courseIds'){
    final = courseIds
  }
  else if(props.label === 'semesters')
  final = semesters
  else if (props.label === 'year')
    final = years
    return (
    <div>
      {console.log('eh')}
        <Form.Select id="dropdown-basic-button" title="Dropdown button">
        {final.map((val)=>
          <option>{val}</option>
          )}
      </Form.Select>
      {/* <button onClick={getCourseNames}></button> */}
    </div>
  )
}
