const Comment = require('../models/Comment.model.js')

module.exports.commentController = {

getComment: async (req, res) => {
    try {
        const dasa = await Comment.find({news: req.params.id})
        res.json(dasa)
      
      } catch (error) {
          console.log(error)
      }
},



postComment: async (req, res) => {
     Comment.create(
    {
        name: req.body.name,
        text: req.body.text,
        news: req.body.news,
    }
    );  
    {
      res.json("added");
       
    }
       
},



deleteComment: async (req, res) => {
    try {
        const comment = await Comment.findByIdAndRemove(req.params.id)
        res.json(comment)  
    } catch (error) {
        console.log('err')
    }
},




      





}