const Category = require('../models/Category.model.js')

module.exports.categoriesController = {
getCategories: (req, res) => {
    Category.find( { } )
    .then((data) => {
        res.json(data)
    })
},



postCategories: async (req, res) => {
     Category.create(
    {
        name: req.body.name,
    }
    );  
    {
      res.json("added");
       
    }
       
},



deleteCategories: async (req, res) => {
    try {
        const category = await Category.findByIdAndRemove(req.params.id)
        res.json(category)  
    } catch (error) {
        console.log('err')
    }
},




      





}