
# Instruções de Instalação

Siga os passos abaixo para instalar e configurar o projeto na sua máquina local:

1. Clone o repositório  
   Faça o download do código do repositório GitHub para sua máquina local utilizando o comando abaixo:

   ```bash
   git clone https://github.com/LucasDias777/Teste-De-Software.git

2. Acesse o diretório do projeto:  

   ```bash
   cd seu-repositorio
   ```

3. Instale as dependências:  
   Execute o comando abaixo para instalar todas as dependências do projeto listadas no arquivo `package.json`:

   ```bash
   npm install
   ```

# Execução dos Testes

Após instalar todas as dependências, você pode rodar os testes unitários e verificar a cobertura de código. Siga as instruções abaixo:

1. Rodar os testes unitários  
   Execute o comando a seguir para rodar todos os testes unitários com o Jest:

   ```bash
   npm test
   ```

2. Gerar relatório de cobertura de código  
   Para gerar um relatório de cobertura de código, utilize o seguinte comando:

   ```bash
   npm run test:coverage
   ```

3. Abrir o relatório de cobertura de código  
   Use o comando abaixo para abrir o relatório no navegador:

   ```bash
   open coverage/lcov-report/index.html
   ```

   Caso esteja utilizando Windows, use:

   ```bash
   start coverage/lcov-report/index.html
   ```
