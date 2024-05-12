export interface Vehicle {
   id?:string;
   model?:string;
   description?:string;
   consumption?:string;
   fuelType?:string;
   price?:string;
   year?:string;
   sale?: boolean;
   salePrice?: string;
   imagePath?: string;
   imageName?: string;
   brandId?: string;
   brandName?: string;
   userId?: string;
   userFirstName?: string;
   userLastName?: string;
   userMobilePhone?: string;
   userEmail?: string;
}
