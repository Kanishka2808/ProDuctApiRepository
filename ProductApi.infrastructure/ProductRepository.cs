using ProductApi.core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductApi.infrastructure
{
    public class ProductRepository
    {
        ProductContext context = new ProductContext();
        
        public void Add(Product p)
        {
            context.Products.Add(p);
            context.SaveChanges();
        }

        public void Edit(Product p)
        {
            context.Entry(p).State = System.Data.Entity.EntityState.Modified;
            context.SaveChanges();
        }

        public void Delete(string ProductID)
        {
            Product p = context.Products.Find(ProductID);
            context.Products.Remove(p);
            context.SaveChanges();
        }

        public IEnumerable<Product> GetProducts()
        {
            return context.Products;
        }

        public Product GetById(string ProductID)
        {
            var Product = (from r in context.Products where r.ProductID == ProductID select r).FirstOrDefault();
            return Product;
        }
    }
}
   
