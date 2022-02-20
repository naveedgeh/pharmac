import {React} from 'react'
import { BreadcrumbDashboard } from '../../components/Sidebar';


const listProduct=()=>{
    return (
        <>
        <BreadcrumbDashboard first="Products" second="List Product"/>
        <h1>List product</h1>
        </>
    );
}
export default listProduct;