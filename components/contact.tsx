import { dataContact } from "@/data";
import Title from "./shared/title";
import Link from "next/link";
import ContactForm from "./contact-form";

const Contact = () => {
  return (
    <div className="p-6 md:px-12 md:py-24 max-w-7xl mx-auto" id="contact">
      <Title title="Contacta Conmigo" subtitle="Ponte en contacto conmigo" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Tarjetas de contacto */}
        <div className="space-y-6">
          {dataContact.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-center bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6"
            >
              <div className="mb-4">{data.icon}</div>
              <p className="text-xl font-semibold">{data.title}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {data.subtitle}
              </p>
              <Link
                href={data.link}
                className="text-blue-600 hover:text-blue-800 font-semibold"
                target="_blank"
              >
                Enviar mensaje
              </Link>
            </div>
          ))}
        </div>

        {/* Formulario de contacto */}
        <div className="col-span-1 md:col-span-1">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
