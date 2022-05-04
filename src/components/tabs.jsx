import React,{useState} from 'react'
import { StarRating } from './starRating'
import EmojiRating from 'react-emoji-rating'
import { SubmitReview } from './submitReview'
var initialTabs = []
const questions = [
    'Usage of Real Life examples for each topic discussed:',
    'Level of Understanding:',
    'Usage of Projector,E-Learning Materials etc:',
    'Rate the Doubt clearing ability of the faculty:' 
  ]
var courses = [
    'Python Programming',
    'Data Structures',
    'DBMS',
    'Mathematics-III',
    'Intro to AIDS'
]
const GenerateTabs = () => {
    const [review, setReview] = useState()
      for(const item in courses) {
        initialTabs.push({ 
          id:item.toString(),
          title:courses[item],
          lazy: true,
          panelComponent: (props) => <div style={{display:'flex'}}>
        <table style={{flex:'1'}}>
          <tr>
            <td><h4>Feed Back Section</h4><br /></td>
          </tr>
          <tr>
            <td>
              <div style={{ display: 'flex' }}>
               <p style={{flex:'1'}}>Opinion On this course</p>
                    <textarea
                      value={review}
                      onChange={(e)=>setReview(e.target.value)}
                      id={courses[item] + "_txt_area"}
                      cols="50" rows="5"
                      style={{ flex: '2' }}
                    ></textarea>
              </div>
              </td>
          </tr>
          <tr style={{ listStyle: "none" }}>
          {
            questions.map((q) =>
        <tr style={{display:'flex'}}>
          <td style={{flex:'1'}}><li>{q}</li></td>
                <td>  
                  <StarRating label={courses[item] + "+" + q} />
          </td>
        </tr>)}
            </tr>
          </table>
          <div style={{
            flex: '2',
            textAlign: 'center',
            position:'absolute',
            left: '130%',
            top: '25%',
            resize: 'both',
            zoom: '150%'
          }}>         
                <h6>Overall Feed Back</h6>
                <EmojiRating
                        variant='classic'
              />  
              <SubmitReview data={review}/>
            </div>
      </div>,
        closable: false,
      })
    } 
  return 
}
export {initialTabs,GenerateTabs,questions,courses}