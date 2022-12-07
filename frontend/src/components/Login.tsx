import { FC } from 'react';
import { Button, Checkbox, Form, Input, Card } from 'antd';
import './Login.css'


const Login: FC = () => {
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };


    return (
        <div className="site-card-border-less-wrapper">
        <Card title="Welcome to Apilogy Developer Portal" bordered={false} style={{ width: 600 }}>
            <p>Please Sign in to your account</p>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
                >
                <Input placeholder="Username or Email" />
                </Form.Item>
        
                <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                >
                <Input.Password placeholder="Password"/>
                </Form.Item>

                <div className='row-forgot-password'>
                <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Button type='link'>Forgot your password?</Button>
                </div>
        
                <Form.Item>
                <Button type="primary" htmlType="submit" block>
                    Submit
                </Button>
                </Form.Item>
            </Form>
        </Card>
      </div>
    );
  };

export default Login