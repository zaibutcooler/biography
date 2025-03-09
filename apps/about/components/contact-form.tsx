"use client"

import React from "react";
import { z } from "zod";
import { Form, FormField, FormItem } from "@repo/ui/components/ui/form";
import { useForm, } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@repo/ui/components/ui/input";
import { Button } from "@repo/ui/components/ui/button";
import {notifyAndSave} from "~/app/contact/actions";

const schema = z.object({
  email: z.string().email(),
  content: z.string().min(10),
});

export type ContactFormType = z.infer<typeof schema>;

export const ContactForm: React.FC = () => {
  const form = useForm<ContactFormType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ContactFormType) => {
    try {
      const response = await notifyAndSave(data);

    }catch (e){
      console.log("ERROR ",e)
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name={"email"}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <Input {...field} placeholder={"Email"} />
            </FormItem>
          )}
        />

        <FormField
          name={"content"}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <Input {...field} placeholder={"Content"} />
            </FormItem>
          )}
        />

        <Button type={"submit"}>Submit</Button>
      </form>
    </Form>
  );
};
