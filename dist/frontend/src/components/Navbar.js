"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
const { Header } = antd_1.Layout;
const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));
const Navbar = () => {
    return ((0, jsx_runtime_1.jsx)(Header, Object.assign({ className: "header" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "logo" }, { children: (0, jsx_runtime_1.jsx)(antd_1.Menu, { theme: "dark", mode: "horizontal", items: items1 }) })) })));
};
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map