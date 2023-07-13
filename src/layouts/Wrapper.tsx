import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";
import "../app/style.css";
import { useEffect } from "react";
import ReactGA from "react-ga";

export interface WrapperProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  wrapperClasses?: string;
  title?: string;
  className?: string;
}

const Wrapper = ({ children, title }: WrapperProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ReactGA.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div>
      <Head>
        <title>
          Anthony Key | Software Engineer, Unity Developer Portfolio
        </title>
        <meta
          name="description"
          content="A Software Developer with 6 years of professional experience. Looking for Unity Contract / Permanent opportunities! Get in touch!"
        />
        <link rel="icon" href="/favicon.ico" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DKSTM0VM7W"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-DKSTM0VM7W', {
  page_path: window.location.pathname,
});
`,
          }}
        ></script>
      </Head>

      <div>{children}</div>
    </div>
  );
};

export const UnauthenticatedWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Wrapper;
