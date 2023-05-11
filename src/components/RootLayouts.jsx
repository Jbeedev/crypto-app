import { Link, Outlet } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar } from "./index";



const RootLayouts = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Outlet />
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Copyright © 2021
            <Link to="/">JaybeeCrypto Inc.</Link> <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="exchanges">Exchanges</Link>
            <Link to="news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default RootLayouts;
