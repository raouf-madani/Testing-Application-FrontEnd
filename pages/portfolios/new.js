import Baselayout from '@/components/layouts/baselayout'
import Basepage from '@/components/Basepage'
import PortfolioForm from '@/components/PortfolioForm'
import Redirect from '@/components/shared/Redirect'
import {useGetUser} from '@/actions/user'
import { useCreatePortfolio } from '@/actions/portfolios';
import {Row, Col} from 'reactstrap'
import withAuth from '@/hoc/withAuth';
const PortfolioNew = () => {
  const {data :user,loading: userLoading} = useGetUser();
  const [createPortfolio, {data, loading, error}] = useCreatePortfolio();
  debugger

  if(data){
    return <Redirect to="/portfolios"/>
  }
  const _CreatePortfolio = (data) => {
    createPortfolio(data)
  }
    return(
      <div>
        <Baselayout user={user} loading={userLoading}>
        <Basepage header="Create Portfolio">
            <Row>
                <Col md="6">
                   <PortfolioForm onSubmit={_CreatePortfolio}/>
                   {error && <div className="alert alert-danger mt-2">{error}</div>}
                </Col>
            </Row>
      </Basepage>
      </Baselayout>
      </div>
    )
  }
  export default withAuth(PortfolioNew)('admin');
  