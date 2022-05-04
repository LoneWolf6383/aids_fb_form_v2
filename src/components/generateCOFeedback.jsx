import React from 'react'
import {Tab,Row,Col,Nav,Button} from 'react-bootstrap'
import { DynDropDown } from './dynDropDown'
// import '../App.css'
export const GenerateCOFeedback = () => {
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
                <Nav.Link eventKey="first">Generate CO</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Extras  </Nav.Link>
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
                      <td style={{flex:'1'}}><DynDropDown label='year'/></td>
                    </tr>
                    <tr class='tdVal' style={{display: 'flex'}}>
                      <td style={{flex:'1'}}><label>Semester:</label></td>
                      <td style={{flex:'1'}}><DynDropDown label='semesters'/></td>
                    </tr>
                    <tr class='tdVal' style={{display: 'flex'}}>
                      <td style={{flex:'1'}}><label>Course ID:</label></td>
                      <td style={{flex:'1'}}><DynDropDown label='courseIds'/></td>
                    </tr>
                    <tr class='tdVal' style={{display: 'flex'}}>
                      <td style={{flex:'1'}}><label>Course Name:</label></td>
                      <td style={{flex:'1'}}><DynDropDown label='courseNames'/></td>
                    </tr>
                    <tr class='tdVal' style={{display: 'flex',width:'100%'}}>
                      <td style={{flex:'1'}}><label>CO 1:</label></td>
                      <td style={{flex:'1',width:'100%'}}><input size='100%' type="text" /></td>
                    </tr>
                    <tr class='tdVal' style={{display: 'flex',width:'100%'}}>
                      <td style={{flex:'1'}}><label>CO 2:</label></td>
                      <td style={{flex:'1',width:'100%'}}><input size='100%' type="text" /></td>
                    </tr>
                    <tr class='tdVal' style={{display: 'flex',width:'100%'}}>
                      <td style={{flex:'1'}}><label>CO 3:</label></td>
                      <td style={{flex:'1',width:'100%'}}><input size='100%' type="text" /></td>
                    </tr>
                    <tr class='tdVal' style={{display: 'flex',width:'100%'}}>
                      <td style={{flex:'1'}}><label>CO 4:</label></td>
                      <td style={{flex:'1',width:'100%'}}><input size='100%' type="text" /></td>
                    </tr>
                    <tr class='tdVal' style={{display: 'flex',width:'100%'}}>
                      <td style={{flex:'1'}}>CO 5:</td>
                      <td style={{flex:'1',width:'100%'}}><input size='100%' type="text" /></td>
                    </tr>
                    </tbody>
                    <Button className='btn btn-success'>Update CO</Button>
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
