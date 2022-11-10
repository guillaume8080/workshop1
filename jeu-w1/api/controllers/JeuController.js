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


    // var axios = require('axios');


    var db = new JsonDB(new Config("mybase.json", false, true, '/'));

    // await db.push("/test1","super test");
    // await db.delete("/");

    // await db.push("0" ,quizzes , false );
    // await db.save();
    var data = await db.getData("/");
    console.log(data);

    console.log(data.quizz[0].question);


  res.redirect("/jeu1");


  }
};

