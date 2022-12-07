"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
require("./Login.css");
const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "site-card-border-less-wrapper" }, { children: (0, jsx_runtime_1.jsxs)(antd_1.Card, Object.assign({ title: "Welcome to Apilogy Developer Portal", bordered: false, style: { width: 600 } }, { children: [(0, jsx_runtime_1.jsx)("p", { children: "Please Sign in to your account" }), (0, jsx_runtime_1.jsxs)(antd_1.Form, Object.assign({ name: "basic", initialValues: { remember: true }, onFinish: onFinish, onFinishFailed: onFinishFailed, autoComplete: "off" }, { children: [(0, jsx_runtime_1.jsx)(antd_1.Form.Item, Object.assign({ name: "username", rules: [{ required: true, message: 'Please input your username!' }] }, { children: (0, jsx_runtime_1.jsx)(antd_1.Input, { placeholder: "Username or Email" }) })), (0, jsx_runtime_1.jsx)(antd_1.Form.Item, Object.assign({ name: "password", rules: [{ required: true, message: 'Please input your password!' }] }, { children: (0, jsx_runtime_1.jsx)(antd_1.Input.Password, { placeholder: "Password" }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'row-forgot-password' }, { children: [(0, jsx_runtime_1.jsx)(antd_1.Form.Item, Object.assign({ name: "remember", valuePropName: "checked" }, { children: (0, jsx_runtime_1.jsx)(antd_1.Checkbox, { children: "Remember me" }) })), (0, jsx_runtime_1.jsx)(antd_1.Button, Object.assign({ type: 'link' }, { children: "Forgot your password?" }))] })), (0, jsx_runtime_1.jsx)(antd_1.Form.Item, { children: (0, jsx_runtime_1.jsx)(antd_1.Button, Object.assign({ type: "primary", htmlType: "submit", block: true }, { children: "Submit" })) })] }))] })) })));
};
exports.default = Login;
//# sourceMappingURL=Login.js.map