import axios from 'axios';
import BaseApi from './BaseApi';

class CommandeApi extends BaseApi {
  constructor(accessToken) {
    super(accessToken, '/commandes');
  }
}

export default CommandeApi;
