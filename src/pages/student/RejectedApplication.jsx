import StudentNavbar from "../../components/navbar/StudentNavbar";
import { Table,} from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const RejectedApplication = () => {
    


    const [dataSource] = useState([
        {
        id: 1,
        name: "Software",
        number: 99,
        type: "Compulsory",
        
        },
       
       
        ]);

        
        const columns = [
        {
        key: "1",
        title: "Company Name",
        dataIndex: "name",
        },
        {
        key: "2",
        title: "Internship date range",
        dataIndex: "Internship date range",
        },
        {
        key: "3",
        title: "Application Status",
        dataIndex: "Application Status",
        
        },
        
        
        {
        key: "4",
        title: "             ",
        render: (record) => {
            return (
            <>
                <Link to={`/`}>
            
            </Link>

          </>
        );
      },
    },
    
    
  ];
 
  return (
    <>
      <StudentNavbar />
      <div className="px-6 py-6">
        <h1 className="text-4xl font-bold text-center mb-4">
          Rejected Applications
        </h1>
        <Table
          className="px-20"
          columns={columns}
          dataSource={dataSource}
        ></Table>
       
      </div>



      
    </>
     );

   };

export default RejectedApplication;
