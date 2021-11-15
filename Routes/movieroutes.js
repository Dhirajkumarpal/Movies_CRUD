var express=require('express')
var router=express.Router();
var conn=require('../databasecon');
var movieschema=require('../Schema/movieschema.js')

router.get('/',(req,res)=>{
    console.log("inside get movie api")
    
    movieschema.find({},(req1,resp)=>{
        console.log("getting the movies");
        console.log(resp)
       /*console.log(resp);*/
        res.render('movieList',{movies:resp});
    });
    
    

})



router.get('/create',(req,res)=>{
    console.log("inside create movies")    
        res.render('Createmovie',{});
    });
    
    




router.post('/',(req,res)=>{
    console.log("inside  post of movie")
    
    
    var newmovie=new movieschema({
        

            "Moviename": req.body.Moviename,
            "Lead_actor_name": req.body.Lead_actor_name,
            "Lead_actress_name": req.body.Lead_actress_name,
            "Budget_in_dollar": req.body.Budget_in_dollar,
            "Directorname": req.body.Directorname,
            "Country": req.body.Country,
            "Detail":req.body.Detail
            
        
    })
    newmovie.save(function(err,result){
        if (err){
            console.log(err);
        }
        else{
            console.log('saving  successfull')
            console.log(result)
            

        }
    })
        

    
    
    //console.log(obj[0].class)
    //obj[0].Nostudent=obj[0].Nostudent+1
    res.redirect('/movies/');
    
    


})

router.get('/edit/:id',async (req,res)=>{
    console.log("inside edit get of movies")
    var id=req.params.id;
    console.log(id)
    

 
   
   try{
       await movieschema.findOne({_id:id},(err,resp)=>{
        console.log("hi printing err and resp")
        console.log(err)
        console.log(typeof resp);
        console.log(resp)
        console.log(resp)

       
        console.log("before rendering");
        res.render('movieedit',{movie:resp});
        console.log("after render1");

    });
}
catch(error){
    res.send(error);
}

    
    console.log("after render2")
    return;

});


router.post('/edit/:id',(req,res)=>{
    console.log("inside edit post  of movie")
    var id=req.params.id;
    console.log(id);
    
console.log("printing new movie")
 
var newmovie=new movieschema({
        
     "_id":id,
    "Moviename": req.body.Moviename,
    "Lead_actor_name": req.body.Lead_actor_name,
    "Lead_actress_name": req.body.Lead_actress_name,
    "Budget_in_dollar": req.session.Budget_in_dollar,
    "Directorname": req.body.Directorname,
    "Country":req.body.Country,
    "Detail":req.body.Detail
    

})

    movieschema.findByIdAndUpdate({_id:id},newmovie,(reqp,resp)=>{
        
        console.log("printing resp"+resp);
        res.redirect('/movies/');
        
    });
    

})



router.get('/delete/:id',(req,res)=>{
    console.log("inside delete post of movies")
    var id=req.params.id;
    console.log("printing id:"+id)
    mealschema.findById({_id:id},(err,resp)=>{
    console.log("foudn elemnt with id")
    console.log(resp)
        
    
        movieschema.deleteOne({_id:id},(req1,res1)=>{
            console.log("printing deleted student");
            console.log(res1);
            

            res.redirect('/movies/');
        })
     
        
    }
      );
 })
 
    

 router.get('/detail/:id',async (req,res)=>{
    console.log("inside detail get of movies")
    var id=req.params.id;
    console.log(id)
    

 
   
   try{
       await movieschema.findOne({_id:id},(err,resp)=>{
        console.log("hi printing err and resp")
        console.log(err)
        console.log(typeof resp);
        console.log(resp)
        console.log(resp)

       
        console.log("before rendering");
        res.render('movieDetail',{movie:resp});
        console.log("after render1");

    });
}
catch(error){
    res.send(error);
}

    
    console.log("after render2")
    return;

});



 

module.exports= router;