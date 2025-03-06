import {ContactForm} from "~/components/contact-form";
import {Metadata} from "next";

export const metadata:Metadata = {
   title: "Contact",
}

export default function Page(){
  return <div>
    <ContactForm/>
  </div>
}
