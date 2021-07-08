import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/_sample.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '박정선',
    small: '(park jung sun)',
  },
  contact: [
    {
      title: 'pjs19910430@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: '010-2443-3735',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/brocoly1991',
      link: 'https://github.com/brocoly1991',
      icon: faGithub,
    },
    // {
    //   link: 'https://www.facebook.com/iu.loen',
    //   icon: faFacebook,
    // },
    {
      title: 'YouTube',
      link: 'https://www.youtube.com/channel/UCFs3fyPkiaN9bGgHqMTyjaA/videos',
      // icon: faRss,
      icon: faYoutube,
    },
  ],
  notice: {
    title: "This resume is a sample page of 'https://github.com/uyu423/resume-nextjs'.",
    icon: faBell,
  },
};

export default profile;
