import Head from 'next/head';
import Loginpage from '@/components/loginpage';
import Baselayout from '@/components/layouts/baselayout';
import Basepage from '@/components/Basepage';
import Modalnewtestscanner from '@/components/modals/newtest/scannermodal';
import {UseGetUser} from '@/actions/user';
import {isAuthorized} from '@/utils/auth0';
import Link from 'next/link';
import React, {useState} from 'react';
import Modal from '@/components/modals/historique/historiquemodal';
import {Spin, Space, Row, Card, Divider} from 'antd';
import TestingApi from '@/lib/api/testing';

export default function Home({commandes}) {
  const {data, loading} = UseGetUser();
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);
  const toggle = () => setModal(!modal);
  return (
    <div>
      <Head>
        <title>Testing App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!loading ? (
        <>
          {data ? (
            <Baselayout user={data} loading={loading}>
              <Basepage className="base-page">
                <main className="Homemain">
                  {/* <Divider
                    dashed
                    orientation="center"
                    style={{
                      color: '#503662',
                      marginBottom: '40px',
                    }}>
                    <h1>Bienvenue à l&apos;application d&apos;essai.</h1>
                  </Divider> */}
                  <h1>Bienvenue à l&apos;application d&apos;essai</h1>

                  <div className="grid">
                    <div className="site-card-border-less-wrapper">
                      <Card
                        onClick={toggle}
                        title="Nouveau Test"
                        bordered={false}
                        style={{width: 250, height: 350, margin: 10}}>
                        <Link href="/#" passHref>
                          <p className="description">
                            Nouveau test vous permet de scanner le code-barres
                            correspondant au transformateur à tester.
                          </p>
                        </Link>
                      </Card>
                    </div>
                    {data && isAuthorized(data, 'admin') && (
                      <div className="site-card-border-less-wrapper">
                        <Card
                          title="Editeur d'etape"
                          bordered={false}
                          style={{width: 250, height: 350, margin: 10}}>
                          <Link href="/editeur" passHref>
                            <p className="description">
                              L&apos;éditeur d&apos;étapes permet aux
                              administrateurs d&apos;application de modifier les
                              étapes de test.
                            </p>
                          </Link>
                        </Card>
                      </div>
                    )}
                    <div className="site-card-border-less-wrapper">
                      <Card
                        onClick={toggle1}
                        title="Historique"
                        bordered={false}
                        style={{width: 250, height: 350, margin: 10}}>
                        <Link href="" passHref>
                          <p className="description">
                            Historique vous permet d&apos;afficher
                            l&apos;ensemble des tests correspondant à votre
                            prévilege.{' '}
                          </p>
                        </Link>
                      </Card>
                    </div>
                    <div className="site-card-border-less-wrapper">
                      <Card
                        title="Rapports"
                        bordered={false}
                        style={{width: 250, height: 350, margin: 10}}>
                        <Link href="/rapports" passHref>
                          <p className="description">
                            Rapports, vous permet de consulter et
                            d&apos;imprimer un rapport à partir d&apos;un test
                            réalisé.
                          </p>
                        </Link>
                      </Card>
                    </div>

                    <div>
                      <Modalnewtestscanner
                        modal={modal}
                        toggle={toggle}
                        direction="index"
                      />
                    </div>
                    <Modal
                      toggle={toggle1}
                      modal={modal1}
                      title="Historique"
                      className="modalContainer"
                      width="100%"
                      commandes={commandes}></Modal>
                  </div>
                </main>
              </Basepage>
            </Baselayout>
          ) : (
            <Loginpage />
          )}
        </>
      ) : (
        <Basepage>
          <Row justify="center">
            <Space size="middle">
              <Spin size="large" />
            </Space>
          </Row>
        </Basepage>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const json = await new TestingApi().getAllcommandes();
  const commandes = json.data;
  return {
    props: {commandes},
    revalidate: 1,
  };
}
