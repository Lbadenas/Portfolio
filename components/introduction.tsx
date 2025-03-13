import { Mail, Paperclip } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import { Container } from "./shared/container";
const Introduction = () => {
  return (
    <Container>
      <div className="text-center" id="home">
        <h3 className="text-xl mb-3">Hola mi nombre es</h3>
        <h1 className="text-4xl font-bold mb-3">Luciano Badenas</h1>
        <h2 className="text-2xl text-gray-400">Fullstack developer</h2>
        <div className="flex items-center">
          <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
            <Link className={buttonVariants()} href="#contact">
              <Mail className="mr-2" />
              Contacta conmigo
            </Link>
            <Link
              className={buttonVariants({ variant: "secondary" })}
              href="/cv-luciano-badenas.pdf"
              target="_blank"
            >
              <Paperclip className="mr-2" />
              Descargar CV
            </Link>
          </div>
        </div>
        <Image
          src="/profile.jpeg"
          alt="profile"
          width={500}
          height={500}
          className="mt-10 rounded-[25px] "
        />
      </div>
    </Container>
  );
};

export default Introduction;
