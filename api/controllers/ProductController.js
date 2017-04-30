/**
 * ProductController
 *
 * @description :: Server-side logic for managing Products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
    create(req,res){
     
      Product.create({
          name : req.param('name'),
          qty : req.param('qty')
      })
       .then(product => {
           return res.ok(product);
       })
       .catch(err => res.serverError(err));
    },

    find(req,res){
        Product.find()
        .then(products => res.ok(products))
        .catch(err=>res.notFound(err));
    },

    update(req,res){

       let attributes =  {};

       if(req.param('name')){
           attributes.name = req.param('name');
       } 

     if(req.param('name')){
           attributes.qty = req.param('qty');
       } 

      Product.update({id:req.params.id},attributes)
      .then(product => res.ok(product[0]))
      .catch(err => res.serverError(err)); 

    },
    delete(req,res){
        Product.destroy({id:req.params.id})
        .then(product => res.ok(product))
        .catch(err => res.serverError(err));
    }
};

