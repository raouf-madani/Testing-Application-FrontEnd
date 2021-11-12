import Baselayout from '@/components/layouts/baselayout';
import Basepage from '@/components/Basepage';
import {useGetUser} from '@/actions/user';
import Portfolioapi from '@/lib/api/portfolios';
import {isAuthorized} from '@/utils/auth0';
import {useState, useEffect} from 'react';
import Card from '@/components/cardtest';

const Rapports = ({rapports: InitialState}) => {
  const {data: user, loading: loadingU} = useGetUser();
  const [rapports, setrapports] = useState(InitialState);
  const [rapportsfinal, setrapportsfinal] = useState([]);
  useEffect(() => {
    setrapportsfinal(
      rapports.filter(rapport => rapport.company.includes('siemens-energy'))
    );
  }, []);
  return (
    <div>
      <Baselayout user={user} loading={loadingU}>
        <Basepage className="rapports-page" header="Rapports Page">
          <div className=" rapports-container ">
            <div className=" row ">
              {isAuthorized(user, 'guest') &&
                rapportsfinal.map(rapport => (
                  <div className="col-md-6 col-lg-6 " key={rapport._id}>
                    <Card rapport={rapport} />
                  </div>
                ))}
              {isAuthorized(user, 'admin') &&
                rapports.map(rapport => (
                  <div className="col-md-6 col-lg-4 " key={rapport._id}>
                    <Card rapport={rapport} />
                  </div>
                ))}
            </div>
          </div>
        </Basepage>
      </Baselayout>
    </div>
  );
};

export async function getStaticProps() {
  const json = await new Portfolioapi().getAll();
  const rapports = json.data;
  return {
    props: {rapports},
  };
}
export default Rapports;
