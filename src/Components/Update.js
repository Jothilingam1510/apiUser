import axios from 'axios';
import React,{useState, useEffect} from 'react'
import { Form, Button,Checkbox } from 'semantic-ui-react'
import { API_URL } from '../Constants/URL';
import { useNavigate } from 'react-router-dom';


function Update() {  
  const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [checked, setChecked] = useState("false");
    const [id, setid] = useState("")
    const Navigate = useNavigate();
    

    const UpdateUser = () => {
      axios.post(API_URL,{
        firstName,
        lastName,
        id,
        checked
      });
      Navigate('/Read')

    }

  useEffect(() => {
    setid (localStorage.getItem('id'))
    setFirstName (localStorage.getItem('firstName'))
    setLastName(localStorage.getItem('lastName'))
    setChecked (localStorage.getItem('checked'))

  }, [])
  return (
    <Form className='form'>
    <Form.Field>
      <label>First Name</label>
      <input value={firstName}
      onChange={event => setFirstName(event.target.value)}
      placeholder='Enter the First Name'/>
    </Form.Field><br />
    <Form.Field>
      <label>Last Name</label>
      <input value={lastName}
       onChange={event => setLastName(event.target.value)}
       placeholder='Enter the Last Name'/>
    </Form.Field><br />
    <Form.Field>
      <Checkbox value={checked}
       onChange={event => setChecked(!checked)}
      label="Agree the Terms & Condition"/>
    </Form.Field><br />
    <Button onClick={UpdateUser}>Update</Button>
  </Form>
  )
}

export default Update