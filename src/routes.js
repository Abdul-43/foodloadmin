import CreateProduct from "./pagess/CreateProduct";
import UpdateProduct from "./pagess/UpdateProduct";
import ManageProduct from "./pagess/ManageProduct";
export const routes=[
    {
        name:"createProduct",
        path:"/createProduct",
        component:()=><CreateProduct/> ,
    },
    {
        name:"editProduct",
        path:"/updateProduct/:id",
        component:()=><UpdateProduct/>,
    },
    {
        name:"manageProduct",
        path:"/manageProduct",
        component:()=><ManageProduct/>,
    },

]