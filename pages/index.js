import Head from 'next/head';
import Loginpage from '@/components/loginpage';
import Baselayout from '@/components/layouts/baselayout';
import Basepage from '@/components/Basepage';
import Modalnewtest from '@/components/modals/newtest/scanmodal';
import Modalnewtestscanner from '@/components/modals/newtest/scannermodal';
import {useGetUser} from '@/actions/user';
import {isAuthorized} from '@/utils/auth0';
import Link from 'next/link';
import React, {useState} from 'react';
import Modal from '@/components/modals/historique/historiquemodal';
import {Spin, Space, Row} from 'antd';
import TestingApi from '@/lib/api/testing';

export default function Home({commandes}) {
  const {data, loading} = useGetUser();
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
                  <div>
                    <h1>Bienvenue dans l&apos;Application d&apos;essai</h1>
                    <p className="description">
                      Le menu vous permets d&apos;acceder a plusieurs
                      fonctionnalites. Vous pouvez lancer un nouvel essai en
                      appuyant sur &apos;Nouveau Test&apos;. Afin de consulter
                      d&apos;anciens essais effectues. Vous pouvez lancer un
                      nouvel essai en appuyant sur &apos;Nouveau Test&apos;.
                      Afin de consulter d&apos;anciens essais effectues Afin de
                      consulter d&apos;anciens essais effectues. Vous pouvez
                      lancer un nouvel essai en appuyant sur &apos;Nouveau
                      Test&apos;. Afin de consulter d&apos;anciens essais
                      effectues Afin de consulter
                    </p>
                  </div>
                  <div className="grid">
                    <Link href="/#">
                      <a
                        className={`nav-link port-navbar-link card`}
                        onClick={toggle}>
                        <h2>Nouveau Test</h2>
                      </a>
                    </Link>
                    {data && isAuthorized(data, 'admin') && (
                      <>
                        <Link href="/editeur">
                          <a className={`nav-link port-navbar-link card`}>
                            <h2>Editeur d&apos;etape</h2>
                          </a>
                        </Link>
                      </>
                    )}
                    <Link href="">
                      <a
                        className={`nav-link port-navbar-link card`}
                        onClick={toggle1}>
                        <h2>Historique</h2>
                      </a>
                    </Link>
                    <Link href="/rapports">
                      <a className={`nav-link port-navbar-link card`}>
                        <h2>Rapports</h2>
                      </a>
                    </Link>
                    <div>
                      {/* <Modalnewtest
                        modal={modal}
                        toggle={toggle}
                        direction="#"
                      /> */}
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
