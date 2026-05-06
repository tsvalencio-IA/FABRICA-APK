# Compressor Offline de Evidências — APK Android + PC

Projeto novo para transformar o HTML de compressão de vídeos em um app offline.

## O que ele faz

- Funciona offline depois de aberto/instalado.
- Gera APK Android via GitHub Actions.
- Também roda no PC como página web local/estática.
- Comprime vídeos para até 10 MB.
- Divide vídeos grandes em partes numeradas.
- Nomeia arquivos por placa, serviço e nome específico do vídeo.
- Salva histórico em banco local do aparelho usando IndexedDB.
- No Android/APK, tenta salvar/compartilhar com Capacitor Filesystem + Share.
- Sem servidor, sem Firebase, sem Cloudinary, sem internet para processar vídeos.

## Estrutura

```txt
.github/workflows/build-apk.yml
src/index.html
src/sw.js
src/manifest.webmanifest
src/icon-192.png
src/icon-512.png
scripts/prepare-www.mjs
capacitor.config.json
package.json
www/
```

## Como subir no GitHub

1. Crie um repositório novo.
2. Extraia este ZIP.
3. Suba o conteúdo da pasta para o repositório.
4. Vá em **Actions**.
5. Rode **Build APK Android Offline**.
6. Baixe o artifact **COMPRESSOR-OFFLINE-APK**.
7. Extraia e instale o `app-debug.apk`.

## Como usar no PC

Opção simples:

- Abra `src/index.html` no Chrome/Edge.

Opção PWA/local melhor:

```bash
npm install
npm run prepare:www
npx serve www
```

## Banco local

O app usa IndexedDB.

Ele guarda:

- placa;
- serviço;
- observação;
- data;
- vídeos comprimidos gerados;
- blobs dos arquivos para baixar novamente.

Atenção: arquivos de vídeo ocupam espaço. O Android pode apagar dados do app se o usuário limpar armazenamento.

## Observação técnica

A compressão usa APIs nativas do navegador/WebView: `MediaRecorder`, `canvas.captureStream`, `IndexedDB`, `Blob` e `FileReader`. Alguns aparelhos podem gerar WebM em vez de MP4 se a WebView não suportar MP4/H.264.
