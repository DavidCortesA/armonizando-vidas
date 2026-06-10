import ProgramDetailPage from '../components/programs/ProgramDetailPage';
import BentoGalleryMujeresDeValor from '../components/programs/BentoGalleryMujeresDeValor';

export default function MujeresDeValor() {
  const galleryImages = Array.from({ length: 30 }, (_, i) => ({
    src: `/images/programs/muj-val/muj-val-${String(i + 1).padStart(2, '0')}.jpg`,
    alt: `Participantes de Mujeres de Valor - Foto ${i + 1}`,
  }));

  return (
    <>
      <ProgramDetailPage
        eyebrow="Acompañamiento integral"
        title="Mujeres de Valor"
        intro="Un espacio de apoyo y convivencia para mujeres, donde compartimos alimento, ayuda para sus hogares y pláticas que fortalecen sus valores y bienestar."
        image={galleryImages[5].src}
        imageAlt={galleryImages[5].alt}
        seoDescription="Mujeres de Valor brinda desayuno, despensas y pláticas de valores para acompañar y fortalecer a mujeres y sus familias."
        canonicalPath="/mujeres-de-valor"
        ogImage="/og/mujeres-de-valor.png"
        highlights={[
          'Desayuno y convivencia en un entorno cercano y respetuoso.',
          'Entrega de despensas para apoyar la alimentación familiar.',
          'Pláticas de valores y desarrollo personal.',
          'Acompañamiento comunitario para fortalecer a cada mujer y su familia.',
        ]}
        sections={[
          {
            title: 'Un espacio para ellas',
            text: 'Mujeres de Valor crea encuentros donde las participantes pueden convivir, sentirse escuchadas y construir vínculos con otras mujeres de su comunidad.',
          },
          {
            title: 'Desayuno y convivencia',
            text: 'Cada jornada incluye un desayuno que permite compartir la mesa en un ambiente digno, cálido y seguro, fortaleciendo la integración y el sentido de pertenencia.',
          },
          {
            title: 'Apoyo alimentario',
            text: 'Entregamos despensas para contribuir a la alimentación de las participantes y sus familias, atendiendo una necesidad básica con respeto y cercanía.',
          },
          {
            title: 'Pláticas de valores',
            text: 'Compartimos temas de valores, autoestima, familia y crecimiento personal para brindar herramientas que fortalezcan su vida cotidiana y su entorno familiar.',
          },
        ]}
        gallery={[]}
      />
      <div style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginTop: '60px', marginBottom: '30px' }}>Galería de Actividades</h2>
        <BentoGalleryMujeresDeValor images={galleryImages} />
      </div>
    </>
  );
}
