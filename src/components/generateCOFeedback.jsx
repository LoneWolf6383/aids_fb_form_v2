import React,{useState} from 'react'
import {Tab,Row,Col,Nav,Button} from 'react-bootstrap'
import { DynDropDown } from './dynDropDown'
const feedBack = require('../server/models/feedbackModel');
export const GenerateCOFeedback = () => {
  const [academicYear, setAcademicYear] = useState('')
  const [semester, setSemester] = useState('')
  const [courseDetails, setCourseDetails] = useState('')
  const sendFeedback = () => {
    
  }
  return (<>
    <div style={{ backgroundColor: '',height:'100%',width:'100%' }}>
      <h5 style={{
        textAlign: 'center',
        margin: '20px',
        textDecoration: 'overline underline black solid 2px',
        zoom: '150%',
        fontFamily: 'Lucida Handwriting',
        
      }}>Faculty DashBoard</h5>
    </div>
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Generate Course CO Feedback</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={7} style={{width:'80%',backgroundColor:''}}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div style={{backgroundColor:'',width:'100%',height:'100%'}}>
                  <table style={{
                    width:'100%'  
                  }}>
                    <tbody style={{width:'100%'}}>
                    <tr class='tdVal' style={{display: 'flex',width:'100%'}}>
                      <td style={{flex:'1'}}><label>Academic Year:</label></td>
                      <td style={{flex:'1'}}><DynDropDown onChange={val=>{setAcademicYear(val)}} label='year'/></td>
                    </tr>
                    <tr class='tdVal' style={{display: 'flex'}}>
                      <td style={{flex:'1'}}><label>Semester:</label></td>
                      <td style={{flex:'1'}}><DynDropDown onChange={val=>{setSemester(val)}} label='semesters'/></td>
                    </tr>
                    <tr class='tdVal' style={{display: 'flex'}}>
                      <td style={{flex:'1'}}><label>Course Name:</label></td>
                        <td style={{ flex: '1' }}><DynDropDown onChange={val => { setCourseDetails(val) }} label='courseNames' /><label></label></td>
                    </tr>
                    </tbody>
                    <Button className='btn btn-success' onClick={sendFeedback}>Send for Feedback</Button>
                  </table>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">Work In Progress
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
    </>
  )
}
