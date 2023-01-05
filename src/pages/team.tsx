import React, { FC } from "react";
import Avatar from "../components/Avatar";
import AhmdedAvatar from '../../public/avatars/ahmed-avatar.png';
import AnhAvatar from '../../public/avatars/anh-avatar.png';
import JakebAvatar from '../../public/avatars/jake-b-avatar.png';
import JakecAvatar from '../../public/avatars/jake-c-avatar.png';
import MaxAvatar from '../../public/avatars/max-avatar.png';
import SanjithAvatar from '../../public/avatars/sanjith-avatar.png';
import SinclairAvatar from '../../public/avatars/sinclair-avatar.png';

const Team: FC = () => {
    return (
        <>
            <div className="justify-center flex mt-10 mb-10 team-title">Meet the Team</div>
            <div className="justify-center flex">
                <Avatar src={AhmdedAvatar} name='Ahmed' title='Project Management'/>
                <Avatar src={AnhAvatar} name='Anh' title='Core Management'/>
                <Avatar src={JakebAvatar} name='Jake Barr' title='Core Management'/>
                <Avatar src={JakecAvatar} name='Jake Cornwell' title='Project Management'/>
                <Avatar src={MaxAvatar} name='Max' title='Founder'/>
                <Avatar src={SanjithAvatar} name='Sanjith' title='Marketing'/>
                <Avatar src={SinclairAvatar} name='Sinclair' title='Core Managment'/>
            </div>
        </>
    );
}

export default Team;