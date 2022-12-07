import { FC } from 'react'
import { Layout } from 'antd';
import './Footer.css'

const { Header, Footer } = Layout;

const FooterComponent: FC = () => {
    return (
        <Footer className="Footer" style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
        </Footer>
    )
}

export default FooterComponent