import React from 'react';
import './App.css';
import './about.js';
import { Typography } from 'antd';
import { Layout } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd'
import { Menu } from 'antd';



const { Header, Footer, Sider, Content } = Layout;


const { Title } = Typography;

const { SubMenu } = Menu;


function App() {

  return (

    <div className="App">
    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>

      <Sider style={{background: 'rgb(1, 1, 44)',
        overflow:"auto",
        height: '100vh',
        position: 'fixed',
        left: 0,
        fontSize:18}} width={200}>

      <Title level={2}>My Dashboard</Title><br />

      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
      <Menu.Item key="1" icon={<UserOutlined />} style={{float:'left'}}>
      <a href="/about" style={{color:"white"}}>My Account</a>
      </Menu.Item><br /><br /><br /><br />


      <Menu.Item key="2" style={{float:'left'}}>
      <a href="/about" style={{color:"white"}}>About Us</a>
      </Menu.Item><br /><br /><br /><br />

      <Menu.Item key="3" style={{float:'left'}}>
      <a href="/about" style={{color:"white"}}>Contact Us</a>
      </Menu.Item><br /><br /><br /><br />

      <Menu.Item key="4" style={{float:'left'}}>
      <a href="/about" style={{color:"white"}}>Help</a>
      </Menu.Item><br /><br /><br />
      </Menu>
      </Sider>
      <Header className="site-layout-background" style={{background:'rgb(1, 1, 44)',  padding: 0, fontSize:35}}>
    <Avatar style = {{float:'right'}} icon= {<UserOutlined />} />
    <Title>WELCOME TO RETAIL SALES :)</Title>
    </Header>

      <Layout   className="site-layout" style={{ marginLeft: 200, fontSize:30 }}>


      <Content style={{background:'rgba(7, 5, 17, 0.87)', fontSize:20, color:"black"}} 
      style={{ padding: '0 24px', minHeight: 280, margin: '24px 16px 0', overflow: 'initial', textAlign: 'center' }}
      >
      <Title level={3} style={{color:"rgb(1, 1, 44)"}}>Choose an Option</Title>

      <Button type="dashed" style={{background:'rgb(1, 1, 44)',fontSize:20}}><a href="/about" style={{color:"white"}} >  Check your <br />   Customer Details   </a> </Button>
      ....
      <Button type="dashed" style={{background:'rgb(1, 1, 44)',fontSize:20}}><a href="/about" style={{color:"white"}} >  Check your <br />  Product Details  </a></Button>
      ....
      <Button type="dashed" style={{background:'rgb(1, 1, 44)',fontSize:20}}><a href="/about" style={{color:"white"}} >  Check your <br />  Sales Data  </a></Button>
      <span class="tab"></span>
      ....
      <Button type="dashed" style={{background:'rgb(1, 1, 44)',fontSize:20}}><a href="/about" style={{color:"white"}} >  Check your <br /> Reports  </a></Button><br /><br /><br /><br />
      
      <p style={{fontSize:25, color:"rgb(5, 5, 32"}}>In today’s world maintaining large records in any company is a very tedious and time consuming task.<br />
        This record in turn needs to be processed and analysed so as to gain valuable insights and analysing <br />
        these for the welfare of the company is again a very tough task .So there is a need for a platform which <br />
        could run predictive analysis on this data . The retail sales company is the target audience so we will <br />
        be focusing on a platform which could predict the stock for the upcoming week based on the historical <br />
        data of the sales.
        <br /><br /></p>
      </Content>
    </Layout>


    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
</Layout>,
  </div>

  );
  
}

export default App;
