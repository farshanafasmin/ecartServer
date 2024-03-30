const wishlists = require("../Models/wishlistModel");

exports.addToWishlist=async(req,res)=>{
    const{userId,id,title,price,description,category,image,rating}=req.body

    try{

        const item=await wishlists.findOne({userId,id})
        if(item){

            res.status(406).json("Product already in your wishlist")

        }
        else{

            const newItem=new wishlists({
                userId,id,title,price,description,category,image,rating
            })

            await newItem.save()
            res.status(200).json(`${title} added to your wishlist`)

        }
       
    }
    catch{
        res.status(400).json("add to wishlist api failed")
    }
   
}

// ---------------------------------

exports.getWishlist=async(req,res)=>{
    const {userId}=req.params
    try{

        const products=await wishlists.find({userId})
        if(products){
            res.status(200).json(products)
        }
        else{
            res.status(400).json("empty wishlist")
        }

    }
    catch{
        res.status(400).json("get wishlist api failed")
    }
}

// --------------------

exports.removeWishlist=async(req,res)=>{

    const {_id}=req.params
    try{
        await wishlists.deleteOne({_id})
        res.status(200).json("Product removed from wishlist")
    }catch{
        res.status(400).json("Delete wishlist api failed")
    }
}