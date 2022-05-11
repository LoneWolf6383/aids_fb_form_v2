import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'

export const SubmitReview = (props) => {
    const [error, setError] = useState('')
    async function handleSubmit(review_txt){
        try {
            const val = {
                username: window.sessionStorage.getItem('username'),
                review:props.ratings        
            }
            const data = []
            console.log('before post');
            const { data: res } = await axios.post('http://localhost:3001/feedback/review', val)
            console.log('after post');
            
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
                    position: "relative",
                }}>Submit</Button>     
                <p>{error}</p>
            </div>
  )
}
