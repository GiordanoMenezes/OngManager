const connection = require('../database/conection');
const crypto = require('crypto');

module.exports = {

  async findAll(request,response) {

    const ongs = await connection('ong').select('*');
  
    return response.json(ongs);
  
  },
  
  async save(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ong').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })
    response.statusCode = 203;
    return response.json({ id });
  }
};