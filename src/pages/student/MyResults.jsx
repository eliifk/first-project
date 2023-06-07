import StudentNavbar from "../../components/navbar/StudentNavbar";
import React from 'react'
import { Divider } from 'antd';
const MyResults = () => {
  
    
  
 
  return (
    <>
      <StudentNavbar />
      <h1 className="text-center text-2xl font-bold mb-2">There is no evaluation</h1>
      

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider dashed />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </>

  );
};

export default MyResults;
