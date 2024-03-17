import { getMedal } from '../../logic/getMedal';
import type { EisvanaMember } from '../../types/member';

const eisvanaMember: EisvanaMember = {
  avatar: 'https://cdn.discordapp.com/avatars/395993966706688001/5ddb6041c1acd00cabaf27d6464731dd.webp',
  name: 'Lenni',
  desc: 'Hello World',
  medals: [getMedal('warn', 32), getMedal('eisvana'), getMedal('test1'), getMedal('test2')],
  pageLink: './Lenni',
};

export default eisvanaMember;
