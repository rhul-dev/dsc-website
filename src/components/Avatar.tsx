import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

type AvatarItemProps = {
    src: StaticImageData;
    name: string;
    title: string;
}

const Avatar: FC<AvatarItemProps> = ({src, name, title}) => {
    return (
        <div className='avatar-card'>
            <Image className='avatar-img mt-5 mb-5' src={src} alt={name} />
            <h1 className='text-lg'>{name}</h1>
            <p className='text-xs role'>{title}</p>
        </div>
    )
}

export default Avatar