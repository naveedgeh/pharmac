import {React} from 'react'
import AddproductComponent from '../../components/Product/addProductComponent';
import { BreadcrumbDashboard } from '../../components/Sidebar';


const addProduct=()=>{
    return (
        <>
        <BreadcrumbDashboard first="Products" second="Add Product"/>
        <AddproductComponent/>  
        </>
    );
}
export default addProduct;