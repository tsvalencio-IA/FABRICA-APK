# Compressor Offline thIAguinho — Android + Windows PC

Este repositório gera:

- APK Android offline via Capacitor
- Instalador Windows `.exe` via Electron
- Pacote Web/PWA

## Onde está o HTML enviado

O HTML principal fica em:

```txt
src/index.html
```

Esse é o arquivo usado pelo Android, PC Windows e Web/PWA.

## Como subir no GitHub

Suba o conteúdo da pasta `gerador-apk-pc-offline-v4` na raiz do repositório. A raiz deve ficar assim:

```txt
.github/
src/
scripts/
electron/
package.json
capacitor.config.json
README.md
```

## Como gerar

No GitHub:

1. Abra **Actions**.
2. Execute **Build APK Android e Instalador PC**.
3. Baixe os artifacts:
   - `COMPRESSOR-OFFLINE-ANDROID-APK`
   - `COMPRESSOR-OFFLINE-WINDOWS-PC`
   - `COMPRESSOR-OFFLINE-WEB-PWA`

## Correção V4

O build do Windows foi corrigido para não tentar publicar release no GitHub.

O erro era:

```txt
GitHub Personal Access Token is not set, neither programmatically, nor using env "GH_TOKEN"
```

A correção foi adicionar `--publish never` ao comando do Electron Builder e `publish: null` no `package.json`.
