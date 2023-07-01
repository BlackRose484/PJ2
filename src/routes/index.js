const MeRouter = require('./me');
const NoteRouter = require('./note')

function route(app)
{
    app.use('/me',MeRouter);
    app.use('/note',NoteRouter);
    app.use('/',(req,res)=> res.render('home'));
}

module.exports = route;