import React from 'react'
import StudentNavbar from '../../components/navbar/StudentNavbar'
import { Input,Form,}from 'antd';

const Project=()=>{
    const { TextArea } = Input;
    return (
        <>
            <StudentNavbar/>
            <div className=" h-full flex justify-left">
                <div className="xl:px-40 px-10 w-1/2 flex flex-col h-full justify-center relative">
                    <h1 className="text-center text-3xl font-bold mb-2">Project and Competencies</h1>

      <html>
  
      <body>

      <table  width="100%" cellpadding="5" >
      <tr >

      <td width="100%" valign="top" >

                    <Form.Item label="___________My Projects____________">
                      <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item label="______Project Descriptions______">
                      <TextArea rows={4} />
                    
                    </Form.Item>
                    <Form.Item label="___________Certificates_____________">
                      <TextArea rows={4} />
                    
                    </Form.Item>

                    <Form.Item label="_______Certificates Descriptions_______">
                      <TextArea rows={4} />
                    
                    </Form.Item>

      </td>

      <td width="100%" valign="top">
                <Form.Item label="__________Internship Experiences_____________">

                <TextArea rows={4} />
                </Form.Item>
                <Form.Item label="__________Seminars_____________">
                <TextArea rows={4} />
                </Form.Item>

                

      </td>

                </tr>
       </table>

       </body>
       </html>

  

                </div>
              </div>
                
                
                
                
        </>            
    );
};
export default Project;