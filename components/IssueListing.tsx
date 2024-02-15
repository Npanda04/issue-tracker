


'use client'
import React,{useState, useEffect} from 'react';
import axios from "axios"
import { Grid, Box, Flex } from '@radix-ui/themes';


const IssueListing = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/issues");
        setIssues(response.data);
      } catch (error) {
        // Handle error, for example, log it or show an error message to the user
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {issues.map((issue) => (
        <div key={issue.id} className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
          <div>
          {issue.id}
          </div>
          <div>
          {issue.title}
          </div>
          <div>
          {issue.description}
          </div>
          



        </div>
      ))}




<Grid columns="3" gap="3">
  <Flex direction="row" gap="3">
    <Box height="9">
      heyyy
      
    </Box>
    <Box height="9">
      thiss
      
    </Box>
    <Box height="9">

      my name
      
    </Box>
  </Flex>
</Grid>
    </div>
  );
};

export default IssueListing;

