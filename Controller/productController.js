const products = require("../Models/productModel");

exports.getAllProducts=async(req,res)=>{

    var searchQuery=req.query.search

    const query={
        title:{ $regex:searchQuery,$options:"i"} //i:case insensitive
    }


    try{

        const allProducts=await products.find(query)
        res.status(200).json(allProducts)

    }
    catch{
       
        res.status(400).json("get product api failed")
    }
}


exports.getSingleProduct = async (req, res) => {
    try {
        const _id = req.params.id; 
        const singleProduct = await products.findOne({_id});
       res.status(200).json(singleProduct)
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
