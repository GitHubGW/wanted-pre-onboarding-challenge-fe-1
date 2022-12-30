import Head from "next/head";

interface MainLayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const MainLayout = ({ pageTitle, children }: MainLayoutProps) => {
  return (
    <div className="flex justify-center items-center h-screen bg-red-200">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {children}
    </div>
  );
};

export default MainLayout;
