import React from 'react'
import { Form, Stack } from 'react-bootstrap'

function ContactSection() {
  return (
    <div className=''>
        <Stack gap={3}>
            <span className='font-weight-bold'>Contact</span>
            <div>
                <span>Email</span>
                <input type="text" placeholder="Enter value" className="editprofile_input"/>
            </div>
            <div className='checking-div'>
                <span>Phone Number</span>
                <Stack gap={2}  direction="horizontal">
                    <div className='w-25'>
                    <Form.Select aria-label="Default select example" className="editprofile_input">
                    <option>+98</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </Form.Select>
                    </div>
                    <div className='w-75'>
                        <input type="text" placeholder="9120000000" className="editprofile_input"/>
                    </div>
                </Stack>
            </div>
            <div>
                <span>Country</span>
                <Form.Select aria-label="Default select example" className="editprofile_input">
                <option>enter here</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </Form.Select>
            </div>
            <div>
                <span>City</span>
                <Form.Select aria-label="Default select example" className="editprofile_input">
                <option>enter here</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </Form.Select>
            </div>
            <div>
                <span>Designation</span>
                <Form.Select aria-label="Default select example" className="editprofile_input">
                <option>enter here</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </Form.Select>
            </div>
        </Stack>
        
    </div>
  )
}

export default ContactSection