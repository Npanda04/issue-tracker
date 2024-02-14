"use client";

import { TextField, Button, Callout, Text } from "@radix-ui/themes";
import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";

import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { issueSchema } from "@/app/validationSchema";
import { z } from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";

const IssueForm = z.infer<typeof issueSchema>;

const NewIssuePage = () => {
    const router = useRouter();

    const { register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({
        resolver: zodResolver(issueSchema)
    });
    const [error, setError] = useState("");
    return (
        <div className="max-w-xl">
            {error && <Callout.Root color="red" className="mb-5">
                <Callout.Text>
                    {error}
                </Callout.Text>
            </Callout.Root>}

            <form
                className="space-y-2"
                onSubmit={handleSubmit(async (data) => {
                    try {
                        await axios.post("/api/issues", data);
                        router.push("/issues");
                    } catch (error) {
                        setError("An unexpected error occurred.");
                    }
                })}
            >
                <TextField.Root>
                    <TextField.Input placeholder="Title" {...register("title")} />
                </TextField.Root>


                <ErrorMessage>
                    {errors.title?.message}
                </ErrorMessage>

                <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                        <SimpleMDE placeholder="description" {...field} />
                    )}
                />
                <ErrorMessage>
                    {errors.description?.message}
                </ErrorMessage>

                <Button>Submit New Issue</Button>
            </form>
        </div>
    );
};

export default NewIssuePage;
