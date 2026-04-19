const fs = require('fs');
const path = require('path');
const https = require('https');

// Função para fazer requisição HTTPS
function httpsRequest(options, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({ statusCode: res.statusCode, data: JSON.parse(data), headers: res.headers });
        } catch (e) {
          resolve({ statusCode: res.statusCode, data: data, headers: res.headers });
        }
      });
    });
    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

// Função para upload de arquivos
async function uploadFiles(token, teamId) {
  const files = [];
  
  // Ler index.html
  const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
  files.push({
    file: 'index.html',
    data: html
  });
  
  console.log('📁 Arquivo preparado: index.html');
  
  return files;
}

// Criar deployment
async function deploy() {
  const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
  const TEAM_ID = 'team_0V3CpCYi4GdwUyfK4tag8kDX';
  
  if (!VERCEL_TOKEN) {
    console.error('❌ VERCEL_TOKEN não encontrado nas variáveis de ambiente');
    process.exit(1);
  }
  
  console.log('🚀 Iniciando deploy para Vercel...\n');
  
  try {
    // Preparar arquivos
    const files = await uploadFiles(VERCEL_TOKEN, TEAM_ID);
    
    // Criar deployment
    const deploymentBody = {
      name: 'gabriely-eleoterio',
      files: files,
      projectSettings: {
        framework: null
      },
      target: 'production',
      public: false
    };
    
    const options = {
      hostname: 'api.vercel.com',
      path: `/v13/deployments?teamId=${TEAM_ID}`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${VERCEL_TOKEN}`,
        'Content-Type': 'application/json'
      }
    };
    
    console.log('📤 Fazendo deploy...');
    const response = await httpsRequest(options, deploymentBody);
    
    if (response.statusCode === 200 || response.statusCode === 201) {
      console.log('\n✅ Deploy realizado com sucesso!');
      console.log('🌐 URL:', response.data.url);
      console.log('📊 Deployment ID:', response.data.id);
      
      // Salvar informações do deployment
      fs.writeFileSync('deployment-info.json', JSON.stringify(response.data, null, 2));
      console.log('\n💾 Informações salvas em deployment-info.json');
      
      return response.data;
    } else {
      console.error('❌ Erro no deploy:', response.data);
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Erro:', error.message);
    process.exit(1);
  }
}

deploy();
