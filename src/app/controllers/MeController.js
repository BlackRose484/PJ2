const Note = require('../models/List');

class MeController {
    show(req,res,next){
        Note.find({}).lean()
            .then((notes)=>{
                notes = notes.sort((a,b)=>a.deadline-b.deadline);
                res.render('me/show',{ notes })})
            .catch(next)
    }
    trash(req,res,next){
        Note.findDeleted({}).lean()
            .then((notes)=>{
                notes = notes.filter((note)=>note.deleted===true)
                res.render('me/trash',{notes})
            })
    }
}

module.exports = new MeController;