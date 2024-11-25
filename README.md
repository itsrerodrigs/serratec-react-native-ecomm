# 📱 Gerenciamento de E-commerce - QG Geek 🛒
<img src="https://github.com/LucasBerlim/PojetoReactNative-G1/blob/main/assets/logo.png?raw=true" alt="projeto finalizado" width="300" />
Este é o projeto de **Gerenciamento de E-commerce**, desenvolvido como parte do curso de **Desenvolvimento FullStack** no **Serratec**. O trabalho foi proposto pelo professor **João Felipe** e entregue no dia **25/11/2024**. Criamos um **aplicativo completo em React Native** focado na visão do funcionário, com funcionalidades de gestão de produtos, vendas e usuários. 🚀

---

## 📸 **Capturas de Tela**
> Imagens do Login e lista de produtos.

### Exemplo:
<img src="https://github.com/LucasBerlim/PojetoReactNative-G1/blob/desenvolvimento/assets/Login.jpg?raw=true" alt="projeto finalizado" width="300"/>

*Página inicial do aplicativo com validação de login.*

<img src="https://github.com/LucasBerlim/PojetoReactNative-G1/blob/desenvolvimento/assets/ProdutosAT.jpg?raw=true" alt="projeto finalizado" width="300"/>

*Exibição da lista de produtos com filtros aplicados.*

---

## 🎯 **Premissas do Projeto**
1. **Versionamento:** Todo o código organizado e versionado no GitHub.
2. **Organização do Código:** Arquitetura bem estruturada e componentes reutilizáveis.
3. **Layout Agradável:** Interface simples, responsiva e fácil de usar.
4. **Visão do Funcionário:** Funcionalidades desenhadas para gerenciar o e-commerce.

---

## 🔍 **O que foi feito**
### Funcionalidades principais:
- **Página de Login**: 🔒
   - Apenas usuários com login e senha válidos podem acessar o app.
- **Navegação**:
   - Implementamos pelo menos **2 tipos de navegação**: **Stack Navigation** e **Bottom Tab Navigation**.
- **Página de Produtos**:
   - **FlatList** exibe os produtos cadastrados.
   - **Filtros** por nome e valor.
- **Página de Detalhes do Produto**:
   - Permite **adicionar, remover ou editar produtos do estoque**.
- **Gerenciamento de Produtos (CRUD)**:
   - **Axios** para integração com API.
   - Validação de inputs e feedback visual de erros.
- **Página de Venda de Produto**:
   - Exibe os produtos disponíveis em uma lista para venda.
   - Permite cadastrar, excluir e editar preços.
- **Página dos Integrantes do Grupo**:
   - Exibição em **FlatList** com detalhes dos integrantes.

---

## 🛠️ **Componentes Reutilizáveis**
1. **CardProduto**: Mostra as informações de cada produto.
2. **FlatlistProdutos**: Lista dinâmica para exibição de produtos.
3. **CardIntegrante**: Exibe as informações de cada integrante do grupo.
4. **FlatlistIntegrantes**: Lista dinâmica com detalhes dos integrantes.
5. **Filtro**: Filtros aplicados na lista de produtos.

---

## 🌟 **Extras Implementados**
- **Rotas autenticadas** com **useContext** para controle de login.
- **Mock API** para simular backend.
- **Requisições Assíncronas** utilizando **Promise**, **Async** e **Await**.
- **Mensagens de erro e feedback visual** nas interações do usuário.
- **Loading** em todas as operações assíncronas.
- **Confirmação de operações bem-sucedidas**, como criação, edição e exclusão de produtos.

---

## 🎁 **Bônus Realizados**
O professor sugeriu 4 desafios bônus, dos quais **realizamos 2**:
1. **Monitoramento de Conexão à Internet**:
   - O app detecta a ausência de conexão com a internet e exibe uma mensagem informativa.
2. **Splash Screen**:
   - Animação de entrada na inicialização do aplicativo, tornando a experiência mais profissional e envolvente.

---

## 📂 **Páginas do Aplicativo**
1. **Login:**
   - Valida o acesso do usuário.
2. **Produtos:**
   - Lista produtos com filtros e exibição detalhada.
3. **Detalhes do Produto:**
   - Permite gerenciar o estoque.
4. **Venda de Produtos:**
   - Funcionalidade de vendas com gerenciamento do preço.
5. **Integrantes do Grupo:**
   - Lista de integrantes do projeto.

---

## 🎨 **Layout**
Criamos um layout **simples e moderno**, garantindo **usabilidade** e **navegação intuitiva**. O design foi otimizado para telas de dispositivos móveis, com atenção aos detalhes visuais.

---

## 👥 **Integrantes do Projeto**
- **Renata Rodrigues**[LinkedIn](https://www.linkedin.com/in/rerodrigs/)
- **Lucas Berlim**[LinkedIn](https://www.linkedin.com/in/lucas-berlim-705136265/)
- **Michele Moreira**[LinkedIn](https://www.linkedin.com/in/michelemoreira-s/)
- **Rafael Guberman**[LinkedIn](https://www.linkedin.com/in/rafael-guberman-2486a1ba/)
- **Eduarda Pinho**[LinkedIn](https://www.linkedin.com/in/eduarda-pinho-064b44330/)
- **Rômulo Lourenço**[LinkedIn]()
- **Renan Ferreira**[LinkedIn](https://www.linkedin.com/in/renan-ferreira-5714412a6/)

---

## 🚀 **Como Executar o Projeto**
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/LucasBerlim/PojetoReactNative-G1.git
2. **Navegue até o diretório do projeto:**

   ```bash
   cd PojetoReactNative-G1

3. **Instale as dependências:**
   ```bash
   npm install
   npm install axios
   npm install @react-navigation/bottom-tabs
   npx expo install expo-splash-screen
   npx expo install @react-native-async-storage/async-storage
   npm install react-hook-form
   npx expo install expo-image-picker
   npm install @react-navigation/drawer

4. **Inicie o aplicativo:**

   ```bash
   npx expo start

5. **Visualize o aplicativo:**

  - Use o aplicativo **Expo Go** no seu dispositivo móvel para escanear o código QR gerado e visualizar o aplicativo.
  - Se estiver utilizando um simulador ou emulador, escolha a opção apropriada no terminal (iOS ou Android).






