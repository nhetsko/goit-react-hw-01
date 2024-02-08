export const FriendListItem = ({ data: {avatar, name, isOnline}}) => {
    return (
<div className="friend-item-container">
  <img className="friend-img" src={avatar} alt="Avatar" width="48" />
  <p className="friend-name">{name}</p>
  {isOnline? <p style={{color: 'green'}}>Online</p>: <p style={{color: 'red'}}>Offline</p>}
</div>
    )
}