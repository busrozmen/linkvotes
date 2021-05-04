import React , {useState}  from 'react'
import useLocalStorage from '../../useLocalStorage';
import { Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';
import nextId from "react-id-generator";
import './AddLink.css'
import { FaArrowLeft } from 'react-icons/fa';
import {Link} from 'react-router-dom';


const AddLink = () =>{
    const [links, setLinks] = useLocalStorage('links', []);
    const [linkName , setLinkName] = useState('');
    const [linkUrl, setLinkUrl] = useState('');
    const [addedAlert, setAddedAlert] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLinks([{
            id:nextId(),
            name:linkName,
            url: linkUrl,
            vote:0,
            date:Date.now()
        },...links])
        setAddedAlert(true);
        setTimeout(function(){
            setAddedAlert(false);
        },1000);
    }
    return (

        <div className='add-link'>
          <h5> Add a new Link</h5>
          { addedAlert &&
            <Alert color='success'>
            {linkName} added!
            </Alert>
        }
          <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for='linkName'>Link Name</Label>
                <Input type='text' name='name' id='linkName' placeholder='Github' required={true} value={linkName} onChange={(e) => setLinkName(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label for='linkUrl'>Link Url</Label>
                <Input type='text' name='url' id='linkUrl' placeholder='https://github.com/' required={true} value={linkUrl} onChange={(e) => setLinkUrl(e.target.value)} />
            </FormGroup>
            <Button type='submit'>Add</Button>
          </Form>
          <Link to='/'>
          <p><FaArrowLeft /> Return to List</p>
          </Link>
        </div>
    )
}

export default AddLink
