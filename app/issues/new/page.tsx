


'use client'

import { TextField,  Button } from '@radix-ui/themes'
import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

<SimpleMDE />;

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-2'>
        <TextField.Root>
            <TextField.Input placeholder = "Title" />
        </TextField.Root>
        <SimpleMDE placeholder="description" />
        <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage