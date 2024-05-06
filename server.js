const express=require('express')
const mongoose=require('mongoose')
const app=express()
const articleRouter=require('./routes/articles')

mongoose.connect('mongodb://127.0.0.1/blog')
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    const articles=[{
        "title":"article 1",
        "createdAt":new Date(),
        "description":"description 1"
    },
    {
        "title":"article 2",
        "createdAt":new Date(),
        "description":"description 2"
    }
]
    res.render('articles/index',{articles:articles})
})
app.use('/articles',articleRouter)
app.listen(5000)