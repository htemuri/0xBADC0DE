import { Layout, Navbar, ThemeSwitch } from "nextra-theme-blog";
import { Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-blog/style.css";
import React from "react";
import './globals.css'
import { Separator } from "@/components/ui/separator";
import { GitHubIcon } from "nextra/icons";
import Link from "next/link";
import { LinkedinIcon } from "lucide-react";

export const metadata = {
  title: { template: "%s - Harris\'s Blog" },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head backgroundColor={{ dark: "#09090b", light: "#ffffff" }} faviconGlyph="" />
      <body>
        <Layout>
          <div className="flex gap-3 mb-2 items-center">
            <code className="text-xl cursor-default text-cyan-600 dark:text-cyan-300 mt-1.5">0xBADC0DE</code>
            <div className="grow-1" />
            <Search />
            <ThemeSwitch />
            <Link href={"https://github.com/htemuri"} target="_blank">
              <GitHubIcon width={15} />
            </Link>
            <Link href={"https://linkedin.com/in/harris-temuri"} target="_blank">
              <LinkedinIcon width={15} className="ml-1" />
            </Link>
          </div>
          <Separator className="mb-2 " />
          <div className="flex">
            <Navbar pageMap={await getPageMap()}></Navbar>
          </div>

          {children}

          {/* <Footer>
            <abbr
              title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
              style={{ cursor: "help" }}
            >
              CC BY-NC 4.0
            </abbr>{" "}
            {new Date().getFullYear()} © Harris Temuri.
            <a href="/feed.xml" style={{ float: "right" }}>
              RSS
            </a>
          </Footer> */}
        </Layout>
      </body>
    </html>
  );
}
