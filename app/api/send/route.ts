import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Obtener los datos del cuerpo de la solicitud
    const dataForm = await req.json();

    // Verificar que los datos necesarios estén presentes
    if (!dataForm.username || !dataForm.message || !dataForm.email) {
      return new Response(
        JSON.stringify({ error: "Faltan campos requeridos en los datos" }),
        { status: 400 },
      );
    }

    // Intentar obtener la plantilla de correo, esperando a que la promesa se resuelva
    const emailContent = await EmailTemplate({
      firstName: dataForm.username,
      message: dataForm.message,
      email: dataForm.email,
    });

    // Asegurarte de que la promesa del contenido de la plantilla se haya resuelto antes de continuar
    if (!emailContent) {
      return new Response(
        JSON.stringify({ error: "No se pudo generar la plantilla de correo" }),
        { status: 500 },
      );
    }

    // Intentar enviar el correo a través de Resend
    const data = await resend.emails.send({
      from: "Contacto Portfolio <6CtYI@example.com>",
      to: "badenas101189@gmail.com",
      subject: "Nuevo Mensaje de Contacto",
      react: emailContent, // Ahora pasamos el contenido resuelto
      text: "Nuevo Mensaje de Contacto", // Texto en caso de que no se pueda renderizar el React
    });

    // Retornar la respuesta de éxito con los datos recibidos
    return new Response(JSON.stringify({ success: true, data: data }), {
      status: 200,
    });
  } catch (error: unknown) {
    // Manejo de errores: captura cualquier error durante el proceso
    if (error instanceof Error) {
      return new Response(
        JSON.stringify({ error: error.message || "Error desconocido" }),
        { status: 500 },
      );
    } else {
      return new Response(JSON.stringify({ error: "Error desconocido" }), {
        status: 500,
      });
    }
  }
}
