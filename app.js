const express = require('express');
const bookRouter = require('./routes/bookRouter');

const app = express();

app.use(express.json());
app.use('/books', bookRouter);


app.use((error, req, res, next) => {
    if(error.message.startsWith('No book')) {
        res.status(404).json({success: false, message: error.message});
    } else{
        next('error');
    }
    
})

app.use((error, req, res, next) => {
    res.status(500).json({success: false, message: error.message });

})


app.listen(3006, () => console.log(`Listen on 3006`));

