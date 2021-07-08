import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: '카메라파이 스토어',
      subTitle: '카메라파이 스토어 react',
      at: '2021-07',
      descriptions: [
        {
          content: '카메라파이 스토어 사이트를 react 리뉴얼',
        },
        {
          content: 'git : ',
          postHref: 'https://www.slideshare.net//',
        },
      ],
    },
    {
      title: 'YogiyoToyProjectReact',
      subTitle: 'YogiyoToyProjectReact',
      at: '2021-05',
      descriptions: [
        {
          content: '요기요 사이트를 react로 구현',
        },
        {
          content: 'react,redux,node,mongoDB',
        },
        {
          content: 'git:',
          postHref: 'https://www.slideshare.net//',
        },
      ],
    },
    {
      title: 'YogiyoToyProjectSpring',
      subTitle: 'YogiyoToyProjectSpring',
      at: '2021-03',
      descriptions: [
        {
          content: '요기요 사이트를 Spring로 구현',
        },
        {
          content: 'srping,javaScript,jQuery,Oracle',
        },
        {
          content: 'git:',
          postHref: 'https://www.slideshare.net//',
        },
      ],
    },
  ],
};

export default presentation;
