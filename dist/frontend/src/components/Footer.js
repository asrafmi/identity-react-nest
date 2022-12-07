"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
require("./Footer.css");
const { Header, Footer } = antd_1.Layout;
const FooterComponent = () => {
    return ((0, jsx_runtime_1.jsx)(Footer, Object.assign({ className: "Footer", style: { textAlign: 'center' } }, { children: "Ant Design \u00A92018 Created by Ant UED" })));
};
exports.default = FooterComponent;
//# sourceMappingURL=Footer.js.map