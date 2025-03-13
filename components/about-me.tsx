import { dataAboutMe, dataSlider } from "@/data";
import Title from "./shared/title";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
      <Title title="Sobre mi" subtitle="Conoceme" />
      <div className="grid md:grid-cols-2">
        <div className="py-12 md:-0 flex items-center justify-center">
          <Carousel
            opts={{
              align: "start",
            }}
            orientation="vertical"
            className="w-full max-w-xs h-fit"
          >
            <CarouselContent className="mt-1 h-[200px]">
              {dataSlider.map((data) => (
                <CarouselItem key={data.id}>
                  <div className="flex items-center justify-center">
                    <Image
                      src={data.url}
                      alt="image"
                      width={250}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div>
          <div className="grid md:grid-cols-3 mt-7 gap-4">
            {dataAboutMe.map((data) => (
              <div
                key={data.id}
                className="border border-white-10 rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800"
              >
                {data.icon}
                <p className="my-2">{data.name}</p>
                <p className="text-gray-400">{data.description}</p>
              </div>
            ))}
          </div>
          <p className="py-8">
            Soy Luciano Badenas, Full Stack Developer y músico. Desde Buenos
            Aires, Argentina, mi pasión por la programación comenzó como un
            hobby y se transformó en una carrera. Me formé en Henry, donde
            adquirí una sólida base en desarrollo de software y trabajo en
            equipo. Con 1 año de experiencia en desarrollo web, me he enfocado
            en crear aplicaciones funcionales y escalables. A lo largo de este
            tiempo, he trabajado en colaboraciones y proyectos académicos, donde
            he puesto en práctica metodologías ágiles y buenas prácticas.
            Además, he desarrollado varias aplicaciones personales y prácticas,
            enfocándome en la creación de soluciones eficientes. Soy un
            profesional autónomo, siempre en busca de nuevos retos. Me encanta
            viajar, conocer nuevas culturas y encontrar inspiración en cada
            experiencia. La música también es una parte importante de mi vida,
            lo que me ayuda a mantener la creatividad y la disciplina en mi
            trabajo.
          </p>
          <Button>
            <Phone size={20} className="mr-2" />
            Hablamos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
