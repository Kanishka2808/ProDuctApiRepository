export class Product
{
    static ProductID: any;
    constructor(
    public ProductID="",
    public Title="",
    public Price=0,

    public Color="",
    public inStock=true,
    public Details="",
    public Quantity=60,
    public Rating=5,
    public ExpiryDate="",
    public  ImageUrl=""
    ){}
}