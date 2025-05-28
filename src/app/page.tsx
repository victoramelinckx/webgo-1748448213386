
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Digitaliza Tus Ventas ¡Hoy Mismo!" subheadline="Para dueños ocupados de pequeños negocios, entregamos un sitio web de ventas en menos de 24 horas con soporte 24/7." cta1="Comienza Ahora" />
<How step1Title="Comparte tu visión" step1Desc="Rellena un formulario describiendo tu negocio." step2Title="Construye tu plataforma" step2Desc="Desarrollamos tu web de ventas en 24 horas." step3Title="Vende digitalmente" step3Desc="Empieza a vender online con nuestro soporte 24/7." />
<Aboutus headline="WebGo: Digitalizamos Negocios Locales Exitosos" subheadline="Transformamos su negocio físico en una próspera tienda online, maximizando ventas sin restarle tiempo a su día" beneficiotitulo1="Ventas 24/7" beneficio1="Negocio online disponible siempre, maximizando ingresos" beneficiotitulo2="Gestión Sin Esfuerzo" beneficio2="Nos encargamos de todo, usted solo ve crecer su negocio" />
<Services heading="Potenciate en el mundo digital, aumenta tus ventas" description="Con WebGo, liberate de la carga técnica y enfocate en lo que mejor sabes hacer: vender tu [producto]." services={[{"name":"Diseño Web Rápido","icon":"rocket","description":"Tu página lista en menos de 24 horas."},{"name":"Gestión de Ventas Online","icon":"shopping_cart","description":"Simplificamos el proceso de vender en Internet."},{"name":"Soporte 24/7","icon":"headset","description":"Estamos cuando nos necesites, siempre."},{"name":"Optimización SEO","icon":"search","description":"Aumenta tu visibilidad con nuestros expertos SEO."},{"name":"Formación Digital","icon":"school","description":"Te enseñamos a dominar las ventas online."},{"name":"Automatización de Procesos","icon":"sync","description":"Mejora la eficiencia de tu negocio."}]} />
<BeforeAndAfter subheadline="Explora la grandeza de nuestro trabajo, siempre entregando excelencia." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudar a mi pequeño negocio a digitalizar sus ventas?","respuesta":"WebGo te ofrece la solución perfecta para digitalizar tus ventas. Nuestra plataforma es fácil de utilizar y te permitirá llegar a nuevos clientes más allá de las recomendaciones personales. Además, te proporcionamos todas las herramientas necesarias para gestionar y optimizar tu sitio web, incluso si no tienes experiencia en el mundo digital."},{"pregunta":"¿Necesito conocimientos técnicos para manejar la plataforma de WebGo?","respuesta":"No, para nada. WebGo está diseñada para ser intuitiva y fácil de utilizar, incluso para aquellos que no tienen experiencia previa en la gestión de sitios web. Además, ofrecemos soporte y formación continua para ayudarte a sacar el máximo partido a nuestra plataforma."},{"pregunta":"¿Cómo puedo generar ventas online con WebGo si mis clientes están acostumbrados a las recomendaciones personales?","respuesta":"WebGo tiene un enfoque especial en SEO, lo que significa que tu sitio web estará optimizado para aparecer en los principales motores de búsqueda. Esto, combinado con nuestras herramientas de marketing digital, permitirá atraer a nuevos clientes y convertirlos en ventas, ampliando el alcance de tu negocio más allá de las recomendaciones personales."},{"pregunta":"¿Cuánto tiempo necesitaré dedicar a la gestión de mi sitio web con WebGo?","respuesta":"WebGo está diseñado para ahorrarte tiempo. Nuestro panel de control es fácil de usar y te permitirá gestionar tu sitio web de forma eficaz. Además, nuestro equipo de soporte está siempre disponible para ayudarte con cualquier duda o problema que puedas tener, por lo que puedes concentrarte en lo que mejor sabes hacer: dirigir tu negocio."},{"pregunta":"¿Cuáles son los beneficios de usar WebGo para digitalizar mi negocio?","respuesta":"WebGo te permite expandir tu negocio a la esfera digital, aumentando tu base de clientes y tus ventas. Además, nuestra plataforma es fácil de usar y está optimizada para motores de búsqueda, lo que significa que más personas encontrarán tu negocio online. Y lo mejor de todo es que puedes gestionar tu sitio web con facilidad, incluso si no tienes experiencia previa en la gestión de sitios web."}]} />
<BookAppointment 
                      heading="Transforma tu Negocio hoy" 
                      description="En WebGo, digitalizamos tu negocio y aumentamos tus ventas. Deja el manejo de tu sitio web en nuestras manos y enfócate en lo que mejor sabes hacer."
                      formPostUrl="http://localhost:3000/api/sendForm"
                      siteOwnerId="A3MapJBDobYfksUywsv525pT3Tm1"
                    />
<Footer />
    </main>
  );
}
