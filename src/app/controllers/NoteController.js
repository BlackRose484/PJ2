const Note = require('../models/List');

class NoteController {
    create(req,res,next)
    {
        res.render('me/create')
    }
    store(req,res,next)
    {
        const newNote = new Note(req.body);
        newNote.save()
            .then(()=>res.redirect('/me/list'));
    }
    edit(req,res,next)
    {
        Note.findById(req.params.id).lean()
        .then((note)=>res.render('me/edit',{note}))
        .catch(next);
        
    }
    update(req,res,next){
        Note.updateOne({_id: req.params.id},req.body)
            .then(()=>res.redirect('/me/list'))
    }
    deleteK(req,res,next){
        Note.delete({_id:req.params.id})
            .then(()=>res.redirect('/me/list'))
    }
    done(req,res,next){
        Note.updateOne({_id:req.params.id},{done:"checked"})
            .then(()=>res.redirect('back'))
    }
    undone(req,res,next){
        Note.updateOne({_id:req.params.id},{done:"unchecked"})
            .then(()=>res.redirect('back'))
    }
}

module.exports = new NoteController;