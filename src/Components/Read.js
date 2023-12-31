import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {Table, Button} from 'semantic-ui-react'
import { API_URL } from '../Constants/URL';
import { useNavigate } from 'react-router-dom';

function Read() {
  const [apiData, setapiData] = useState([]);
  const Navigate = useNavigate();


  const UpdateUser = ({firstName,lastName,checked,id}) => {
    localStorage.setItem('ID',id)
    localStorage.setItem('firstName',firstName)
    localStorage.setItem('lastName',lastName)
    localStorage.setItem('checked',checked)
    Navigate('/Update')

  }

  
  const deleteUser = async (id) =>{
    console.log(API_URL)
    const resp = await axios.delete(API_URL + id)
    console.log(resp)
    callGetAPI()
  }
  
  
  const callGetAPI = async () => {
    const resp = await axios.get(API_URL)
    setapiData(resp.data);
  }

  useEffect(() => {
    callGetAPI()
  },[])
  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              First Name
            </Table.HeaderCell>
            <Table.HeaderCell>
              Last Name
            </Table.HeaderCell>
            <Table.HeaderCell>
              Checked
            </Table.HeaderCell>
            <Table.HeaderCell>
              Delete
            </Table.HeaderCell>
            <Table.HeaderCell>
              Update
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            apiData.map(data =>( <Table.Row key={data.id}>
              <Table.Cell>{data.firstName}</Table.Cell>
              <Table.Cell>{data.lastName}</Table.Cell>
              <Table.Cell>{data.checked 
              ? 'false' :  "true"}</Table.Cell>
              <Table.Cell>
                <Button onClick={() => deleteUser(data.id)}>Delete</Button>

              </Table.Cell>
              <Table.Cell>
                <Button onClick={() => UpdateUser(data)}>Update</Button>

              </Table.Cell>
            </Table.Row>

            ))
          }
        </Table.Body>

      </Table> 

    </div>
  )
}

export default Read