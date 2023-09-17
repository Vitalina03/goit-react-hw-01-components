import css from "./FriendListItem.module.css"


export const FriendListItem = ({avatar,name,isOnline}) => {
    return (<li className={css.item}>
    <span className={ isOnline ? `${css.status} ${css.red}`: `${css.status} ${css.fiolet}` }></span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className={css.name}>{name}</p>
  </li>);
};