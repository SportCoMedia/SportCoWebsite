import './Card.css'
import TwitterDescription from './Details/TwitterDescription'
const Card = ({ userData }) => {
    return (
        <div className="card_container">
            <div className="card_image">
                <img src={userData.icon_html} width="300" height="200"></img>
            </div>
            <div className="card_title">{userData.twitter_username}</div>
            <div className="card_body">
                <TwitterDescription twitter_description ={userData.twitter_description}/>
            </div>
        </div>
    )

};

export default Card;