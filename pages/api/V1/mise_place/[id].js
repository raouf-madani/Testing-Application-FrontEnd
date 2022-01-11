import auth0 from '@/utils/auth0';
import TestingApi from '@/lib/api/testing';

export default async function handleCommande(req, res) {
  if (req.method === 'GET') {
    const json = await new TestingApi().getmiseById(req.query.id);
    return res.json(json.data);
  }
  if (req.method === 'PATCH') {
    try {
      const {accessToken} = await auth0.getSession(req);
      const json = await new TestingApi(accessToken).updatemise(
        req.query.id,
        req.body
      );
      return res.json(json.data);
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
