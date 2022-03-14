import auth0 from '@/utils/auth0';
import TestingApi from '@/lib/api/testing';

export default async function misePlace(req, res) {
  if (req.method === 'GET') {
    try {
      // await auth0.handleProfile(req, res);
      const json = await new TestingApi().getAllmise_en_place();
      return res.json(json.data);
    } catch (error) {
      console.error(error);
      res.status(error.status || 400).end(error.message);
    }
  }
  if (req.method === 'POST') {
    try {
      const {accessToken} = await auth0.getSession(req);
      await new TestingApi(accessToken).createMisePlace(req.body);
      return res.json({message: 'mise en place created'});
    } catch (e) {
      return res.status(e.status || 422).json(e.response.data);
    }
  }
}
