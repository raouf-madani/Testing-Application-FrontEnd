
class TestingApi {
  constructor(accessToken = null) {
    // this.config = {};
    // if (accessToken) {
    //   this.config.headers = {
    //     authorization: `Bearer ${accessToken}`,
    //   };
    // }
    // this.apiurl = process.env.COMMANDE_API_URL;
  }
  Commandes;
  getAllcommandes() {
    return axios.get(`https://testing-back-end.vercel.app/api/v1/commandes`);
  }

  getById_commande(id) {
    return axios.get(
      `https://testing-back-end.vercel.app/api/v1/commandes/${id}`
    );
  }
  // mise en place
  getAllmise_en_place() {
    return axios.get(`https://testing-back-end.vercel.app/api/v1/miseenplace`);
  }
  getmiseById(id) {
    return axios.get(
      `https://testing-back-end.vercel.app/api/v1/miseenplace/${id}`
    );
  }
  updatemise(id, data) {
    console.log(id, 'data from lib api', data);
    return axios.patch(
      `https://testing-back-end.vercel.app/api/v1/miseenplace/${id}`,
      data,
      this.config
    );
  }
  // Tests Reults
  getallTestResults() {
    return axios.get(`https://testing-back-end.vercel.app/api/v1/tests`);
  }
  getTestResultsById(id) {
    return axios.get(`https://testing-back-end.vercel.app/api/v1/tests/${id}`);
  }
  createTest(data) {
    return axios.post(`https://testing-back-end.vercel.app/api/v1/tests`, data);
  }
  updatetest(id, data) {
    return axios.patch(
      `https://testing-back-end.vercel.app/api/v1/tests/${id}`,
      data,
      this.config
    );
  }
}

export default TestingApi;
