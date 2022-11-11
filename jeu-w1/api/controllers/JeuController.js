/**
 * JeuController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


const {JsonDB, Config} = require('node-json-db')
module.exports = {

  import: {Config: Config, JsonDB: JsonDB},

  testJsonDB: async function  (req, res) {

    const idquizz = 1;
    const score = 0;
    const responses = ["ceci est une connerie", "ceci est une connerie","ceci est une connerie","ceci est une connerie"];
    const idTrueResponse = 1;


    var db = new JsonDB(new Config("mybase.json", false, true, '/'));

    // await db.push("/test1","super test");
    // await db.delete("/");

    var data = await db.getData("/");
    console.log(data);

    console.log(data.quizz[0].question);

    // return  res.view('pages/event/createAddress' , {leDebut: debut, leLibelle:libelle , laFin:fin , collectionAdresses:labelsReturned });
    return res.view('pages/jeu1' , { leScore: score , lesReponses: responses , idVraiReponse: idTrueResponse});
    // res.redirect("/jeu1");


  }
};

