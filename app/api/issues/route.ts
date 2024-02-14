import { describe } from 'node:test';

import { NextRequest, NextResponse } from "next/server"
import zod from "zod"
import prisma from "@/prisma/client"
import { stat } from 'node:fs';



const issueSchema = zod.object({
    title : zod.string().min(1).max(255),
    description : zod.string().min(1)
})

export async function POST(request: NextRequest){
    const body = await request.json()
    const validation =  issueSchema.safeParse(body)

    if(!validation.success){
        return NextResponse.json(validation.error.errors, {status: 400})
    }

    const newIssue = await prisma.issue.create({
        data:{
            title: body.title,
            description: body.description
        }
    })
    return NextResponse.json(newIssue, {status: 200})
}

