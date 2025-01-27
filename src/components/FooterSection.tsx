"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  logoUrl: string;
}

export function Footer({ logoUrl }: FooterProps) {
  return (
    <footer className="border-t">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center space-x-4">
            <Image
              src={logoUrl}
              alt="Harkh Logo"
              width={130}
              height={130}
              className="w-[130px] h-[130px]"
            />
            <span className="text-2xl font-bold">Harkh</span>
          </div>
          <nav className="flex gap-4 flex-wrap">
            <Button variant="link" asChild>
              <Link href="#">About</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="#">Privacy Policy</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="#">Licensing</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="#">Contact</Link>
            </Button>
          </nav>
        </div>
        <div className="mt-8 border-t pt-4">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 Harkh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}