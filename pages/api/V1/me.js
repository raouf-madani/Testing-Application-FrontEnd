import auth0 from '@/utils/auth0';
import TestingApi from '@/lib/api/testing';

export default async function me(req, res) {
  try {
    await auth0.handleProfile(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}

// export default async function memongodb(req, res) {
//   try {
//     const json = await new TestingApi().getallUsers();
//     return res.json(json.data);
//   } catch (error) {
//     console.error(error);
//     res.status(error.status || 400).end(error.message);
//   }
// }
