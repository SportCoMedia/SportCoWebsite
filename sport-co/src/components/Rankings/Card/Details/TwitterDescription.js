import './TwitterDescription.css'

const TwitterDescription = ({ twitter_description }) => {
    return (
        <div className="twitter_description">
            <p>{twitter_description}</p>
        </div>
    )
}

export default TwitterDescription;