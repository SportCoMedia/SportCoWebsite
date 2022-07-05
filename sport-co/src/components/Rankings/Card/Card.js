import './Card.css'
import TwitterDescription from './Details/TwitterDescription'
const Card = ({ userData }) => {
    return (
        <div className="card">
            <div className="card_title">{userData.twitter_username}</div>
            <div className="card_body">
                <TwitterDescription twitter_description ={userData.twitter_description}/>
                <div className="card_image"><img src={userData.twitter_profile_image_url}></img></div>
            </div>
        </div>
    )

};

export default Card;