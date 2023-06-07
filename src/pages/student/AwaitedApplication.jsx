import StudentNavbar from "../../components/navbar/StudentNavbar";
import { Table,Button,Form,message} from "antd";
import { useState } from "react";
import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const AwaitedApplication = () => {

    const [messageApi, contextHolder] = message.useMessage();
    
   

    
    const finalize = () => {
    messageApi.open({
      type: 'deleted',
      content: 'Your option has been finalized..',
      duration: 5,
    });

    };


    


    const [dataSource] = useState([
        {
        id: 1,
        name: "Software",
        number: 99,
        type: "Compulsory",
        
        },
        {
        id: 2,
        name: "Hardware",
        number: 99,
        type: "Compulsory",
        },
        {
        id: 3,
        name: "DevOps",
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
             

             

            <Form.Item>
            {contextHolder}
              <Button
                background color="red"
                type="primary"
                onClick={finalize}
                htmlType="submit"
                className="w-full"
                size="small"
                button style={{ color: "white", fontSize: 18 }} 
              >
                Delete
              </Button>
              
            </Form.Item>
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
          Awaited Applications
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

export default AwaitedApplication;
