import StarRatings from "react-star-ratings";
import React,{useState} from 'react'
import _ from 'lodash' 
// import { User } from '../server/models/userModel';

var ratings={}
const StarRating = (props) => {
    const [rate, setRate] = useState(0)
    const handleRating = async (newRating, name) => {
        name = name.split('+')
        _.set(ratings,[name[0],name[1]],newRating)
      setRate(newRating)
      console.log(ratings);
      // User.updateOne({ admissionNo: window.sessionStorage.getItem('admissionNo'), review: JSON.stringify(ratings)})
      }
  return (
          <StarRatings
            rating={rate}
            numberOfStars={5}
            changeRating={handleRating}
            starDimension={30}
            starSpacing={0}
            starRatedColor={'rgb(253, 1, 1)'}
          starEmptyColor={'rgb(109, 122, 130)'}
            starHoverColor={'rgb(253, 253, 1)'}
            name={props.label}
          />
  )
}
export {StarRating}