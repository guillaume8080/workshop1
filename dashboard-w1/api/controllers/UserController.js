/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const {JsonDB, Config} = require('node-json-db')
const {fs , createReadStream} = require('fs');
const {readline} = require('readline');

module.exports = {

  import: {Config: Config, JsonDB: JsonDB},

  recordUser: async function  (req, res){
    const login = req.body.login;
    const password = req.body.pw;

    var db = new JsonDB(new Config("db.json", true, true, '/'));
    await db.push("/users" , req.body , false);


  },

  signIn: async function  (req, res){

    const userToOverWrite = {};

    var jwt = require('jsonwebtoken');

    const key = await  getPrivateKey();


    var token = jwt.sign({ user: 'isOK' }  , key ,{expiresIn: '1h'});

    return res.view("pages/cachemanager" , {token : token});

  }

};

  async function getPrivateKey(){
   let privateKey;
   var file = createReadStream("akey.json");
   file.on('data', async function (chunk) {
     console.log(chunk.toString());
     const fluxAsString = chunk.toString();
     const objet = JSON.parse(fluxAsString);

     privateKey = await objet.key;
   });

   return "vz5g405rnt4he-reh14h25te1grj56rzy4qhrde5tj56";


}

