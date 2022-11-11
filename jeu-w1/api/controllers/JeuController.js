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

    const score2 = req.params.score;

    if(idquizz > 2 ){
      res.view('pages/end');
    }

    var db = new JsonDB(new Config("mybase.json", false, true, '/'));
    var data = await db.getData("/");

    const myImage = data.quizz[idquizz].imagesrc;
    const idTrueResponse = data.quizz[idquizz].idTrue;
    const responses = data.quizz[idquizz].responses;

    // await db.push("/test1","super test");
    // await db.delete("/");
    return res.view('pages/jeu1' , { leScore: scoreCourant , lIdDuQuizz : idquizz , imageSrc: myImage ,lesReponses: responses , idVraiReponse: idTrueResponse});

  }


};

