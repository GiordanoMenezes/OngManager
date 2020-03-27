const connection = require('../database/conection');

module.exports = {
  
  async create(request,response) {
      
    const {id} = request.body;

    const ongname = await connection('ong')
    .select('name')
    .where('id',id)
    .first();
  

  if (!ongname) {
    return response.status(400).json({error: 'No ONG found with this ID'})
  }

  return response.json(ongname);

}

}