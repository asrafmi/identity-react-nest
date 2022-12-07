"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
const Navbar_1 = require("./components/Navbar");
const Footer_1 = require("./components/Footer");
require("./App.css");
const Login_1 = require("./components/Login");
const Carousel_1 = require("./components/Carousel");
function App() {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "App" }, { children: [(0, jsx_runtime_1.jsx)(antd_1.Layout, { children: (0, jsx_runtime_1.jsx)(Navbar_1.default, {}) }), (0, jsx_runtime_1.jsxs)(antd_1.Row, Object.assign({ className: "content-row" }, { children: [(0, jsx_runtime_1.jsx)(antd_1.Col, Object.assign({ span: 12 }, { children: (0, jsx_runtime_1.jsx)(antd_1.Layout, Object.assign({ className: 'carousel-layout' }, { children: (0, jsx_runtime_1.jsx)(Carousel_1.default, {}) })) })), (0, jsx_runtime_1.jsx)(antd_1.Col, Object.assign({ span: 12 }, { children: (0, jsx_runtime_1.jsx)(antd_1.Layout, Object.assign({ className: 'content-layout' }, { children: (0, jsx_runtime_1.jsx)(Login_1.default, {}) })) }))] })), (0, jsx_runtime_1.jsx)(antd_1.Layout, { children: (0, jsx_runtime_1.jsx)(Footer_1.default, {}) })] })));
}
exports.default = App;
//# sourceMappingURL=App.js.map