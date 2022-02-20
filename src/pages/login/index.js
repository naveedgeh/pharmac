import { Form, Input, Button, Checkbox } from 'antd';
import '../../asets/login.css';
import { UserOutlined } from '@ant-design/icons';
const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
    <div className='Login-Form'>
        <div className='Login-inner-form'>    
        <div className='company-logo'>
            <p className='text-logo'><span className='m'>M</span>endix<span className='s'>Soft</span></p>
    </div> 
    <Form
      name="basic"
      labelCol={{
        span: 10,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className='form-login'
    >
      <Form.Item
        // label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
          
        ]}
        wrapperCol={{
            offset: 0,
            span: 30,
          }}
        >
        <Input type="email" className='input' prefix={<UserOutlined />} placeholder='User Name or Email'/>
      </Form.Item>
      <Form.Item
        // label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        wrapperCol={{
            offset: 0,
            span: 30,
          }}>
        <Input.Password  className='input' placeholder="Password"/>
      </Form.Item>
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 0,
          span: 16,
        }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 0,
          span: 30,
        }}>
        <Button type="primary" htmlType="submit" className='login-button'>
          Submit
        </Button>
      </Form.Item>
    </Form>
    <div>Design:MendixSoft</div>
       </div>
    </div>
    </>
  );
};
export default Login;

