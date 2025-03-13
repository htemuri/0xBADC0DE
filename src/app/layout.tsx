import { Footer, Layout, Navbar, ThemeSwitch } from "nextra-theme-blog";
import { Banner, Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-blog/style.css";
import React from "react";
import './globals.css'
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Blog Example",
};

export default async function RootLayout({ children }) {
  // const banner = (
  //   <Banner storageKey="4.0-release">
  //     🎉 Nextra 4.0 is released.{" "}
  //     <a href="#" className="x:text-primary-600">
  //       Read more →
  //     </a>
  //   </Banner>
  // );

  return (
    <html lang="en" suppressHydrationWarning>
      <Head backgroundColor={{ dark: "#09090b", light: "#ffffff" }} faviconGlyph="" />
      <body>
        <Layout>
          <div className="flex gap-3 mb-2 items-center">
            <span className="text-xl cursor-default">Harris Temuri</span>
            <div className="grow-1" />
            <Search />
            <ThemeSwitch />
          </div>
          <Separator className="mb-2 " />
          <div className="flex">
            <Navbar pageMap={await getPageMap()}></Navbar>

          </div>

          {children}

          <Footer>
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
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
