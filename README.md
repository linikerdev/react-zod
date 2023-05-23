

# POC - ZOD com ReactJS
Poc de demostração das funcionalidades da biblioteca ZOD junto ao ReactJs


## Nota de conhecimento

Zod é uma biblioteca de declaração e validação de esquema TypeScript-first. Estou usando o termo "esquema" para me referir amplamente a qualquer tipo de dados, de um stringobjeto aninhado simples a um complexo.

O Zod foi projetado para ser o mais amigável possível ao desenvolvedor. O objetivo é eliminar declarações de tipo duplicadas. Com Zod, você declara um validador uma vez e Zod inferirá automaticamente o tipo estático de TypeScript. É fácil compor tipos mais simples em estruturas de dados complexas.

Alguns outros grandes aspectos:

- Zero dependências
- Funciona em Node.js e em todos os navegadores modernos
- Tiny: 8kb minificado + compactado
- Imutável: métodos (por exemplo .optional()) retornam uma nova instância
- Interface concisa e encadeável
- Abordagem funcional: analise, não valide
- Funciona com JavaScript simples também! Você não precisa usar TypeScript.

### REQUISITOS: 

- TypeScript 4.5+!
- Você deve habilitar stricto modo em seu arquivo tsconfig.json. Esta é uma prática recomendada para todos os projetos TypeScript.


```typescript
// tsconfig.json
{
  // ...
  "compilerOptions": {
    // ...
    "strict": true
  }
}
```

### INSTALAÇÃO

O projeto foi gerado a partir do React Ts através do Vite.

```
npm install     # npm
yarn            # yarn
```


### ATENÇÃO

Para simular o back-end o projeto está usando o json-server rodando a simulação de um backend através do arquivo db.json, para rodar localmente o json server, verifique se a posta 3004 está disponível.

```
npm run server
```