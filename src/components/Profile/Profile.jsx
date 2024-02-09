import css from './Profile.module.css';
export default function Profile ({name, tag, location, image, stats }) {
    const { likes, views, followers } = stats;

    return (
        <div className={css.profileContainer}>
            <div className={css.profileContent}>
                <img className={css.profileImg}
                    src={image}
                    alt="User avatar"
                />
                <p className={css.profileUserName}>{name}</p>
                <p className={css.profileText}>{tag}</p>
                <p className={css.profileText}>{location}</p>
            </div>

            <ul className={css.profileList}>
                <li className={css.profileItem}>
                    <span>Followers</span>
                    <span style={{fontWeight: 900}}>{followers}</span>
                </li>
                <li className={css.profileItem}>
                    <span>Views</span>
                    <span style={{fontWeight: 900}}>{views}</span>
                </li>
                <li className={css.profileItem}> 
                    <span>Likes</span>
                    <span style={{fontWeight: 900}}>{likes}</span>
                </li>
            </ul>
        </div>
    );
}
