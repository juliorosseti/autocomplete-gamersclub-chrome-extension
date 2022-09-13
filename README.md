<p align="center">
  <img src="https://github.com/juliorosseti/autocomplete-gamersclub-chrome-extension/blob/main/src/assets/readme.gif?raw=true" alt="App">
</p>

---

# Download
<a href="https://chrome.google.com/webstore/detail/autocomplete-gamersclub/edpfinlgekbdldipilgffdbphplppnac" target="_blank">
  <img src="https://img.shields.io/badge/Google_chrome-4285F4?style=for-the-badge&logo=Google-chrome&logoColor=white">
</a>
<a href="https://chrome.google.com/webstore/detail/autocomplete-gamersclub/edpfinlgekbdldipilgffdbphplppnac" target="_blank">
  <img src="https://img.shields.io/badge/Brave-FF1B2D?style=for-the-badge&logo=Brave&logoColor=white">
</a>

### Sobre

O objetivo principal é disponibilizar para os jogadores ativos da GamersClub uma maneira mais ágil de aceitar as partidas que necessitam de um "complete".

Você pode escolher seus mapas preferidos para jogar/completar uma partida.

Caso ache necessário corrigir algum bug, adicionar testes ou implementar novas features, fique a vontade!

### Como utilizar

1) A extensão deve ser instalada no navegador;
2) É necessário estar com a página de **lobby** aberta (logado na plataforma): [`https://gamersclub.com.br/lobby`](https://gamersclub.com.br/lobby);
3) Após seguir as etapas anteriores, a extensão abrirá normalmente. Dessa maneira será possível ativar a busca automática. 

### Configuração

A aplicação utiliza o [`Yarn`](https://yarnpkg.com/) para gerenciamento de suas dependências.

Você pode instalar o Yarn através do comando abaixo:

```bash
npm i -g yarn
```

> Necessário Node >= 16

Realize a instalação das dependências da aplicação.

Utilize o comando abaixo para realizar a instalação das dependências:

```bash
yarn install
```

Subir um servidor localhost ([http://localhost:8080](http://localhost:8080)):

```bash
yarn serve
```

Build para produção:

```bash
yarn build
```
