import type {Track} from '../types/types.js';
import type {socialLinksType} from "../types/types.js";

import GithubIcon from '../../public/logos/github.svg';
import TelegramIcon from '../../public/logos/telegram-icon.svg';
import VkIcon from '../../public/logos/vk-icon.svg';

export const tracksData: Track[] = [
    {
        artist: 'first song',
        songName: 'first song Name',
        path: '../public/tracks/1.mp3',
        cover: '../public/covers/default-cover.png'
    },
    {artist: 'second song', songName: 'second song Name', path: '../public/tracks/2.mp3'},
    {artist: 'second song', songName: 'three song Name', path: '../public/tracks/2.mp3'},
    {artist: 'second song', songName: 'four song Name', path: '../public/tracks/2.mp3'},
    {artist: 'second song', songName: 'four song Name', path: '../public/tracks/2.mp3'},
    {artist: 'second song', songName: 'four song Name', path: '../public/tracks/2.mp3'},
    {artist: 'second song', songName: 'four song Name', path: '../public/tracks/2.mp3'},
    {artist: 'second song', songName: 'four song Name', path: '../public/tracks/2.mp3'},
]

export const socialLinks: socialLinksType[] = [
    {
        name: 'GitHub',
        url: 'https://github.com/subbotaMan',
        color: '#333',
        icon: <img src={GithubIcon} alt="GitHub" className="social-svg-icon"/>,
    },
    {
        name: 'Telegram',
        url: 'https://t.me/subbotaMan',
        color: '#0088cc',
        icon: <img src={TelegramIcon} alt="Telegram" className="social-svg-icon"/>,

    },
    {
        name: 'VK',
        url: 'https://vk.com/subbotaMan',
        color: '#4C75A3',
        icon: <img src={VkIcon} alt="VK" className="social-svg-icon"/>,
    }
];