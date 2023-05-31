<body>
  <main class="container mt-5">
    <h1>Bem-vindo ao Nosso Tempo</h1>
    <p>Este é um site de clima simples que utiliza a API do OpenWeatherMap para exibir informações meteorológicas.</p>

<h2>Requisitos</h2>
<ul>
    <li>Servidor web compatível com PHP (por exemplo, Apache, Nginx)</li>
    <li>Chave de API do OpenWeatherMap (você pode obtê-la gratuitamente em <a href="https://openweathermap.org/api">OpenWeatherMap API</a>)</li>
</ul>

<h2>Configuração</h2>
<ol>
    <li>Clone este repositório para o diretório do seu servidor web:</li>
    <code>git clone https://github.com/douglas074/Nosso-clima;</code>
    <li>Navegue até o diretório do projeto:</li>
    <code>cd Nosso-clima</code>
    <li>Abra o arquivo <code>Weather.php</code> em Config e substitua o valor da váriavel <code>$apiKey</code> pela sua chave de API do OpenWeatherMap:</li>
    <pre><code>&lt;?php
  $apiKey = 'sua chave';
?&gt;</code></pre>
      <li>Inicie o servidor web e acesse o site pelo navegador.</li>
    </ol>

<h2>Funcionalidades</h2>
<p>O site possui as seguintes funcionalidades:</p>
<ul>
    <li>Exibição do clima atual da cidade que você está.</li>
    <li>Exibição das condições meteorológicas, temperatura, Nebulosidade, Visibilidade, umidade e velocidade do vento.</li>
    <li>Horario da última atualização</li>
</ul>

<h2>Estrutura do Projeto</h2>
<p>O projeto possui a seguinte estrutura de arquivos:</p>
<ul>
    <li><code>index.php</code>: Página inicial do site.</li>
    <li><code>config/</code>: Pasta que contém os arquivos do back-end.</li>
    <li><code>weather.php</code>: Função que se comunica com a API do OpenWeatherMap para obter os dados meteorológicos.</li>
    <li><code>Intermediary.php</code>: Arquivo que faz comunicação entre o <code>Script.js</code> e o arquivo <code>Weather.php</code></li>
    <li><code>assets/</code>: Diretório contendo arquivos de estilo CSS e scripts JavaScript.</li>
    <li><code>app/js/Script.js</code>: Script JavaScript que controla as interações do usuário e exibe os dados do clima.</li>
</ul>

<h2>Tecnologias Utilizadas</h2>
<p>As seguintes tecnologias foram utilizadas no desenvolvimento deste site:</p>
<ul>
    <li>PHP: Linguagem de programação do lado do servidor para obtenção dos dados da API e renderização dinâmica da página.</li>
    <li>JavaScript: Linguagem de programação do lado do cliente para interatividade e manipulação dos dados retornados pela API.</li>
    <li>Bootstrap 5.3: Framework CSS para facilitar a criação de um layout responsivo e estilização dos elementos.</li>
</ul>

<h2>Contribuição</h2>
<p>Se você quiser contribuir para este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.</p>

<h2>Licença</h2>
<p>Este projeto está licenciado sob a licença <a href="LICENSE">MIT</a>.</p>
  </main>

  <footer class="bg-dark text-light text-center py-3 mt-5">
    <div class="container">
      &copy; 2023 Nosso tempo
    </div>
  </footer>
</body>

</html>