import AuthClient from '@/template/AuthLayout';

export const metadata = {
  title: 'Signin',
  description: 'Signin Page',
};

export default function SigninLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      <AuthClient>{children}</AuthClient>
    </body>
  );
}
