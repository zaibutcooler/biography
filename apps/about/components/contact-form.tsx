import React from "react";
import {z} from "zod";
import {Form, FormField, FormItem} from "@repo/ui/components/ui/form";
import {useForm} from "react-hook-form";
import {Input} from "@repo/ui/components/ui/input";

const schema = z.object({
  email: z.string().email(),
  content: z.string().min(10),
})

type FormType = z.infer<typeof schema>

export const ContactForm: React.FC = () => {
  const form = useForm<FormType>({
    resolver:zodResolver(schema),
  })

  const onSubmit = async (data:FormType) => {

  }

  return <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name={"email"} control={form.control} render={
          ({field}) => <FormItem>
            <Input {...field} placeholder={"Email"}/>
          </FormItem>
        }/>

        <FormField name={"content"} control={form.control} render={
          ({field}) => <FormItem>
            <Input {...field} placeholder={"Content"}/>
          </FormItem>
        }/>
      </form>
    </Form>
}
