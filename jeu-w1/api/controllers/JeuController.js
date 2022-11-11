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

    let scoreCourant = req.params.score;
    let idquizz = req.params.idquizz;
    if(idquizz ==  undefined){
      idquizz = 0;
    }
    else{
      idquizz++;
    }
    if(scoreCourant == undefined){
      scoreCourant = 0;
    }
    else{
      scoreCourant++;
    }



    const idTrueResponse = 1;
    const score2 = req.params.score;


    var db = new JsonDB(new Config("mybase.json", false, true, '/'));
    var data = await db.getData("/");
    console.log(data);
    console.log(data.quizz[0].question);
    const responses = ["ceci est une connerie", "ceci est une connerie","ceci est une connerie","ceci est une connerie"];


    // await db.push("/test1","super test");
    // await db.delete("/");
    // return  res.view('pages/event/createAddress' , {leDebut: debut, leLibelle:libelle , laFin:fin , collectionAdresses:labelsReturned });
    return res.view('pages/jeu1' , { leScore: scoreCourant , lIdDuQuizz : idquizz , lesReponses: responses , idVraiReponse: idTrueResponse});
    // res.redirect("/jeu1");


  }
};

