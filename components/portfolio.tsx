import { dataPortfolio } from "@/data";
import Title from "./shared/title";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Portfolio = () => {
  return (
    <div className="p-4 max-w-4xl md:py-24 mx-auto" id="portfolio">
      <Title title="Portfolio" subtitle="Mis proyectos" />

      <div className="grid md:grid-cols-3 gap-10 mt-12">
        {dataPortfolio.map((data) => (
          <div key={data.id}>
            <h3 className="text-xl mb-4">{data.title}</h3>
            <Image
              src={data.image}
              alt="Image"
              width={400}
              height={400}
              className="rounded-2xl w-full"
            />

            <div className="mt-5 flex gap-5">
              <Link
                className={buttonVariants({ variant: "outline" })}
                href={data.urlGithub}
                target="blank"
              >
                Github
              </Link>
              <Link
                className={buttonVariants()}
                href={data.urlDemo}
                target="blank"
              >
                Live Demo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
