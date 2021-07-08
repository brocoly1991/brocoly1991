import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Java',
      // level: 3,
    },
    {
      title: 'Spring',
      // level: 2,
    },
    {
      title: 'Node.js',
      // level: 1,
    },

  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'Oracle',
    },
    {
      title: 'MongoDB',
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'React.js',
    },
    {
      title: 'WebSquare',
    },
    {
      title: 'javascript',
    },
    {
      title: 'HTML/CSS',
    },
    {
      title: 'jQuery',
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Git / Github',
    },
    {
      title: 'Jira',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [frontend,backend, database, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
