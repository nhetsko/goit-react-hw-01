export default function Profile ({name, tag, location, image, stats }) {
    const { likes, views, followers } = stats;

    return (
        <div className="profile-container">
            <div className="profile-content">
                <img className="profile-img"
                    src={image}
                    alt="User avatar"
                />
                <p className="profile-usermane">{name}</p>
                <p className="profile-text">{tag}</p>
                <p className="profile-text">{location}</p>
            </div>

            <ul className="profile-list">
                <li className="profile-item">
                    <span>Followers</span>
                    <span style={{fontWeight: 900}}>{followers}</span>
                </li>
                <li className="profile-item">
                    <span>Views</span>
                    <span style={{fontWeight: 900}}>{views}</span>
                </li>
                <li className="profile-item"> 
                    <span>Likes</span>
                    <span style={{fontWeight: 900}}>{likes}</span>
                </li>
            </ul>
        </div>
    );
}
