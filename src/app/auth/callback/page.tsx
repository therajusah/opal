import { onAuthenticateUser } from '@/actions/user';
import { redirect } from 'next/navigation';


const AuthCallBackPage = async () => {
    const auth = await onAuthenticateUser();
    if (auth.status === 200 || auth.status === 201) {
      return redirect(`/dashboard/${auth.user?.firstName}${auth.user?.lastName}`);
    }
  
    if (auth.status === 400 || auth.status === 500) {
      return redirect("/auth/sign-in");
    }
  }

export default AuthCallBackPage