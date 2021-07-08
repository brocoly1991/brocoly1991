import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '비트캠프',
      subTitle: '자바기반 웹&앱 개발자 양성과정',
      startedAt: '2018-03',
      endedAt: '2018-09',
    },
    {
      title: '서일대학교',
      subTitle: 'University',
      startedAt: '2015-03',
      endedAt: '2018-02',
    },
    {
      title: '덕수고등학교',
      subTitle: 'high school',  
      startedAt: '2007-03',
      endedAt: '2010-02',
    }
  ],
};

export default education;
