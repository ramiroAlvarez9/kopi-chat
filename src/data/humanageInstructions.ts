const stepsEs = [
  "Ingresar al mail de bienvenida a Humanage.",
  "Hacer clic en el botón “Humanage” para generar la contraseña.",
  "Ingresar una contraseña con un mínimo de ocho caracteres, repetirla y presionar “Establecer contraseña”.",
  "Ingresar el usuario correspondiente o correo electrónico y hacer clic en “Siguiente”.",
  "Ingresar la contraseña generada anteriormente y hacer clic en “Ingresar”.",
];

const stepsEn = [
  "Open the Humanage welcome email.",
  "Click the “Humanage” button to start setting your password.",
  "Create a password with at least eight characters, confirm it, and press “Set Password”.",
  "Enter your username or email address and click “Next”.",
  "Enter the password you just created and click “Log In”.",
];

export function formatHumanageInstructions(language: "es" | "en" = "es"): string {
  const steps = language === "en" ? stepsEn : stepsEs;
  const title =
    language === "en"
      ? "Humanage First Login Instructions"
      : "Instructivo de Primer Ingreso a Humanage";
  const intro =
    language === "en"
      ? "Follow these steps to access Humanage for the first time:"
      : "Seguí estos pasos para acceder a Humanage por primera vez:";
  return [title, intro, steps.map((step, index) => `${index + 1}. ${step}`).join("\n")].join("\n");
}

