import { Button, Form, Input ,Radio ,message, DatePicker} from "antd";


import StudentNavbar from '../../components/navbar/StudentNavbar'



const PersonalInformation = () => {

  
  
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
        <div className="h-screen overflow-auto">
      <div className="flex justify-center vh-100">
        <div className="xl:px-20 px-10 py-10 w-1/2 flex flex-col h-full justify-center relative">
        <h1 className="text-center text-3xl font-bold mb-2 ">My Personal Information</h1>
          <Form layout="vertical">
            {/* Identification number */}
            <Form.Item
              label="Identification number"
              name={"Identification number"}
              rules={[
                {
                  required: true,
                  message: "Identification number must be required!",
                },
              ]}
              
            >
              <Input />
              </Form.Item>
            {/* E-mail */}
            <Form.Item
              label="E-mail"
              name={"email"}
              rules={[
                {
                  required: true,
                  message: "E-mail must be required!",
                },
              ]}
            >
              <Input />
            

              
            </Form.Item>
            {/* Address */}
            <Form.Item label="Address" name={"address"}>
              <Input />
            
            </Form.Item>
            {/* Place of Birth */}
            <Form.Item label="Place of Birth" name={"Place of Birth"}>
              <Input />
              </Form.Item>
            {/* Day of Birth */}
            
            <Form.Item label="Day Of Birth">
            <DatePicker />
            </Form.Item>
              
              
            
            <Form.Item label="Driving Lisence" name={"Driving Lisence"}>
            <Radio>Yes</Radio>
            <Radio>NO </Radio>
            </Form.Item>
            <Form.Item label="Gender" name={"Gender"}>
            <Radio>Female</Radio>
            <Radio>Male </Radio>
              
            
            </Form.Item>
          
            
           
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
    </div>
    </>  
  );
};

export default PersonalInformation;