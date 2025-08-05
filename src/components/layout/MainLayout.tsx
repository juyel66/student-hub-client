import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import DashboardSidebar from "./DashboardSidebar";

const MainLayout = () => {
  const { Header, Content, Footer } = Layout;
  // const items: MenuProps["items"] = [
  //   {
  //     key: "Dashboard",
  //     label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
  //   },

  //   {
  //     key: "11",
  //     label: "UserManagement",
  //     children: [
  //       {
  //         key: "Create Admin",
  //         label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
  //       },
  //       {
  //         key: "Create faculty",
  //         label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>,
  //       },
  //       {
  //         key: "Create student",
  //         label: <NavLink to="/admin/create-student">Create Student</NavLink>,
  //       },
  //     ],
  //   },
  // ];

  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        {/* <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div>
            <p
              style={{
                color: "white",
                textAlign: "center",
                height: "2rem",
                fontSize: "24px",
                marginTop: "5px",
                
              }}
            >
              Student Hub
            </p>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={sidebarItemGenerators(adminPaths, "admin")}
          />
        </Sider> */}

        <DashboardSidebar></DashboardSidebar>

        <Layout>
          <Header style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              {/* <h1>The main content should go here </h1> */}

              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
