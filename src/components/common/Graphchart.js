import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";       
import Card from './Card';
const data = [
    {
      name: "Page A",
      uv: 4000,
      sale: 200
      //  amt: 5400
    },
    {
      name: "Page B",
      uv: 3000,
      sale: 1398
      // amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      sale: 9800
      // amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      sale: 3908
      //amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      sale: 4800
      //  amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      sale: 3800
      //  amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      sale: 4300
      //  amt: 2100
    },
    {
      name: "Page H",
      uv: 2390,
      sale: 3800
      //  amt: 2500
    },
    {
      name: "Page K",
      uv: 3490,
      sale: 4300
      //  amt: 2100
    },
    {
      name: "Page L",
      uv: 2390,
      sale: 3800
      //  amt: 2500
    },
    {
      name: "Page M",
      uv: 3490,
      sale: 4300
      //  amt: 2100
    },
    {
      name: "Page N",
      uv: 2390,
      sale: 3800
      //  amt: 2500
    },
    {
      name: "Page O",
      uv: 3490,
      sale: 4300
      //  amt: 2100
    },
    {
      name: "Page P",
      uv: 2390,
      sale: 3800
      //  amt: 2500
    },
    {
      name: "Page Q",
      uv: 3490,
      sale: 4300
      //  amt: 2100
    },
    {
      name: "Page R",
      uv: 2390,
      sale: 3800
      //  amt: 2500
    },
    {
      name: "Page S",
      uv: 3490,
      sale: 4300
      //  amt: 2100
    },
    {
      name: "Page T",
      uv: 2390,
      sale: 3800
      //  amt: 2500
    },
    {
      name: "Page U",
      uv: 3490,
      sale: 4300
      //  amt: 2100
    },
    {
      name: "Page V",
      uv: 3000,
      sale: 1398
      // amt: 2210
    },
    {
      name: "Page X",
      uv: 2000,
      sale: 9800
      // amt: 2290
    },
    {
      name: "Page Y",
      uv: 2780,
      sale: 3908
      //amt: 2000
    },
    {
      name: "Page Z",
      uv: 1890,
      sale: 4800
      //  amt: 2181
    },
    {
      name: "Page AA",
      uv: 2390,
      sale: 3800
      //  amt: 2500
    },
    {
      name: "Page BB",
      uv: 3490,
      sale: 4300
      //  amt: 2100
    },
    {
      name: "Page CC",
      uv: 2390,
      sale: 3800
      //  amt: 2500
    },
    {
      name: "Page EE",
      uv: 3490,
      sale: 4300
      //  amt: 2100
    },
    {
      name: "Page FF",
      uv: 2390,
      sale: 3800
      //  amt: 2500
    },
    {
      name: "Page GG",
      uv: 3490,
      sale: 4300
      //  amt: 2100
    },
    {
      name: "Page HH",
      uv: 2390,
      sale: 3800
      //  amt: 2500
    },
    {
      name: "Page II",
      uv: 3490,
      sale: 4300
      //  amt: 2100
    },
    {
      name: "Page JJ",
      uv: 2390,
      sale: 3800
      //  amt: 2500
    },
    {
      name: "Page KK",
      uv: 3490,
      sale: 4300
      //  amt: 2100
    },
    {
      name: "Page LL",
      uv: 2390,
      sale: 3800
      //  amt: 2500
    },
    {
      name: "Page MM",
      uv: 3490,
      sale: 4300
      //  amt: 2100
    },
  
  ];
const Graphcart=()=>{
    return (
        <>
        <div className='graph-mendix'>
            <Card>
                <h1>Sales Last 30 Days</h1>
        <BarChart
          width={1220}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 20,
            bottom: 5,
            
          }}
        >
          <CartesianGrid strokeDasharray="4 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 20000]} allowDataOverflow={true} />
          <Tooltip />
          <Legend />
          <Bar dataKey="sale" fill="#8884d8" />
        </BarChart>
        </Card>
        </div>
        <div className='graph-mendix'>
        <Card>
            <h1>Sales Current Financial Year</h1>
    <BarChart
      width={1220}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 20,
        left: 20,
        bottom: 5,
        
      }}
    >
      <CartesianGrid strokeDasharray="4 3" />
      <XAxis dataKey="name" />
      <YAxis type="number" domain={[0, 20000]} allowDataOverflow={true} />
      <Tooltip />
      <Legend />
      <Bar dataKey="sale" fill="#8884d8" />
    </BarChart>
    </Card>
    </div>
    </>
      );
}

export default Graphcart;