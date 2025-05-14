"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/src/components/header/Icons";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // Simula integración con un servicio de suscripción (puedes conectar con Mailchimp, etc.)
    console.log("Subscribed:", data);
    reset(); // Limpia el formulario tras el envío
  };

  return (
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-4 sm:m-10 flex flex-col items-center text-light dark:text-light">
      <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Noticias, Guías y Reseñas de Videojuegos
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Suscríbete para estar al día con las últimas noticias de videojuegos, guías exclusivas y reseñas. ¡Únete a nuestra comunidad de gamers en Universo Videoludico!
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-full max-w-md flex items-center bg-light dark:bg-dark p-2 sm:p-3 rounded mx-4"
        aria-label="Formulario de suscripción al boletín"
      >
        <div className="flex-1">
          <input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            {...register("email", {
              required: "El correo es requerido",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Ingresa un correo válido",
              },
            })}
            className="w-full bg-transparent text-dark dark:text-light focus:border-accent dark:focus:border-accentDark focus:ring-0 border-0 pl-3 sm:pl-4 pr-2 py-2"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-red-500 text-xs mt-1 pl-3">
              {errors.email.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-accent dark:bg-accentDark text-light dark:text-dark font-medium rounded px-4 sm:px-6 py-2 hover:bg-accent/80 dark:hover:bg-accentDark/80 transition-colors"
          aria-label="Suscribirse al boletín"
        >
          Suscribirse
        </button>
      </form>

      <div className="flex items-center mt-8 gap-4">
        <a
          href="https://linkedin.com/in/tu-perfil"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-6 h-6"
          aria-label="Perfil de LinkedIn"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href="https://github.com/tu-perfil"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-6 h-6"
          aria-label="Perfil de GitHub"
        >
          <GithubIcon className="hover:scale-125 transition-all ease duration-200 fill-light dark:fill-light" />
        </a>
      </div>

      <div className="w-full mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-center">
          &copy; {new Date().getFullYear()} Universo Videoludico. Todos los derechos reservados.
        </span>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link href="/sitemap.xml" className="text-center underline">
            Sitemap
          </Link>
          <Link href="/about" className="text-center underline">
            Acerca de
          </Link>
          <Link href="/contact" className="text-center underline">
            Contacto
          </Link>
        </div>
        <div className="text-center">
          Hecho con ♥ por{" "}
          <a
            href="https://tu-sitio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Universo Videoludico
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;