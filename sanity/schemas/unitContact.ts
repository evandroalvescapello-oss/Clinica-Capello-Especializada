export const unitContactSchema = {
  name: 'unitContact',
  title: 'Unidade/Contato',
  type: 'document',
  fields: [
    { name: 'clinicName', title: 'Nome da clínica', type: 'string' },
    { name: 'address', title: 'Endereço', type: 'string' },
    { name: 'zipcode', title: 'CEP', type: 'string' },
    { name: 'phone', title: 'Telefone', type: 'string' },
    { name: 'whatsapp', title: 'WhatsApp', type: 'string' },
    { name: 'openingHours', title: 'Horários', type: 'string' },
    { name: 'googleMapsEmbedUrl', title: 'URL embed Google Maps', type: 'url' },
    { name: 'technicalDirection', title: 'Direção técnica', type: 'string' },
  ],
};
