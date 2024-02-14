


'use client'

import { TextField,  Button } from '@radix-ui/themes'
import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from 'axios';

import {useForm, Controller, } from 'react-hook-form'
import { useRouter } from 'next/navigation';

interface IssueForm{
    title: string;
    description: string
}

const NewIssuePage = () => {
    const router = useRouter()

    const {register, control, handleSubmit} = useForm<IssueForm>();
  return (
    <form className='max-w-xl space-y-2' onSubmit={handleSubmit(async (data)=> {
        await axios.post("/api/issues", data)
        router.push("/issues")
    })}>
        <TextField.Root>
            <TextField.Input placeholder = "Title"  {...register('title')}/>
        </TextField.Root>
        <Controller
            name="description"
            control={control}
            render={({field})=> <SimpleMDE placeholder="description"  {...field}/>}
        />
        
        <Button>Submit New Issue</Button>
    </form>
  )
}

export default NewIssuePage