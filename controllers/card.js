const dbUtils = require('../utils/db');


async function getCardById(req, res, next) {
  try {
    var rows = await dbUtils.query("SELECT id,name,subname as title, img as image, type, classe FROM cards where id = ?", [req.params.id]);

    if (!rows.length) return res.status(404).json({ error: "No card found" }); 
      
    rows[0].image = "https://dokkanessentials.com/img/thumb/" + rows[0].image


    if (req.body.hasOwnProperty("links")) {

      if (req.body.links === "name") {
        rows[0].links = await dbUtils.query("SELECT id,name FROM haslink,link WHERE haslink.idLink=link.id AND hasLink.idCard = ?" , [req.params.id]);
      } else if (req.body.links === "extended") {
        // TO-DO
        
      }
    }

    if (req.body.hasOwnProperty("categories")){
      if (req.body.categories) {
        rows[0].categories = await dbUtils.query("SELECT id,name FROM hasCat,categorie WHERE hasCat.idCat=categorie.id AND hasCat.idCard = ?" , [req.params.id]);
      }
    }
    res.status(200).json(rows);
      
    
  
    
      
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err });
  }
  


    
}
  
module.exports = {
  getCardById
}

  
  
  
