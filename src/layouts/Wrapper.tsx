import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";
import "../app/style.css";

export interface WrapperProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  wrapperClasses?: string;
  title?: string;
  className?: string;
}

const Wrapper = ({ children, title }: WrapperProps) => {
  return (
    <div>
      <Head>
        <title>Anthony Key | Portfolio</title>
        <meta
          name="description"
          content="A Software Developer with 6 years of professional experience. Looking for Unity Contract / Permanent opportunities! Get in touch!"
        />
        <link rel="icon" href="/favicon.ico" />
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
