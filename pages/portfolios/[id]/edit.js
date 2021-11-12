import Baselayout from '@/components/layouts/baselayout'
import Basepage from '@/components/Basepage'
import { toast } from 'react-toastify';
import {useGetUser} from '@/actions/user'
import { useRouter } from 'next/router'
import Redirect from '@/components/shared/Redirect'
import React from 'react'
import { useGetPortfolio, useUpdatePortfolio } from '@/actions/portfolios'
import PortfolioForm from '@/components/PortfolioForm'
import {Row, Col} from 'reactstrap'
const Portfolio = () => {
    const router = useRouter();
    const {data : portfolio} = useGetPortfolio(router.query.id);
    const {data :dataU,loading:loadingU} = useGetUser();
    const [updatPortfolio, {data, error, loading}] = useUpdatePortfolio();
    const _updatePortfolio = async (data) => {
        await updatPortfolio(router.query.id, data);
        toast.success('Portfolio has been updated!', {autoClose: 2000})
    }
        return(
            <div>
                <Baselayout  user={dataU} loading={loadingU}>
                <Basepage header="Portfolio Edit">
                   <Row>
                        <Col md="6">
                            {portfolio &&
                             <PortfolioForm 
                             onSubmit={_updatePortfolio}
                             initialData={portfolio}/>
                            }
                            { error &&
                             <div className="alert alert-danger mt-2">{error}</div>
                            }
                        </Col>
                 </Row>
                </Basepage>
                </Baselayout>
            </div>
        )
}

export default Portfolio;