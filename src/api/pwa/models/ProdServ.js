import * as mongoose from 'mongoose';

const prodservSchema = new mongoose.Schema({
    "IdProdServOK" :{type: String},
    "IdProdServBK" :{type: String},
    "DesProdServ" : {type : String},
    "Indice" : {type: String},
    "Secuencia" : {type : Number}
});

export default mongoose.model(
    'cat_prod_serv',
    prodservSchema,
    'cat_prod_serv'
);