import { Col, Row } from 'antd';
import React,{} from 'react';
import {summarycardmendix} from '../../asets/common';
const SummaryCard=(props)=>{
   
    return (
        <div style={{...summarycardmendix,...props.style}} className="summary-card-mendix">
            <Row>
                <Col span={8} className="summary-icon-mendix">
                    <img className='icon-mendix' src={props.icon} alt="Naveed"/>
                </Col>
                <Col span={16}>
                    {props.title}
                    <p>{props.count}</p>
                </Col>
            </Row>
        </div>
    );
}
export default SummaryCard;