import { FC } from 'react'
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
const { Header } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

const Navbar: FC = () => {
    return (
        <Header className="header">
            <div className="logo">
            {/* <img src="../../public/apilogywhite.png" alt="apilogywhite" /> */}
            <Menu theme="dark" mode="horizontal" items={items1}/>
            </div>
        </Header>
    )
}

export default Navbar