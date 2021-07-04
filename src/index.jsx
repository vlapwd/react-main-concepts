import React from 'react';
import ReactDOM from 'react-dom';

function Avatar(props){
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    )
}

function UserInfo(props){
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}

function Comment(props) {
    return(
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {props.date}
            </div>
        </div>
    )
}

// function Comment(props) {
//     return (
//       <div className="Comment">
//         <div className="UserInfo">
//           <img className="Avatar"
//             src={props.author.avatarUrl}
//             alt={props.author.name}
//           />
//           <div className="UserInfo-name">
//             {props.author.name}
//           </div>
//         </div>
//         <div className="Comment-text">
//           {props.text}
//         </div>
//         <div className="Comment-date">
//           {formatDate(props.date)}
//         </div>
//       </div>
//     );
//   }
const data = {
    name:"hoge",
    avatarUrl:"https://1.bp.blogspot.com/-8FUEz6vBnoQ/X7zMVAuhQMI/AAAAAAABcZ0/VI1Z9eN76pIj2rfHshveNbFoMKubXYTpACNcBGAsYHQ/s400/baby_role_towel_utsubuse.png"
}

ReactDOM.render(
    <Comment　author={data} date={new Date().toLocaleTimeString()} />,
    document.getElementById('root')
);