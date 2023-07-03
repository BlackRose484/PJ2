const Note = require('../models/List');

class MeController {

    
    show(req,res,next){
        let NoteQuery= Note.find({}).lean();
        if(req.query.hasOwnProperty('_sort'))
        {
            NoteQuery = NoteQuery.sort({
                [req.query.column] : req.query.type
            })
        }

       Promise.all([NoteQuery])
        .then(([notes])=>{
            res.render('me/show',{ notes })
         })
            
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