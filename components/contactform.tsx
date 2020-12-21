import React, { useState } from 'react'
import axios from 'axios'
import { Input, Label, Button, Box, Textarea, Message, Grid } from 'theme-ui'

const Contact = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: '' },
  })
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  })
  const handleServerResponse = (ok: boolean, msg: string) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setInputs({
        name: '',
        email: '',
        message: '',
      })
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: msg },
      })
    }
  }
  const handleOnChange = (e: { persist: () => void; target: { id: any; value: any } }) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: '' },
    })
  }
  const handleOnSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xgepkpen',
      data: inputs,
    })
      .then(() => {
        handleServerResponse(true, 'Thank you, your message has been submitted.')
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error)
      })
  }
  return (
    <Grid gap={2} columns={[1, '3fr']}>
      <form onSubmit={handleOnSubmit}>
        <Box p={2}>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            // type="text"
            name="name"
            onChange={handleOnChange}
            required
            value={inputs.name}
          />
        </Box>
        <Box p={2}>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="_replyto"
            onChange={handleOnChange}
            required
            value={inputs.email}
          />
        </Box>
        <Box p={2}>
          <Label htmlFor="message">Message</Label>
          <Textarea
            sx={{ fontFamily: 'Inter' }}
            id="message"
            name="message"
            onChange={handleOnChange}
            required
            value={inputs.message}
          />
        </Box>
        <Box p={2}>
          <Button type="submit" disabled={status.submitting} sx={{ width: '100%' }}>
            {!status.submitting ? (!status.submitted ? 'Submit' : 'Submitted') : 'Submitting...'}
          </Button>
        </Box>
      </form>
      <Box p={2}>
        {status.info.error && <Message>Error: {status.info.msg}</Message>}
        {!status.info.error && status.info.msg && <Message>{status.info.msg}</Message>}
      </Box>
    </Grid>
  )
}

export default Contact
