import axios from 'axios';

class PortfolioApi {
  constructor(accessToken=null) {
    this.config={}
     if (accessToken) {
       this.config.headers ={
        authorization : `Bearer ${accessToken}`
       }
     }
    this.apiurl=process.env.PORTFOLIO_API_URL
  }

  getAll() {
    return axios.get(this.apiurl)
  }
  getById(id) {
    return axios.get(`${this.apiurl}/${id}`)
  }
  createPortfolio(data) {
    return axios.post(this.apiurl, data, this.config);
  }
  update(id, data) {
    return axios.patch(`${this.apiurl}/${id}`, data, this.config);
  }
  delete(id) {
    return axios.delete(`${this.apiurl}/${id}`, this.config);
  }
}

export default PortfolioApi;