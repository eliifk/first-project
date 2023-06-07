import React from 'react'
import StudentNavbar from '../../components/navbar/StudentNavbar'
import { Button, Form, Input,message } from "antd";




const NoteBook = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Your information has been saved.',
      duration: 5,
    });
    };

    return (
    <>
    <StudentNavbar />
    <div className=" h-full flex justify-center">
        <div className="xl:px-40 px-10 w-1/2 flex flex-col h-full justify-center relative">
            <h1 className="text-center text-3xl font-bold mb-2">Daily Internship Report</h1>
            <Form layout="vertical">

            
            <Form.Item
              label="Name of student"
              
              name={"Name of student"}
             
            >
              <Input />
            </Form.Item>

            {/* firma adı */}
            <Form.Item
              label="Name of company"
              
              name={"Name of company"}
             
            >
              <Input />
            </Form.Item>


          
        <input type="file"  name="dosya" />
        
    
            


            <Form.Item>
            {contextHolder}
              <Button
                type="primary"
                onClick={success}
                htmlType="submit"
                className="w-full"
                size="large"
              >
                Save
              </Button>
            </Form.Item>

        </Form>
        </div>
        </div>
            
    
    </>  
    ) 
 };
 
 export default NoteBook;
 