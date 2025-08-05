import { Layout, Menu } from "antd";
import { adminPaths } from "../../routes/admin.routes";
import { sidebarItemGenerators } from "../../utils/sidebarItemGenerators";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
const  {Sider} =Layout


const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student",
}


const DashboardSidebar = () => {
    const role = "student";
    let sidebarItems;
     switch (role) {
        case userRole.ADMIN:
            sidebarItems = sidebarItemGenerators(adminPaths, role);
            
            break;
        case userRole.FACULTY:
            sidebarItems = sidebarItemGenerators(facultyPaths,role);
            
            break;
        case userRole.STUDENT:
            sidebarItems = sidebarItemGenerators(studentPaths,role);
            
            break;
     
        default:
            break;
     }

    
    return (
      
            <Sider
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
            items={sidebarItems}
          />
        </Sider>
            
       
    );
};

export default DashboardSidebar;