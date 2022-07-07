import React from 'react'
import { Form, Stack } from 'react-bootstrap'

function PersonalSection() {
  return (
    <div className=''>
        <Stack gap={3}>
            <span className='font-weight-bold'>Personal</span>
            <Stack gap={2} direction="horizontal" className='d-flex'>
                <div>
                    <span>First Name</span>
                    <input type="text" placeholder="mobina" className="editprofile_input"/>
                </div>
                <div>
                    <span>Surname</span>
                    <input type="text" placeholder="Mr" className="editprofile_input"/>
                </div>
            </Stack>
            <div>
                <span>Date of birth</span>
                <input type="text" placeholder="Enter value" className="editprofile_input"/>
            </div>
            <div>
                <span>Education Level</span>
                <Form.Select aria-label="Default select example" className="editprofile_input">
                <option>enter here</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </Form.Select>
            </div>
            <div>
                <span>Occupation</span>
                <Form.Select aria-label="Default select example" className="editprofile_input">
                <option>enter here</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </Form.Select>
            </div>
            <div>
                <span>Company</span>
                <Form.Select aria-label="Default select example" className="editprofile_input">
                <option>enter here</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </Form.Select>
            </div>
            <div className='d-flex'>
                <button className='metablog_primary-filled-square-button'>
                    <font size="2">Save</font>
                </button>
            </div>
          
        </Stack>
        
    </div>
  )
}

export default PersonalSection