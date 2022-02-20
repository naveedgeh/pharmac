import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    PlusCircleFilled,
    FastForwardFilled,
    RightCircleOutlined
  } from '@ant-design/icons';
 const  MenuList=[
    {   
        name:"MendixSoft",
        url:"/admin",
        icon:<PieChartOutlined/>,
        key:"1",
        sub:[]
    },
    {   
        name:"Medicine",
        url:"",
        icon:<TeamOutlined/>,
        key:"sub1",
        sub:[
            {
                name:"Category",
                url:"/admin/category",
                icon:<RightCircleOutlined/>,
                key:"6",
            },
            {
                name:"Medicine Type",
                url:"/admin/medicinetype",
                icon:<RightCircleOutlined/>,
                key:"5",
            },
            {
                name:"Unit",
                url:"/admin/Unit",
                icon:<RightCircleOutlined/>,
                key:"7",
            },
            {
                name:"List Medicine",
                url:"/admin/listproduct",
                icon:<RightCircleOutlined/>,
                key:"2",
            },
            {
                name:"Add Medicine",
                url:"/admin/addproduct",
                icon:<RightCircleOutlined/>,
                key:"3",
            }
        ]
    },
    {   
        name:"User",
        url:"/admin",
        icon:<PieChartOutlined/>,
        key:"4",
        sub:[]
    },
];
export default MenuList;