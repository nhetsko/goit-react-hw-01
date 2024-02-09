import css from './Friend.module.css';

const FriendListItem = ({ data: {avatar, name, isOnline}}) => {
    return (
<div className={css.friendItemContainer}>
  <img className={css.friendImg} src={avatar} alt="Avatar" width="48" />
  <p className={css.friendName}>{name}</p>
  {isOnline? <p style={{color: 'green'}}>Online</p>: <p style={{color: 'red'}}>Offline</p>}
</div>
    )
}

export default function FriendList ({friends}) {
    return (
<ul className={css.friendContainer}>
	{
        friends.map((friend) => (<li key={friend.id}>
            <FriendListItem data = {friend}/>
        </li> ))}
</ul>
    )
}

