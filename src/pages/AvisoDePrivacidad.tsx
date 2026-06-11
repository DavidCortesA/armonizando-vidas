import { ArrowLeft, Download, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';

const documentUrl = '/documentos/aviso-de-privacidad-integral-armonizando-vidas-abp.pdf';

export default function AvisoDePrivacidad() {
  return (
    <>
      <SEOHead
        title="Aviso de Privacidad Integral | Armonizando Vidas A.B.P."
        description="Consulta el Aviso de Privacidad Integral de Armonizando Vidas A.B.P. y conoce cómo recabamos, utilizamos y protegemos los datos personales."
        url="https://armonizandovidas.org/aviso-de-privacidad"
        type="article"
      />

      <header className="privacy-hero">
        <div className="page-container py-20 sm:py-24">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} aria-hidden="true" />
            Volver al inicio
          </Link>
          <div className="mt-10 max-w-4xl">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Protección de datos personales
            </span>
            <h1 className="privacy-title mt-6">Aviso de Privacidad Integral</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate sm:text-lg">
              En Armonizando Vidas A.B.P. tratamos la información y los datos personales de
              beneficiarios, colaboradores, donantes, asociados, empleados y proveedores de
              forma estrictamente confidencial.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a className="button-primary" href={documentUrl} download>
                <Download size={18} aria-hidden="true" />
                Descargar aviso en PDF
              </a>
              <span className="text-sm font-semibold text-slate">
                Última actualización: 11 de junio de 2026
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="page-container privacy-layout py-14 sm:py-20">
        <aside className="privacy-summary" aria-label="Información de contacto">
          <ShieldCheck size={34} aria-hidden="true" />
          <h2 className="mt-5 text-xl font-extrabold">Responsable de los datos</h2>
          <p className="mt-3 text-sm leading-7 text-white/75">Armonizando Vidas A.B.P.</p>
          <div className="mt-7 space-y-5 text-sm">
            <a
              href="https://maps.google.com/?q=Calle+8+de+mayo+3850+Colonia+16+de+septiembre+Monterrey+Nuevo+Leon+64160"
              className="privacy-contact"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={18} aria-hidden="true" />
              <span>
                Calle 8 de Mayo #3850, Col. 16 de Septiembre, Monterrey, N.L., México, C.P.
                64160
              </span>
            </a>
            <a href="tel:+528129329978" className="privacy-contact">
              <Phone size={18} aria-hidden="true" />
              <span>81 29 32 99 78</span>
            </a>
            <a href="mailto:info@armonizandovidas.org" className="privacy-contact">
              <Mail size={18} aria-hidden="true" />
              <span>info@armonizandovidas.org</span>
            </a>
          </div>
          <a className="button-light mt-8 w-full" href={documentUrl} download>
            <Download size={17} aria-hidden="true" />
            Descargar documento
          </a>
        </aside>

        <article className="privacy-document">
          <section>
            <h2>Compromiso de confidencialidad</h2>
            <p>
              En Armonizando Vidas A.B.P. la información y los datos personales de los
              beneficiarios, colaboradores, donantes, asociados, empleados y proveedores son
              tratados de forma estrictamente confidencial y con la secrecía necesaria para
              lograr los fines de la organización. Por ello hacemos un esfuerzo permanente para
              salvaguardarlos, de conformidad con los artículos 8, 15, 16 y 36 de la Ley Federal
              de Protección de Datos Personales en Posesión de los Particulares.
            </p>
          </section>

          <section>
            <h2>Identidad y domicilio de la organización</h2>
            <p>
              Armonizando Vidas A.B.P. es una asociación civil sin fines de lucro, enfocada a
              beneficiar a niños, adolescentes, jóvenes y adultos de escasos recursos y grupos
              vulnerables por edad, sexo y discapacidad, y tiene por objeto realizar las
              siguientes actividades:
            </p>
            <ol className="privacy-alpha-list">
              <li>
                Desarrollo de centros de capacitación enfocados a la obtención de conocimientos
                básicos para la consecución de un oficio, con el objeto de mejorar las
                circunstancias de carácter social que impulsen el desarrollo integral de niños,
                adolescentes, jóvenes y adultos, a fin de que sean ciudadanos económicamente
                activos.
              </li>
              <li>
                Proporcionar orientación social, fomentando valores humanos y culturales que
                inciden en el desarrollo y formación integral de las personas.
              </li>
              <li>
                Brindar refrigerios a niños, adolescentes, jóvenes y mujeres de escasos recursos
                y/o en situación vulnerable.
              </li>
              <li>
                Donar despensas y víveres a comunidades en situación vulnerable a través de
                nuestro Banco de Alimentos, apoyando semana tras semana a niños, jóvenes, madres
                de familia, centros comunitarios y asociaciones civiles.
              </li>
            </ol>
            <p>
              Nuestra misión es contribuir en la disminución de la problemática social y
              económica de nuestra ciudad, alejando a los niños de los peligros de las calles,
              mejorando la calidad de vida de las familias y sus niveles de alimentación, y
              llevando comida a donde más se necesita.
            </p>
            <p>
              En concordancia con el derecho a la protección de datos personales en posesión de
              particulares consagrado en el artículo 6° de la Constitución Política de los
              Estados Unidos Mexicanos, así como en cumplimiento de las disposiciones de la Ley
              Federal de Protección de Datos Personales en Posesión de los Particulares y con
              base en los principios de licitud, consentimiento, información, calidad, finalidad,
              lealtad, proporcionalidad y responsabilidad, Armonizando Vidas A.B.P., con el
              domicilio indicado en esta página, es responsable de recabar y proteger los datos
              personales, así como del uso que se les dé.
            </p>
            <p>
              Si el titular de los datos personales no acepta en forma absoluta y completa los
              términos y condiciones de este aviso, deberá abstenerse de compartir cualquier tipo
              de información con Armonizando Vidas A.B.P. por cualquier medio físico, óptico y/o
              electrónico.
            </p>
          </section>

          <section>
            <h2>Propósito para la recolección y uso de los datos</h2>
            <p>Los datos personales son utilizados para las siguientes finalidades:</p>
            <ol className="privacy-alpha-list">
              <li>
                En la comunicación con terceros y donantes nacionales e internacionales, con
                fines estadísticos, administrativos y de recaudación de fondos para apoyar la
                atención de los beneficiarios.
              </li>
              <li>
                Para el registro de los beneficios y obligaciones establecidos por las leyes
                mexicanas, así como para fines administrativos, de desarrollo y estadísticos
                relacionados con nuestros trabajadores.
              </li>
              <li>
                Los datos personales de los donantes, personas físicas y morales, nacionales e
                internacionales, son utilizados internamente para fines estadísticos,
                administrativos y de recaudación de fondos; y externamente para transparentar el
                origen y destino de los recursos operados por Armonizando Vidas A.B.P.
              </li>
              <li>
                Los datos personales de los diferentes grupos de interés serán tratados para
                mantener una comunicación fluida mediante el envío de información, invitaciones y
                felicitaciones, así como para llevar a cabo trámites administrativos.
              </li>
            </ol>
          </section>

          <section>
            <h2>Datos personales recabados</h2>
            <h3>De las personas físicas</h3>
            <ul>
              <li>Nombre completo.</li>
              <li>Dirección.</li>
              <li>Teléfono local y/o móvil.</li>
              <li>Correo electrónico.</li>
              <li>Fecha y lugar de nacimiento.</li>
              <li>Estado civil.</li>
              <li>Escolaridad.</li>
              <li>Ocupación laboral.</li>
              <li>Sexo y edad.</li>
              <li>Información financiera, en los casos que proceda.</li>
              <li>
                Otro tipo de información específica, de acuerdo con las necesidades de las
                diferentes áreas y conforme a los fines de la organización.
              </li>
            </ul>
            <h3>De las personas morales</h3>
            <ul>
              <li>Nombre de la institución.</li>
              <li>Registro Federal de Contribuyentes.</li>
              <li>Nombre de los representantes.</li>
              <li>Dirección, teléfono y correo electrónico.</li>
              <li>
                Otro tipo de información específica, de acuerdo con las necesidades de las
                diferentes áreas y conforme a los fines de la organización.
              </li>
            </ul>
          </section>

          <section>
            <h2>Manejo de datos personales sensibles</h2>
            <p>
              Algunos de los datos recabados antes citados son considerados datos personales
              sensibles. El uso y tratamiento de estos por parte de la organización se realiza
              con el más estricto control, confidencialidad y secrecía necesarios para la
              proveeduría, protección y bienestar de nuestra población de interés.
            </p>
            <p>
              El manejo de los datos personales y datos personales sensibles es necesario para
              lograr las finalidades legítimas, concretas y acordes de Armonizando Vidas A.B.P.
            </p>
          </section>

          <section>
            <h2>Opciones para limitar el uso o divulgación de los datos</h2>
            <p>
              En todo momento el titular podrá limitar el uso o divulgación del tratamiento de sus
              datos personales. Para presentar su petición puede comunicarse mediante:
            </p>
            <ul>
              <li>
                <a href="mailto:info@armonizandovidas.org">info@armonizandovidas.org</a>.
              </li>
              <li>
                <a href="mailto:armonizandovidasabp@gmail.com">
                  armonizandovidasabp@gmail.com
                </a>
                .
              </li>
              <li>
                Teléfono: <a href="tel:+528129329978">81 29 32 99 78</a>.
              </li>
              <li>
                Directamente en el domicilio fiscal indicado al inicio de este aviso, para los
                efectos legales a que haya lugar.
              </li>
            </ul>
          </section>

          <section>
            <h2>Derechos de acceso, rectificación, cancelación y oposición</h2>
            <p>
              El titular tiene derecho a acceder a los datos personales que Armonizando Vidas
              A.B.P. posee y a conocer los detalles de su tratamiento; rectificarlos cuando sean
              inexactos o incompletos; cancelarlos cuando considere que no se requieren para
              alguna de las finalidades señaladas; oponerse a su tratamiento y/o revocar, en los
              casos que proceda y cuando la ley lo permita, el consentimiento otorgado.
            </p>
            <p>
              Para conocer más detalles sobre el procedimiento, requisitos y plazos, puede
              contactar a la C. Gabriela Alejandra Ríos Casso López, responsable del manejo de la
              información, en{' '}
              <a href="mailto:gabriela@armonizandovidas.org">
                gabriela@armonizandovidas.org
              </a>
              .
            </p>
          </section>

          <section>
            <h2>Revocación del consentimiento</h2>
            <p>La petición deberá acompañarse de la siguiente información:</p>
            <ul>
              <li>
                Nombre completo de la persona que desea revocar el consentimiento y documento de
                identidad que acredite su personalidad o, en su caso, la representación legal.
              </li>
              <li>
                Descripción clara y precisa de los datos personales respecto de los que se busca
                ejercer alguno de los derechos mencionados.
              </li>
              <li>
                Domicilio, correo electrónico u otro medio para comunicar la respuesta a su
                solicitud.
              </li>
              <li>Cualquier documento que facilite la localización de los datos personales.</li>
            </ul>
            <p>
              Armonizando Vidas A.B.P. tendrá un plazo de 20 días, contados a partir de la fecha en
              que se reciba la solicitud, para comunicar al titular la determinación adoptada. Si
              resulta procedente, se hará efectiva dentro de los 15 días siguientes a la fecha en
              que se comunique la respuesta.
            </p>
            <p>
              En solicitudes de acceso procederá la entrega previa acreditación de la identidad
              del solicitante o representante legal. Los plazos podrán ampliarse una sola vez por
              un periodo igual, siempre que las circunstancias del caso lo justifiquen.
            </p>
          </section>

          <section>
            <h2>Transferencia de datos</h2>
            <p>
              Para lograr el objeto y fines que persigue la organización, los datos personales
              pueden ser transferidos y tratados dentro y fuera del país. La información será
              compartida para fines estadísticos y administrativos.
            </p>
            <p>
              Si el titular no manifiesta oposición mediante el procedimiento establecido, se
              entenderá que ha otorgado su consentimiento. Armonizando Vidas A.B.P. se compromete
              a que la información transferida a terceros y prevista en las excepciones que fija
              la ley sea tratada de forma responsable, confidencial y exclusivamente por quienes
              requieran conocer dichos datos.
            </p>
          </section>

          <section>
            <h2>Cambios al aviso de privacidad</h2>
            <p>
              Atendiendo las directrices de la autoridad competente y los fines de la
              organización, Armonizando Vidas A.B.P. podrá realizar cambios o modificaciones al
              aviso de privacidad. Estas modificaciones estarán disponibles en la página web
              institucional o se enviarán al último correo electrónico proporcionado por los
              titulares.
            </p>
            <p>
              Para casos específicos se pondrá a la vista el aviso de privacidad simplificado,
              cuyo contenido actualiza la información requerida en las fracciones I y II del
              artículo 16 de la ley de la materia y remite al presente aviso completo.
            </p>
            <p>
              Cualquier modificación podrá consultarse en{' '}
              <a href="https://armonizandovidas.org/#impacto">
                https://armonizandovidas.org/#impacto
              </a>
              .
            </p>
          </section>

          <section>
            <h2>Autoridad competente</h2>
            <p>
              Si alguna persona física o moral considera que su derecho a la protección de datos
              personales ha sido lesionado por alguna conducta de los colaboradores de
              Armonizando Vidas A.B.P. o por las actuaciones de la organización, o presume que en
              el tratamiento de sus datos existe una violación a las disposiciones previstas en
              la Ley Federal de Protección de Datos Personales en Posesión de los Particulares,
              podrá interponer la queja o denuncia correspondiente ante la autoridad competente.
            </p>
          </section>

          <footer className="privacy-update">
            <strong>Última actualización:</strong> 11 de junio de 2026.
          </footer>
        </article>
      </div>
    </>
  );
}
