using ProductApi.core.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductApi.infrastructure
{
    public class ProductInitializeDb: DropCreateDatabaseIfModelChanges<ProductContext>
    {
        protected override void Seed(ProductContext context)
        {
            context.Products.Add(new Product
            {
                ProductID ="1",
                Color ="Red",
                Details ="This is awesome",
                ExpiryDate = DateTime.Now,
                ImageUrl ="abc.com",
                inStock =true,
                Price =400,
                Quantity =50,
                Rating =5,
                Title ="Hammer"
            });
            context.Products.Add(new Product
            {
                ProductID = "2",
                Color = "Blue",
                Details = "This is very very awesome",
                ExpiryDate = DateTime.Now,
                ImageUrl = "abc.com",
                inStock = true,
                Price = 600,
                Quantity = 150,
                Rating = 5,
                Title = "Saw"
            });
            try
            {
                context.SaveChanges();
            }
            catch(Exception e){
                var e1 = e.InnerException;
            }
            base.Seed(context);

        }
    }
}
