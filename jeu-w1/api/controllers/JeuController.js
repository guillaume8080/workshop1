/**
 * JeuController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


const {JsonDB, Config} = require('node-json-db');
module.exports = {

  import: {Config: Config, JsonDB: JsonDB},

  testJsonDB: async function  (req, res) {


    // var axios = require('axios');
  const quizzes = {
    "quizz": [
      {
        "id": "1",
        "question" : "can I do it ?",
        "response" : "it seems"
      },
      {
        "id" : "2",
        "question" : "can I do it ?",
        "response" : "it seems"
      }
    ]
  }
  ;

    var db = new JsonDB(new Config("../persistence/test.json", true, false, '/'));

    // await db.push("/test1","super test");
    await db.delete("/");

    await db.push("0" ,quizzes , false );

    var data = await db.getData("/");
    console.log(data);

    console.log("les lignes de dbjson ont ete executees");


  }
};

