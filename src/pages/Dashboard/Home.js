import { Col, Row } from 'antd';
 
import {React,useEffect,useState} from 'react';
import Graphcart from '../../components/common/Graphchart';
import SummaryCard from '../../components/common/SummaryCard';
import {summaryData} from '../../function/functions';
const data=[
         {
         "title":"totalcustomer",
         "total":1000,
        },
        {
          "title":"totalsale",
            "total":"3000$"
        },
        {
            "title":"totalpurchase",
            "total":"5000$"
        },
        {
            "title":"totalstock",
            "total":"3000$"
        }
    
];

const Home=()=>{
   
    return(
       <>
       <h1>Welcome Naveed</h1>
       <Row gutter={16}>
          {data.map(s=> 
              <Col span={6}>
              <SummaryCard
               style={summaryData(s.title)?.css} 
               title={summaryData(s.title)?.title}
               icon={summaryData(s.title)?.icon}
               count={s.total}/>
              </Col>
             )}
       </Row>
       <Graphcart/>
       </>
    );
}
export default Home;