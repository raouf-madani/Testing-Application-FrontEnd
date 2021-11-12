import Baselayout from '@/components/layouts/baselayout'
import Basepage from '@/components/Basepage'
import PortfolioCard from '@/components/PortfolioCard'
import { Row, Col, Button } from 'reactstrap';
import {useRouter} from 'next/router'
import {useGetUser} from '@/actions/user'
import { useDeletePortfolio } from '@/actions/portfolios'
import Portfolioapi from '@/lib/api/portfolios'
import { isAuthorized } from '@/utils/auth0';
import { useState } from 'react'


const Portfolio = ({portfolios : InitialState}) => {
  const [portfolios, setportfolios] = useState(InitialState);
  const router = useRouter();
 const {data :user,loading:loadingU} = useGetUser();
 const [deletePortfolio, {data, error, loading}] = useDeletePortfolio();

 const _deletePortfolio = async (e, portfolioId) => {
  e.stopPropagation();
  const isConfirm = confirm('Are you sure you want to delete this portfolio?');
  if (isConfirm) {
    await deletePortfolio(portfolioId);
    setportfolios(portfolios.filter( portfolio => portfolio._id !== portfolioId));
  }
}

    return(
      <div>
      <Baselayout user={user} loading={loadingU}>
      <Basepage className="portfolio-page" header="portfolios">
        <Row>
        { portfolios.map(portfolio =>
          <Col 
          key={portfolio._id} 
          md="4"
          onClick={()=>{
            router.push('/portfolios/[id]',`/portfolios/${portfolio._id}`)
          }}>
            <PortfolioCard portfolio={portfolio}>
             {user && isAuthorized(user, 'admin') &&
             <>
             <Button
               className="mr-2"
               color="warning"
               onClick={(e) => {
                e.stopPropagation(); 
                router.push('/portfolios/[id]/edit',`/portfolios/${portfolio._id}/edit`)}
               }
             >Edit</Button>
             <Button
              onClick={(e) => _deletePortfolio(e, portfolio._id)}
             color="danger">Delete</Button>
             </>
             }
            </PortfolioCard>
          </Col>
          )
        }
      </Row>
      </Basepage>
      </Baselayout>
      </div>
    )
  }

  export async function getStaticProps() {
    const json = await new Portfolioapi().getAll();
    const portfolios = json.data;
    return {
      props : {portfolios}
    }
    
  }
  export default Portfolio