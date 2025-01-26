import React from "react";
import { z } from "zod";
import { Form, FormField, FormItem } from "@repo/ui/components/ui/form";
import { useForm, } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@repo/ui/components/ui/input";
import { Button } from "@repo/ui/components/ui/button";

const schema = z.object({
  email: z.string().email(),
  content: z.string().min(10),
});

type FormType = z.infer<typeof schema>;

export const ContactForm: React.FC = () => {
  const form = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormType) => {
    try {

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
