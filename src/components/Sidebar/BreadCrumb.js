import {React} from 'react';
import { Breadcrumb } from 'antd';
const Breadcrumbs=({first,second})=>{
        return (
            <Breadcrumb style={{ margin: '16px 0'}}>
              <Breadcrumb.Item>{first}</Breadcrumb.Item>
              <Breadcrumb.Item>{second}</Breadcrumb.Item>
            </Breadcrumb>
        );
}   
export default Breadcrumbs;