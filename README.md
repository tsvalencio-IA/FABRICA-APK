# Compressor Offline de Evidências — APK Android + PC Windows

Este repositório foi montado para transformar o HTML enviado (`conversor-v2.html`) em:

- APK Android instalável direto;
- Instalador Windows `.exe` para PC;
- pacote Web/PWA.

## Onde está o HTML enviado?

O HTML completo enviado pelo usuário está aqui:

```txt
src/index.html
```

Esse é o arquivo principal do app. O GitHub Actions usa esse mesmo arquivo para montar o APK Android, o instalador Windows e o pacote Web.

## Estrutura

```txt
.github/workflows/build-apk-e-pc.yml
src/index.html
src/sw.js
src/manifest.webmanifest
src/icon-192.png
src/icon-512.png
scripts/prepare-www.mjs
electron/main.js
electron/preload.js
capacitor.config.json
package.json
README.md
```

## Como subir no GitHub

Crie um repositório novo, por exemplo:

```txt
compressor-videos-offline-apk-pc
```

Extraia o ZIP e suba o conteúdo de dentro da pasta `gerador-apk-pc-offline-v3` na raiz do repositório.

A raiz do GitHub precisa ficar assim:

```txt
.github/
src/
scripts/
electron/
package.json
capacitor.config.json
README.md
```

## Como gerar o APK e o instalador PC

No GitHub:

1. Vá em **Actions**.
2. Abra **Build APK Android e Instalador PC**.
3. Clique em **Run workflow**.
4. Aguarde ficar verde.
5. Baixe os artifacts:

```txt
COMPRESSOR-OFFLINE-ANDROID-APK
COMPRESSOR-OFFLINE-WINDOWS-PC
COMPRESSOR-OFFLINE-WEB-PWA
```

## Como usar no PC sem instalar

Abra direto:

```txt
src/index.html
```

## Como testar no PC como app

Baixe o artifact `COMPRESSOR-OFFLINE-WINDOWS-PC` e execute o `.exe`.

## Observação

O processamento de vídeo depende do suporte do navegador/WebView/Electron a `MediaRecorder` e `canvas.captureStream`.
