<!DOCTYPE html>
<html>
  <head>
    <title>Meu Site</title>
    <link rel="stylesheet" type="text/css" href="edit.css">
</head>
  <body>
    <?php include 'menu.php'; ?>
    <h1>Bem-vindo à minha página</h1>
    <p> Hoje é: <?php echo date('l, F jS, Y'); ?> </p>
    <!-- resto do conteúdo da página -->
    <header>
      <nav>
        <ul>
          <li><a href="home.php">Home</a></li>
          <li><a href="info.php">Informações</a></li>
          <li><a href="contact.php">Contato</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section id="home">
        <h1>Bem-vindo ao meu site!</h1>
        <p>Conteúdo da página inicial aqui</p>
      </section>
      <section id="info">
        <h1>Informações</h1>
        <p>Conteúdo das informações aqui</p>
      </section>
      <section id="contact">
        <h1>Contato</h1>
        <p>Conteúdo da página de contato aqui</p>
      </section>
    </main>
    <footer>
      <p>Copyright ©2021 Meu Site</p>
    </footer>
  </body>
</html>
