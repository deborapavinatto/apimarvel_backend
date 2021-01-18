import api from '../services/api';

class UseController {
  async index(req, res) {
    const { data } = await api.get('/characters');
    try {
      return res.json(data.data);
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }

  async show(req, res) {
    const { characterid } = req.params;
    const { data } = await api.get(`/characters/${characterid}`);

    try {
      return res.json(data.data.results);
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }
}

export default new UseController();
