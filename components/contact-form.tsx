"use client"; // Esto indica que el componente solo debe ejecutarse en el cliente.

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form"; // Asegúrate de importar correctamente useForm
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "./ui/textarea"; // Asegúrate de tener estos componentes
import { Button } from "./ui/button";
import { Check } from "lucide-react"; // Asegúrate de importar correctamente el icono de Check

// Define tu esquema de validación con Zod
const schema = z.object({
  username: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("El correo debe ser válido"),
  message: z.string().min(1, "El mensaje no puede estar vacío"),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  // Mantenemos el estado del cliente pero lo inicializamos como `true` para permitir hooks.
  const [isClient, setIsClient] = useState(true);
  const [messageSent, setMessageSent] = useState(false); // Estado para mostrar el mensaje de éxito

  useEffect(() => {
    setIsClient(true); // Esto asegura que solo se ejecute en el cliente
  }, []);

  // `useForm` se inicializa siempre, no de forma condicional
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log("Datos enviados:", data);

    // Aquí simulas que se envió el mensaje, incluso si no se realiza realmente
    setMessageSent(true);

    // En un caso real, aquí iría la lógica para enviar el formulario, por ejemplo, un POST a tu backend
  };

  // Si `isClient` es false, el formulario no se renderiza
  if (!isClient) return null;

  return (
    <div className="p-6 md:px-12 md:py-24 max-w-5xl mx-auto" id="contact">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 bg-white p-8 rounded-lg shadow-lg dark:bg-slate-800"
      >
        <div>
          <label
            htmlFor="username"
            className="block text-lg font-medium text-gray-700 dark:text-gray-300"
          >
            Nombre:
          </label>
          <input
            id="username"
            type="text"
            placeholder="Tu nombre"
            className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            {...register("username")}
          />
          {errors.username && (
            <span className="text-red-600">{errors.username.message}</span>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700 dark:text-gray-300"
          >
            Correo:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Tu correo electrónico"
            className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-600">{errors.email.message}</span>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-lg font-medium text-gray-700 dark:text-gray-300"
          >
            Mensaje:
          </label>
          <Textarea
            id="message"
            placeholder="Tu mensaje"
            className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            {...register("message")}
          />
          {errors.message && (
            <span className="text-red-600">{errors.message.message}</span>
          )}
        </div>

        <Button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700"
        >
          Enviar
        </Button>
      </form>

      {messageSent && (
        <div className="mt-6 p-4 bg-green-100 text-green-700 border border-green-400 rounded">
          <div className="flex items-center">
            <Check size={24} className="mr-2" />
            <span>Mensaje enviado</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
