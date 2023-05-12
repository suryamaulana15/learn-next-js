'use client';
import { ConfigProvider } from 'antd';

import { theme } from '@/theme';
function AuthClient({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider theme={theme}>
      <div>
        <div className={'m-auto'}>{children}</div>
      </div>
    </ConfigProvider>
  );
}

export default AuthClient;
