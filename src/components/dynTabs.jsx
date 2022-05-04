import React from 'react'
import useDynTabs from 'react-dyn-tabs'
import EmojiRating from 'react-emoji-rating'
import { SubmitReview } from './submitReview'
import { initialTabs, GenerateTabs, questions} from './tabs'
import { StarRating } from './starRating'
export const DynTabs = () => {
    GenerateTabs()
    var options = {
      tabs: [
        {
          id: '0',
          title: '+',
          panelComponent: (props) => <>
            <h4> Add New Course</h4> 
            <input id='course_name_ip' type="text" placeholder='Course Name' />&nbsp;
            <button className='btn btn-success' onClick={createNewTabs}>Create</button>
          </>,
          closable: false,
        },
      ],
      selectedTabID: '1',
      isVertical: true
    }
    // for (const key in initialTabs) {
    //   initialTabs[key]['id']=(parseInt(key)+1).toString()
    // }
    options=options.tabs.concat(initialTabs)
    const createNewTabs = () => {
      options.tabs.push(actions.openNewTab())
      document.getElementById('course_name_ip').value=''
    }
    const actions = {
      openNewTab: () => {
        _instance.open({  
          title: document.getElementById('course_name_ip').value,
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
                 <textarea name="" id="" cols="50" rows="5" style={{ flex: '2' }}></textarea>
                </div>
                </td>
              </tr>
              <tr style={{ listStyle: "none" }}>
                {
                  questions.map((q) =>
                  <tr style={{display:'flex'}}>
                    <td style={{flex:'1'}}><li>{q}</li></td>
                    <td>  
                        <StarRating label={document.getElementById('course_name_ip')+ "+" + q} />
                    </td>
                    </tr>)
                }
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
              <SubmitReview data={document.getElementById(document.getElementById('course_name_ip').value+"_txt_area").value}/>
              </div>
        </div>,
          closable: true,
        })
      },
      // toggleVertical: () => {
      //   const _isVertical = _instance.getOption('isVertical');
      //   _instance.setOption('isVertical', !_isVertical).refresh();
      // },
    }
    let _instance
    const [TabList, PanelList, ready] = useDynTabs(options)
    ready((instance) => {
      _instance = instance
    })
    return (
        <><TabList /><PanelList /></>
  )
}
