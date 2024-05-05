const express=require('express')
const app=express()
const articleRouter=require('./routes/articles')


app.set('view engine','ejs')
app.use('/articles',articleRouter)


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
    res.render('index',{articles:articles})
})
app.listen(5000)