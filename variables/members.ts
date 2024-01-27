import { EisvanaMember } from '../types/member';

export const eisvanaMembers: EisvanaMember[] = [
  {
    avatar: 'https://cdn.discordapp.com/avatars/395993966706688001/5ddb6041c1acd00cabaf27d6464731dd.webp',
    name: 'Lenni',
    desc: 'Hello World',
    medals: [
      { type: 'warning', icon: '😀', text: 'hi' },
      { type: 'tip', icon: '😮', text: 'hello world' },
      { type: 'info', icon: '🐸', text: 'baum' },
      { type: 'danger', icon: '🥙', text: 'test' },
    ],
    pageLink: './Lenni',
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/713772682205986886/a3fe5e45a57423b90a3bd770334e37ff.webp',
    name: 'Yuca',
    desc: 'Exoticaholic',
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/341629282658942976/c9d1d9923f1ec9932f8e692807be44f2.webp',
    name: 'Marlose',
    desc: 'Boss-Mentor',
  },
];
