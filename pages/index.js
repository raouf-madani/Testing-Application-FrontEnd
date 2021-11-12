import Head from 'next/head';
import Loginpage from '@/components/loginpage';
import Baselayout from '@/components/layouts/baselayout';
import Basepage from '@/components/Basepage';
import Modalnewtest from '@/components/modals/newtest/scanmodal';
import {useGetUser} from '@/actions/user';
import {isAuthorized} from '@/utils/auth0';
import Link from 'next/link';
import React, {useState} from 'react';
import Modal from '@/components/modals/historique/historiquemodal';
import {Spin, Space} from 'antd';

export default function Home() {
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
                    <h1>Bienvenue dans l'Application d'essai</h1>
                    <p className="description">
                      Le menu vous permets d'acceder a plusieurs
                      fonctionnalites. Vous pouvez lancer un nouvel essai en
                      appuyant sur "Nouveau Test". Afin de consulter d'anciens
                      essais effectues. Vous pouvez lancer un nouvel essai en
                      appuyant sur "Nouveau Test". Afin de consulter d'anciens
                      essais effectues Afin de consulter d'anciens essais
                      effectues. Vous pouvez lancer un nouvel essai en appuyant
                      sur "Nouveau Test". Afin de consulter d'anciens essais
                      effectues Afin de consulter d'anciens essais effectues.
                      Vous pouvez lancer un nouvel essai en appuyant sur
                      "Nouveau Test". Afin de consulter d'anciens essais
                      effectues Afin de consulter d'anciens essais effectues.
                      Vous pouvez lancer un nouvel essai en appuyant sur
                      "Nouveau Test". Afin de consulter d'anciens essais
                      effectues Afin de consulter d'anciens essais effectues.
                      Vous pouvez lancer un nouvel essai en appuyant sur
                      "Nouveau Test". Afin de consulter d'anciens essais
                      effectues
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
                            <h2>Editeur d'etape</h2>
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
                      <Modalnewtest modal={modal} toggle={toggle} />
                    </div>
                    <Modal
                      toggle={toggle1}
                      modal={modal1}
                      title="Historique"
                      className="modalContainer"
                      width="100%"></Modal>
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
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </Basepage>
      )}
    </div>
  );
}
