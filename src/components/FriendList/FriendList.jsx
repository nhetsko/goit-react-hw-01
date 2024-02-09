
import { FriendListItem } from "./FriendListItem";

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

