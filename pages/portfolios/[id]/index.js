import Baselayout from '@/components/layouts/baselayout'
import Basepage from '@/components/Basepage'
import {useGetUser} from '@/actions/user'
import { useRouter } from 'next/router'
import React from 'react'
import { useGetPortfolio } from '@/actions/portfolios'
const Portfolio = () => {
    const router = useRouter();
    const {data : portfolio} = useGetPortfolio(router.query.id);
    const {data :dataU,loading:loadingU} = useGetUser();
        return(
            <div>
                <Baselayout user={dataU} loading={loadingU}>
                <Basepage header="portfolio detail">
                    {
                   JSON.stringify(portfolio)
                    }
                </Basepage>
                </Baselayout>
            </div>
        )
}

export default Portfolio;