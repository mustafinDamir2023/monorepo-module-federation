import React from 'react';

export const UserCard = ({username}: {username?: string}) => {
    return (
        <div style = {{ border: '1ps solid green', padding: 20}}>
            username: {username ?? 'user'}
            <div>password: 123</div>
        </div>
    )
}