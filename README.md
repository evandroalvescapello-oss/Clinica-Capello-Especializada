# Clínica Capello Especializada

Site institucional em **Next.js App Router + TypeScript + Tailwind**, com conteúdo vindo de **Sanity CMS** (com fallback local).

## Páginas
- Home
- Sobre
- Serviços
- Equipe
- Exames
- Agendamento
- Contato
- Blog
- LGPD
- Avaliações
- Política de Privacidade
- Política de Cookies

## Requisitos atendidos
- SEO local com Metadata e Schema.org (`MedicalClinic`)
- CTA WhatsApp flutuante
- Google Maps embed
- Estrutura de CMS para modelos: Serviço, Profissional, Unidade/Contato, Post, FAQ, Banner
- Componentes de identificação obrigatória (barra fixa com CRM/RQE/direção técnica)
- Aviso LGPD em formulário

## Rodar localmente
```bash
npm install
npm run dev
```

## Deploy
- Site: Vercel ou Cloudflare Pages
- CMS: Sanity SaaS

## Dados para preencher no CMS
- Nome oficial da clínica
- Endereço e CEP
- Telefones oficiais
- Horários
- Lista de serviços por área
- Equipe (CRM/CRO e RQE)
- Fotos institucionais
- Link de avaliação Google
- Texto institucional
