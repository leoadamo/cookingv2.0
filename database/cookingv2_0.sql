-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 28-Nov-2019 às 13:47
-- Versão do servidor: 10.4.6-MariaDB
-- versão do PHP: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `cookingv2.0`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `contato`
--

CREATE TABLE `contato` (
  `id_contato` int(5) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `e_mail` varchar(100) NOT NULL,
  `assunto` varchar(50) NOT NULL,
  `mensagem` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `contato`
--

INSERT INTO `contato` (`id_contato`, `nome`, `e_mail`, `assunto`, `mensagem`) VALUES
(1, 'ssssss', 'nathalia@lkdjfskd', 'aaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa'),
(4, 'nathalia', 'nathalia.gm1@gmail.com', 'askdajs', 'asdlkjaskldjaskldjaskldjaskldjasd'),
(5, 'nathalia', 'nathalia.gm1@gmail.com', 'alskdjas', 'alskdjalskdjalksdjalksdja'),
(6, 'nathalia', 'nathalia.gm1@gmail.com', 'teste', 'testeeeeeeeeeeeeeeeeeeeeeeeeee'),
(7, 'nathalia', 'nathalia.gm1@gmail.com', 'teste', 'testeeeeeeeeeeeeeeeeeeeeeeeeee'),
(8, 'nathalia', 'nathalia.gm1@gmail.com', 'n aguento mais', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'),
(9, 'nathalia', 'nathalia.gm1@gmail.com', 'aaaaaaaaaaaaaaaa', 'jesuscristo socorro n da'),
(10, 'nathalia', 'nathalia.gm1@gmail.com', 'eu n aguento mais', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'),
(11, 'nathalia', 'nathalia.gm1@gmail.com', 'teste', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'),
(12, 'joj', 'joezersmaniotto5@gmail.com', 'dfgcxvbcv', 'zxcvbnxcv   dfghjfghjkcvbnmghj'),
(13, 'nathalia', 'nathygmonte@hotmail.com', 'teste', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'),
(14, 'Nathalia Garcia', 'nathalia.gm1@gmail.com', 'teste', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'),
(15, 'Cleberson', 'contato@csaller.com', 'Batata doce', 'Batata doce Ã© saudavel?');

-- --------------------------------------------------------

--
-- Estrutura da tabela `posts`
--

CREATE TABLE `posts` (
  `id_post` int(5) NOT NULL,
  `titulo` varchar(30) NOT NULL,
  `categoria` varchar(20) NOT NULL,
  `imagem` varchar(100) NOT NULL,
  `texto` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `posts`
--

INSERT INTO `posts` (`id_post`, `titulo`, `categoria`, `imagem`, `texto`) VALUES
(2, 'Bolo de cenoura vulcão', 'Bolos', './images/bolo_cenoura.jpg', 'Coloque no liquidificador os ovos, o óleo, o açúcar, a pitada de sal e as cenouras cortadas. Bata até ficar homogêneo\r\nEm um recipiente coloque a farinha e junte a mistura batida do liquidificador, mexa até ficar homogênea.\r\nAcrescente o fermento e mexa pouco só para encorporar a massa.\r\nDepois, unte uma forma com buraco no meio com margarina e farinha e despeje a massa.\r\nColoque para assar em forno preaquecido 180° C.\r\nTempo de forno varia entre 40 a 50 minutos, vai depender muito de forno para forno.'),
(4, 'Bombom de travessa', 'Sobremesas', './images/bombom_travessa.jpg', 'Coloque as latas de leite condensado em uma panela com a manteiga e faça uma massa como um brigadeiro mole.\r\nColoque em uma travessa e, por cima deste brigadeiro mole, coloque os morangos cortados ao meio.\r\nReserve para fazer a cobertura.\r\nPara fazer a cobertura, rale o chocolate ao leite e o meio amargo e misture ao creme de leite.\r\nMisture e coloque no micro-ondas durante 1 minuto.\r\nRetire e mexa\r\nColoque de novo no micro-ondas por mais 1 minuto.\r\nDespeje a cobertura por cima dos morangos e leve à geladeira coberta por papel-filme.'),
(5, 'Fish and Chips', 'Carnes', './images/fish_and_chips.jpg', 'Tempere as postas de peixe com limão, sal e pimenta do reino. Reserve.\r\nMisture a farinha com o fermento, sal e pimenta branca a gosto. Aos poucos, vá adicionando a cerveja e misturando até virar uma pasta mole (se ficar grossa complete com um pouco de água ou mais cerveja).\r\nEmpane os peixes nessa massa e frite até dourar.\r\nAntes disso faça as batatas.\r\nFrite as batatas na gordura até amolecer. Escorra e congele. Quando for fritar para servir, acrescente 1 colher de maisena no óleo já quente.\r\nFrite e sirva com o peixe.\r\nEssa receita também pode ser servida com purê de ervilha:\r\nPegue ervilhas frescas e refogue na manteiga, alho e sal. Acrescente 200ml de água e deixe até a água evaporar. Bata no liquidificador ou processador.'),
(6, 'Bolo de legumes', 'Vegetarianos', './image/bolo_legumes.jpg', 'Em um recipiente, misture os tomates (se quiser, tempere com sal e orégano), cebola, cenoura, milho, ervilha, salsa e cebolinha, queijo ralado, o sal , as gemas levemente batidas e o óleo\r\nMexa bem até se misturarem completamente\r\nColoque a farinha de trigo aos poucos, e continue mexendo\r\nAcrescente o fermento\r\nBata as claras em neve firme e junte nesta mistura\r\nUnte e polvilhe uma forma redonda com furo central de 30 cm de diâmetro\r\nLeve ao forno para assar por 40 minutos a uma temperatura de 180º.');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nome` varchar(60) NOT NULL,
  `e_mail` varchar(50) NOT NULL,
  `senha` varchar(40) NOT NULL,
  `dt_nasc` date NOT NULL,
  `telefone` varchar(11) NOT NULL,
  `img` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nome`, `e_mail`, `senha`, `dt_nasc`, `telefone`, `img`) VALUES
(4, 'Nathalia', 'nathalia.gm1@gmail.com', 'MTIzNDU2', '1999-04-15', '53984397147', ''),
(5, 'Teste', 'teste@teste.com', 'MTUxNTU=', '2015-10-21', '53985412563', ''),
(6, 'Admin', 'admin@teste.com', 'YWRtaW4=', '2019-11-20', '5321231144', '');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `contato`
--
ALTER TABLE `contato`
  ADD PRIMARY KEY (`id_contato`);

--
-- Índices para tabela `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id_post`);

--
-- Índices para tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `contato`
--
ALTER TABLE `contato`
  MODIFY `id_contato` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `posts`
--
ALTER TABLE `posts`
  MODIFY `id_post` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
