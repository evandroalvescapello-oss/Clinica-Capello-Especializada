export const professionalSchema = {
  name: 'professional',
  title: 'Profissional',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nome', type: 'string' },
    { name: 'role', title: 'Cargo/Especialidade', type: 'string' },
    { name: 'registration', title: 'CRM/CRO', type: 'string' },
    { name: 'rqe', title: 'RQE', type: 'string' },
    { name: 'bio', title: 'Bio', type: 'text' },
  ],
};
