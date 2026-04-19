# 🚀 Guia de Deploy - Gabriely Eleotério

## Opção 1: Deploy via Vercel CLI (Recomendado)

### Passo 1: Navegue até o diretório
```bash
cd /home/claude/gabriely-site
```

### Passo 2: Faça login no Vercel
```bash
vercel login
```

### Passo 3: Execute o deploy
```bash
vercel --prod
```

### Passo 4: Configure o domínio customizado
Após o deploy, adicione o domínio no painel Vercel:
1. Acesse: https://vercel.com/blend1/gabriely-eleoterio
2. Vá em "Settings" > "Domains"
3. Adicione: `gabriely.blendagency.com.br`

---

## Opção 2: Deploy Manual via Interface Web

### Passo 1: Baixe o arquivo
O arquivo está em: `/home/claude/gabriely-site/index.html`

### Passo 2: Crie novo projeto no Vercel
1. Acesse: https://vercel.com/new
2. Selecione o time "BLEND"
3. Arraste o arquivo `index.html` ou crie um novo projeto

### Passo 3: Configure o projeto
- Nome do projeto: `gabriely-eleoterio`
- Build Command: (deixe vazio)
- Output Directory: `./`

### Passo 4: Adicione o domínio
1. Após o deploy, vá em Settings > Domains
2. Adicione: `gabriely.blendagency.com.br`

---

## Opção 3: Deploy via Git (Melhor prática)

### Passo 1: Inicialize repositório Git
```bash
cd /home/claude/gabriely-site
git init
git add .
git commit -m "Initial commit: Gabriely Eleotério website"
```

### Passo 2: Crie repositório no GitHub
1. Acesse: https://github.com/new
2. Nome: `gabriely-eleoterio`
3. Copie o comando de push

### Passo 3: Conecte ao Vercel
```bash
git remote add origin [URL_DO_SEU_REPO]
git branch -M main
git push -u origin main
```

### Passo 4: Importe no Vercel
1. Acesse: https://vercel.com/new
2. Selecione "Import Git Repository"
3. Escolha o repositório `gabriely-eleoterio`
4. Deploy!

---

## 📋 Configuração DNS

Após o deploy, você precisará configurar o DNS do domínio `blendagency.com.br`:

### Adicione um registro CNAME:
```
Nome: gabriely
Tipo: CNAME
Valor: cname.vercel-dns.com
```

**OU** se preferir registro A:
```
Nome: gabriely
Tipo: A
Valor: 76.76.21.21
```

---

## ✅ Checklist Final

- [ ] Deploy realizado com sucesso
- [ ] Domínio `gabriely.blendagency.com.br` adicionado no Vercel
- [ ] DNS configurado (CNAME ou A record)
- [ ] SSL automático ativado (Vercel faz isso automaticamente)
- [ ] Site acessível via HTTPS

---

## 🔗 Links Úteis

- Painel Vercel: https://vercel.com/blend1
- Documentação: https://vercel.com/docs
- Suporte: https://vercel.com/support

---

## 📞 Precisa de Ajuda?

Se encontrar qualquer problema, me avise que eu te ajudo a resolver!
