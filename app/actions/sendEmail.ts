// app/actions/sendEmail.ts
"use server";

import { Resend } from "resend";

export const sendEmail = async (formData: FormData) => {
  // 1. Leer las variables de entorno de forma segura DENTRO de la función
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  // 2. Validar que las variables existan en el entorno del servidor (Vercel)
  if (!resendApiKey || !toEmail) {
    console.error(
      "Error: Las variables de entorno RESEND_API_KEY y NEXT_PUBLIC_CONTACT_EMAIL deben estar definidas en el entorno del servidor (Vercel)."
    );
    return {
      error: "Error de configuración del servidor. Contacte al administrador.",
    };
  }

  // 3. Obtener los datos del formulario
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !subject || !message) {
    return { error: "Faltan campos requeridos." };
  }

  // 4. Intentar enviar el correo
  try {
    const resend = new Resend(resendApiKey);

    const { data, error } = await resend.emails.send({
      from: "Contacto Web <web@submarinachiloe.com>", // Actualizado para usar el dominio verificado
      to: [toEmail],
      replyTo: email,
      subject: `Nuevo mensaje de contacto: ${subject}`,
      html: `
        <p>Has recibido un nuevo mensaje desde el formulario de contacto de submarinachiloe.com:</p>
        <ul>
          <li><strong>Nombre:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Teléfono:</strong> ${phone || "No proporcionado"}</li>
        </ul>
        <hr>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Error detallado de Resend:", JSON.stringify(error, null, 2));
      return { error: "Hubo un problema al enviar el mensaje." };
    }

    return { success: "¡Mensaje enviado con éxito!" };
  } catch (e) {
    console.error("Excepción al intentar enviar email:", e);
    return { error: "Hubo un problema en el servidor al enviar el mensaje." };
  }
};
