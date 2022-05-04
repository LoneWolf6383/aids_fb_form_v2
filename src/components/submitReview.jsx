import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'

export const SubmitReview = (props) => {
    const [error, setError] = useState('')
    async function handleSubmit(review_txt){
        try {
            console.log(1);
            console.log('Before val',window.sessionStorage.getItem('admissionNo'));
            const val = {
                admissionNo: window.sessionStorage.getItem('admissionNo'),
                review:review_txt
            }
            console.log(val);
                const url = 'http://localhost:3001/feedback/review'
                await axios.post(url, val)
            } catch (error) {
                if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                    setError(error.response.data.message)
                }
           }
        }
        return (
            <div>
                <Button
                type="submit"
                className='btn btn-primary'
                onClick={()=>{handleSubmit(props.data)}}
                style={{
                    position: "absolute",
                    left: '25%',
                    top: '140%'
                }}>Submit</Button>
                <p>{error}</p>
            </div>
  )
}
