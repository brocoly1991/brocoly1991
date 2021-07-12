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
          postHref: 'https://github.com/brocoly1991/storeReact',
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
          postHref: 'https://github.com/brocoly1991/YogiyoToyProjectReact/',
        },
      ],
    },
  ],
};

export default presentation;
