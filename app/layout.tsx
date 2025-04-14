"use client";

import { ReactNode } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18next from "@/i18n.config";

interface IRootLayout {
  children: ReactNode;
}

const RootLayout = ({ children }: Readonly<IRootLayout>) => {
  const { i18n } = useTranslation();

  return (
    <html lang={i18n.language}>
      <body suppressHydrationWarning>
        <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
