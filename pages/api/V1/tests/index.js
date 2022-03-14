import auth0 from '@/utils/auth0';
import TestingApi from '@/lib/api/testing';

export default async function handleCommande(req, res) {
  if (req.method === 'GET') {
    try {
      // await auth0.handleProfile(req, res);
      const json = await new TestingApi().getallTestResults();
      return res.json(json.data);
    } catch (error) {
      console.error(error);
      res.status(error.status || 400).end(error.message);
    }
  }
  if (req.method === 'POST') {
    try {
      const {accessToken} = await auth0.getSession(req);
      await new TestingApi(accessToken).createTest(req.body);
      return res.json({message: 'test created'});
    } catch (e) {
      return res.status(e.status || 422).json(e.response.data);
    }
  }
  // if (req.method === 'DELETE') {
  //     try {
  //         const { accessToken } = await auth0.getSession(req);
  //         const json = await new PortfolioApi(accessToken).delete(req.query.id);
  //         return res.json(json.data);
  //       } catch(e) {
  //         return res.status(e.status || 422).json(e.response.data);
  //       }
  // }
}
