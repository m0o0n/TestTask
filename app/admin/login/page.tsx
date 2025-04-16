import AuthLayout from "@/components/layout/AuthLayout";
import AuthHero from "@/components/shared/AuthHero";
import LoginForm from "@/components/forms/LoginForm";

const LoginPage = () => (
  <AuthLayout>
    <AuthHero />
    <LoginForm />
  </AuthLayout>
);

export default LoginPage;
