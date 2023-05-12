import { Work_Sans } from 'next/font/google';
export const font = Work_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

import { ThemeConfig } from 'antd';

export const theme: ThemeConfig = {
  token: {
    colorPrimary: '#EF233C',
    colorPrimaryBg: '#F5F5F5',
    fontFamily: font.style.fontFamily,
    fontSize: 15,
    // fontWeight: 400,
  },
  components: {
    Link: {
      colorPrimary: 'blue',
    },
  } as any,
};
