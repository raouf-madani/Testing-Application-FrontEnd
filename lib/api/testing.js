import axios from 'axios';

class TestingApi {
  // constructor(accessToken = null) {
  //   this.config = {};
  //   if (accessToken) {
  //     this.config.headers = {
  //       authorization: `Bearer ${accessToken}`,
  //     };
  //   }
  //   this.apiurl = process.env.COMMANDE_API_URL;
  // }
  getAllcommandes() {
    return axios.get('http://localhost:3001/api/v1/commandes');
  }

  getById_commande(id) {
    return axios.get(`http://localhost:3001/api/v1/commandes/${id}`);
  }
  // mise en place
  getAllmise_en_place() {
    return axios.get('http://localhost:3001/api/v1/miseenplace');
  }
  getmiseById(id) {
    return axios.get(`http://localhost:3001/api/v1/miseenplace/${id}`);
  }
  updatemise(id, data) {
    console.log(id, 'data from lib api', data);
    return axios.patch(
      `http://localhost:3001/api/v1/miseenplace/${id}`,
      data,
      this.config
    );
  }
}

export default TestingApi;
