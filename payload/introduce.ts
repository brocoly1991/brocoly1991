import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '2년 차 개발자로서 주로 웹 서비스를 담당하였습니다.',
    'LGU+ 차세대 TOSS 3.0 PROJECT에서 개발부터 오픈 및 안정화 과정을 경험 하였습니다.',
    '업무 담당 시 PAGE 단위(FRONT-BACK-DB)로 맡아 수행하였습니다.',
    "해당 프로젝트를 통해 'EVENT에 빠르고 정확히 대응하기 위하여 시스템의 복잡도를 낮추는 것'에 대한",
    '중요성을 경험하였고 고민하는 법을 배웠습니다.',
    '-----------------------------------------------------------------------------------------------------------------------------------------------------',
    "볼트 마이크로 사의 프론트엔드-웹-개발자 포지션에 지원하기 위해 '카메라파이 스토어'를 약식으로 구현해보았습니다.",
    '( https://www.youtube.com/channel/UCFs3fyPkiaN9bGgHqMTyjaA/videos )',
    '구현 시 기존소스를 react화 시키면서 반응형 웹 환경에 적합한지를 중점사항으로 생각하였습니다.',
    '-----------------------------------------------------------------------------------------------------------------------------------------------------',
    '개발자로서 담당한 서비스의 사용자들이 지속적인 방문에 시스템오류가 장애물이 되지 않는 시스템 완성도를 지향합니다.',
    '또한 서비스를 더 나은 방향으로 개선하는 방법을 꾸준히 고민할 수 있는 개발자를 지향합니다.',
  ],

  sign: 'Love poem',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
