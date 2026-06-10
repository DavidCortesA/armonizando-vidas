import ProgramDetailPage from '../components/programs/ProgramDetailPage';

export default function BancoDeAlimentos() {
  return (
    <ProgramDetailPage
      eyebrow="Asistencia social"
      title="Banco de Alimentos"
      intro="Atendemos necesidades básicas de personas y familias vulnerables mediante ayuda alimentaria, entrega de despensas y acciones de cercanía comunitaria."
      image="/images/programs/banco-alimentos-portada.jpg"
      imageAlt="Personas voluntarias organizando la entrega de alimentos a la comunidad"
      seoDescription="El Banco de Alimentos de Armonizando Vidas brinda despensas, víveres y acompañamiento a familias y grupos vulnerables de Nuevo León."
      canonicalPath="/banco-de-alimentos"
      ogImage="/og/banco-de-alimentos.png"
      highlights={[
        'Entrega de despensas y víveres a familias en necesidad.',
        'Apoyo a comunidades, asilos, hospitales y personas en calle.',
        'Espacios de convivencia y acompañamiento social.',
        'Atención con dignidad, cercanía y un mensaje de esperanza.',
      ]}
      sections={[
        {
          title: 'Cómo nació',
          text: 'El contacto con niñas, niños y sus familias permitió detectar necesidades físicas, emocionales y sociales que no podían atenderse únicamente durante actividades temporales. De ahí surgió un esfuerzo permanente para acompañar a la comunidad semana tras semana.',
        },
        {
          title: 'Qué hacemos',
          text: 'Distribuimos despensas y víveres en zonas de necesidad, acercando alimento a familias, personas adultas mayores y otros grupos vulnerables. Cada entrega busca resolver una necesidad inmediata sin perder el trato humano y respetuoso.',
        },
        {
          title: 'A quién apoyamos',
          text: 'Nuestro trabajo se dirige a niñas, niños, adolescentes, jóvenes, personas adultas de escasos recursos y grupos vulnerables por edad, sexo, discapacidad o situación de emergencia.',
        },
        {
          title: 'Más que alimento',
          text: 'La ayuda alimentaria forma parte de un acompañamiento integral que incluye orientación social, enseñanza de valores, actividades de integración y vinculación con otras asociaciones para ampliar el apoyo disponible.',
        },
      ]}
    />
  );
}
