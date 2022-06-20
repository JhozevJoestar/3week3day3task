const News = require('../models/News.model.js')

module.exports.newsController = {
getNews: (req, res) => {
    News.find( { } )
    .then((data) => {
        res.json(data)
    })
},



getNewsById: (req, res) => {
    News.findById(req.params.id)
    .then((data) => {
        res.json(data)
    })
},




getNewsByCategory: async (req, res) => {
    try {
      const data = await News.find({category: req.params.id})
      res.json(data)
    
    } catch (error) {
        console.log(error)
    }
    
},



postNews: async (req, res) => {
    try {
   const data = await News.create(
    {
        name: req.body.name,
        text: req.body.text,
        category: req.body.category,
    }
    );   
      res.json(data);
    } catch (error) {
      res.json(error.toString())  
    }
},




patchNews: async (req, res) => {
    try {
        const updateNews = await News.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            text: req.body.text,
            category: req.body.category,
        })
        res.json(updateNews)
    } catch (error) {
        console.log(error)
    }   
},



deleteNews: async (req, res) => {
    try {
        const news = await News.findByIdAndRemove(req.params.id)
        res.json(news)  
    } catch (error) {
        console.log('err')
    }
},




}



