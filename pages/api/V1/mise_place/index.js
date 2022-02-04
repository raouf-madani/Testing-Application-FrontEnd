import auth0 from '@/utils/auth0';
import TestingApi from '@/lib/api/testing';

export default async function me(req, res) {
  try {
    // await auth0.handleProfile(req, res);
    const json = await new TestingApi().getAllmise_en_place();
    return res.json(json.data);
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}
