import { useGetUser } from '@/actions/user';
import Redirect from '@/components/shared/Redirect';
import { isAuthorized } from '@/utils/auth0';
const withAuth = (Component) => role =>  {
  return props => {
    const { data, loading } = useGetUser();

    if (loading) {
      return <p>Loading...</p>
    }
    if (!data) {
      // Todo: Improve return
      return <Redirect ssr to="/api/V1/login"/>
      //router.push('/api/v1/login');
    } else {
      if (role && !isAuthorized(data, role)) {
        return <Redirect ssr to="/api/V1/login" />
      }
      return <Component user={data} loading={loading} {...props}/>
    }
  }
}

export default withAuth;