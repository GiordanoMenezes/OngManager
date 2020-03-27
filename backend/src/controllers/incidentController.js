const connection = require('../database/conection');

module.exports = {

  async findAll(request,response) {

    //paginacao
    const {page = 1} = request.query;

    //coloco em colchetes pq o método retorna um array, e quero retornar o primeiro indice do array.
    const [count] = await connection('incident').count();

    //retornaremos o total de registros no header da nossa resposta
    //criaremos uma propriedade no header chamada X-Total-Count
    response.header('X-Total-Count', count['count(*)']);

    const incidents = await connection('incident')
    .join('ong','ong.id','=','incident.ong_id')
    .select(['incident.*','ong.name','ong.email','ong.whatsapp','ong.city','ong.uf'])
    .limit(5)
    .offset((page - 1)*5);
  
    return response.json(incidents);
  
  },

  async findByProfile(request,response) {

    const ong_id = request.headers.authorization;

    const incidents = await connection('incident')
    .select('*')
    .where('ong_id',ong_id);

    return response.json(incidents);

  },
  
  async save(request, response) {
    const { title, description, value} = request.body;

    // authorization é o nome do cabeçalho que criamos na requisição
    const ong_id = request.headers.authorization;

    const [id] = await connection('incident').insert({
      title,
      description,
      value,
      ong_id
    })
    response.statusCode = 203;
    return response.json({ id });
  },

  async delete(request,response) {

    const {id} = request.params;

    const ongrequest_id = request.headers.authorization;
    
    const incdel = await connection('incident')
    .select('ong_id')
    .where('id',id)
    .first();

    if (!incdel) {
      return response.status(404).json({error: 'Incident not found!'});
    };

    if (incdel.ong_id !== ongrequest_id) {
      return response.status(401).json({error: 'Acess Denied!'});
    };

    await connection('incident').where('id',id).delete()

    return response.status(204).send();
  }
};