import ProgramDetailPage from '../components/programs/ProgramDetailPage';
import BentoGallery from '../components/programs/BentoGallery';

export default function OrquestasDelRey() {
  const galleryImages = Array.from({ length: 20 }, (_, i) => ({
    src: `/images/programs/orq-rey/orq-rey-${String(i + 1).padStart(2, '0')}.jpg`,
    alt: `Participantes de Orquestas del Rey - Foto ${i + 1}`,
  }));

  return (
    <>
      <ProgramDetailPage
        eyebrow="Enseñanza de oficios"
        title="Orquestas del Rey"
        intro="Un programa de fortalecimiento técnico y humano centrado en el oficio de músico, donde la formación artística se une con valores y habilidades para la vida."
        image={galleryImages[15].src}
        imageAlt={galleryImages[15].alt}
        seoDescription="Orquestas del Rey ofrece capacitación musical, formación en valores y desarrollo humano para niñas, niños, jóvenes y adultos."
        canonicalPath="/orquestas-del-rey"
        ogImage="/og/orquestas-del-rey.png"
        highlights={[
          'Capacitación técnica en instrumentos de viento, cuerda y percusión.',
          'Formación en valores humanos y habilidades para la vida.',
          'Entornos seguros para el aprendizaje y la convivencia.',
          'Preparación para colaboraciones y actividades profesionales.',
        ]}
        sections={[
          {
            title: 'El reto que atendemos',
            text: 'Las oportunidades limitadas de profesionalización técnica y empleabilidad en sectores vulnerables pueden perpetuar ciclos de pobreza y falta de autonomía. A esto se suma la necesidad de entornos seguros que fomenten el desarrollo humano y la prevención social.',
          },
          {
            title: 'Nuestro modelo',
            text: 'A través de centros de capacitación especializados ofrecemos instrucción profesional en la ejecución de instrumentos musicales. El programa transforma el talento en una competencia laboral concreta y acompaña a cada participante en su crecimiento personal.',
          },
          {
            title: 'Objetivo',
            text: 'Desarrollar competencias técnicas y profesionales en el oficio de músico mediante un modelo integral que promueva la autonomía económica, la salud emocional, el tejido social y el desarrollo humano.',
          },
          {
            title: 'Impacto esperado',
            text: 'Buscamos que los participantes completen sus módulos, demuestren suficiencia técnica en su instrumento, fortalezcan sus valores y puedan iniciar colaboraciones o actividades profesionales derivadas de su formación musical.',
          },
        ]}
        gallery={[]}
      />
      <div style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginTop: '60px', marginBottom: '30px' }}>Galería de Actividades</h2>
        <BentoGallery images={galleryImages} />
      </div>
    </>
  );
}
