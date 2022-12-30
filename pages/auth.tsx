import AuthForm from "components/AuthForm";
import MainLayout from "components/layouts/MainLayout";

const AuthPage = () => {
  return (
    <MainLayout pageTitle="Auth">
      <AuthForm />
    </MainLayout>
  );
};

export default AuthPage;
