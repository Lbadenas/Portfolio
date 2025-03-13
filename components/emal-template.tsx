import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  message,
}) => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        color: "#333",
      }}
    >
      <h2 style={{ color: "#007bff" }}>Nuevo Mensaje de Contacto</h2>
      <p>
        <strong>Nombre:</strong> {firstName}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Mensaje:</strong>
      </p>
      <p
        style={{ background: "#f4f4f4", padding: "10px", borderRadius: "5px" }}
      >
        {message}
      </p>
      <hr />
      <p style={{ fontSize: "12px", color: "#777" }}>
        Este es un mensaje automático. Por favor, no responder a este correo.
      </p>
    </div>
  );
};
