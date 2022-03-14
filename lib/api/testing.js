import axios from 'axios';

class TestingApi {
  constructor(accessToken = null) {
    this.config = {};
    if (accessToken) {
      this.config.headers = {
        authorization: `Bearer ${accessToken}`,
      };
    }
    this.apiurl = "https://testing-back-end.vercel.app";
  }
  Commandes;
  getAllcommandes() {
    return axios.get(`${this.apiurl}/api/v1/commandes`);
  }

  getById_commande(id) {
    return axios.get(`${this.apiurl}/api/v1/commandes/${id}`);
  }
  // mise en place
  createMisePlace(data) {
    return axios.post(`${this.apiurl}/api/v1/miseenplace`, data, this.config);
  }
  getAllmise_en_place() {
    return axios.get(`${this.apiurl}/api/v1/miseenplace`);
  }
  getmiseById(id) {
    return axios.get(`${this.apiurl}/api/v1/miseenplace/${id}`);
  }
  updatemise(id, data) {
    console.log(id, 'data from lib api', data);
    return axios.patch(
      `${this.apiurl}/api/v1/miseenplace/${id}`,
      data,
      this.config
    );
  }
  // Tests Reults
  getallTestResults() {
    return axios.get(`${this.apiurl}/api/v1/tests`);
  }
  getTestResultsById(id) {
    return axios.get(`${this.apiurl}/api/v1/tests/${id}`);
  }
  createTest(data) {
    return axios.post(`${this.apiurl}/api/v1/tests`, data, this.config);
  }
  updatetest(id, data) {
    return axios.patch(`${this.apiurl}/api/v1/tests/${id}`, data, this.config);
  }
  // Users
  getallUsers() {
    return axios.get(`${this.apiurl}/api/v1/users`);
  }
}

export default TestingApi;
