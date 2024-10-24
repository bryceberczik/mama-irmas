import './reviewCard.css';
import ProfilePic from '../../images/tacos.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface ReviewCardProps {
    name: string;
    comment: string;
}

const ReviewCard = ({ comment, name }: ReviewCardProps) => {

    return(

        <div className='review-card-container'>
            <img src={ProfilePic} alt="taco profile picture" />
            <div className="star-container">
            <FontAwesomeIcon icon={faStar} className='star' />
            <FontAwesomeIcon icon={faStar} className='star' />
            <FontAwesomeIcon icon={faStar} className='star' />
            <FontAwesomeIcon icon={faStar} className='star' />
            <FontAwesomeIcon icon={faStar} className='star' />
            </div>
            <div className="comment-container">
                <p>"{comment}"</p>
            </div>
            <div className="full-review">
                <p>Read Full review <FontAwesomeIcon icon={faArrowRight} /> </p>
            </div>
            <div className="name-container">
                <p>{name}</p>
            </div>
        </div>
    )
}

export default ReviewCard;