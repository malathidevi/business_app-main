"use client";

import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 mt-16 px-5 md:px-16 py-10 md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href={"/"} className="text-3xl flex items-center">
              <Image
                src="/malathi.jpg"
                alt="Malathidevi"
                width={50}
                height={40}
                className="rounded-full mr-2"
              />
              <span className="text-rose-600">M</span>alathidevi.
            </Link>

            <p className="max-w-xs mt-4 text-sm">
              I'm Malathidevi, I am passionate about Full-Stack development and thrive on building robust and scalable web applications.
            </p>
            <div className="flex mt-8 space-x-6">
              <Link href="https://github.com/malathidevi" target="_blank">
                <GitHubIcon className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/t-malathi-devi-5928b3228/"
                target="_blank"
              >
                <LinkedInIcon className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
              </Link>
              <Link href="mailto:tulasidevi246@gmail.com" target="_blank">
                <TwitterIcon className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
              </Link>
              <Link
                href="https://www.instagram.com/madhu_naidus_/"
                target="_blank"
              >
                <InstagramIcon className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
              </Link>
            </div>
          </div>

          <div className="grid gap-8 lg:col-span-2 grid-cols-2 md:grid-cols-4">
            <div>
              <p className="font-medium">TECHNOLOGIES</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  React.js
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Node.js
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Next.js
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  MongoDB
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">PROJECTS</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Creatorships Platform
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Portfolio Website
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  E-commerce Site
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Blog Platform
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">RESOURCES</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Documentation
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Tutorials
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Blog
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">COMMUNITY</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Forum
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Discord
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Events
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Meetups
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs">© 2025 Malathidevi - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
