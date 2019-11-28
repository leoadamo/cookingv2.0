-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 28, 2019 at 08:41 PM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `cookingv2.0`
--

-- --------------------------------------------------------

--
-- Table structure for table `contato`
--

CREATE TABLE `contato` (
  `id_contato` int(5) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `e_mail` varchar(100) NOT NULL,
  `assunto` varchar(50) NOT NULL,
  `mensagem` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contato`
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
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id_post` int(5) NOT NULL,
  `autor` varchar(50) DEFAULT NULL,
  `foto_perfil` varchar(100) NOT NULL,
  `titulo` varchar(30) NOT NULL,
  `categoria` varchar(20) NOT NULL,
  `imagem` varchar(100) NOT NULL,
  `texto` varchar(1000) NOT NULL,
  `data_post` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id_post`, `autor`, `foto_perfil`, `titulo`, `categoria`, `imagem`, `texto`, `data_post`) VALUES
(2, 'Leo Spencer', '/assets/images/leo-spencer.jpg', 'Bolo de cenoura vulcão', 'Bolos', 'assets/images/bolo_cenoura.jpeg', '<b>1.</b> Coloque no liquidificador os ovos, o óleo, o açúcar, a pitada de sal e as\r\ncenouras cortadas.<br/><br/> \r\n<b>2.</b> Bata até ficar homogêneo<br/><br/>\r\n\r\n<b>3.</b> Em um recipiente coloque a farinha e junte a mistura batida do liquidificador, mexa até ficar homogênea.<br/><br/>\r\n\r\n<b>4.</b> Acrescente o fermento e mexa pouco só para incorporar a massa.<br/><br/>\r\n\r\n<b>5.</b> Depois, unte uma forma com buraco no meio com margarina e farinha e despeje a massa.<br/><br/>\r\n\r\n<b>6.</b> Coloque para assar em forno preaquecido 180° C.<br/><br/>\r\n\r\n<b>Atenção:</b> Tempo de forno varia entre 40 a 50 minutos, vai depender muito de forno para forno.<br/><br/>', '2018-07-12'),
(4, 'Ana Maria', '/assets/images/ana-maria.jpg', 'Bombom de travessa', 'Sobremesas', 'assets/images/bombom_travessa.jpeg', '<b>1.</b> Coloque as latas de leite condensado em uma panela com a manteiga e faça uma massa como um brigadeiro mole.<br/><br/>\r\n<b>2.</b> Coloque em uma travessa e, por cima deste brigadeiro mole, coloque os morangos cortados ao meio.<br/><br/>\r\n<b>3.</b> Reserve para fazer a cobertura.\r\nPara fazer a cobertura, rale o chocolate ao leite e o meio amargo e misture ao creme de leite.<br/><br/>\r\n<b>4.</b> Misture e coloque no micro-ondas durante 1 minuto.<br/><br/>\r\n<b>5.</b> Retire e mexa.<br/><br/>\r\n<b>6.</b> Coloque de novo no micro-ondas por mais 1 minuto.<br/><br/>\r\n<b>7.</b> Despeje a cobertura por cima dos morangos e leve à geladeira coberta por papel-filme.<br/><br/>', '2019-11-28'),
(5, 'Nathalia Garcia', '/assets/images/nathalia-garcia.jpeg', 'Fish and Chips', 'Carnes', 'assets/images/fish_and_chips.jpeg', '<b>1.</b> Tempere as postas de peixe com limão, sal e pimenta do reino. Reserve.<br/><br/>\r\n<b>2.</b> Misture a farinha com o fermento, sal e pimenta branca a gosto. Aos poucos, vá adicionando a cerveja e misturando até virar uma pasta mole (se ficar grossa complete com um pouco de água ou mais cerveja).<br/><br/>\r\n<b>3.</b> Empane os peixes nessa massa e frite até dourar. Antes disso faça as batatas.<br/><br/>\r\n<b>4.</b> Frite as batatas na gordura até amolecer. Escorra e congele. Quando for fritar para servir, acrescente 1 colher de maisena no óleo já quente.<br/><br/>\r\n<b>5.</b> Frite e sirva com o peixe.<br/><br/>\r\n\r\n<b>Dica:</b> Essa receita também pode ser servida com purê de ervilha:<br/>\r\nPegue ervilhas frescas e refogue na manteiga, alho e sal. Acrescente 200ml de água e deixe até a água evaporar. Bata no liquidificador ou processador.', '2016-01-02'),
(6, 'Tia Anastácia', '/assets/images/tia-anastacia.jpeg', 'Bolo de legumes', 'Vegetarianos', 'assets/images/bolo_legumes.jpeg', '<b>1.</b> Em um recipiente, misture os tomates (se quiser, tempere com sal e orégano), cebola, cenoura, milho, ervilha, salsa e cebolinha, queijo ralado, o sal , as gemas levemente batidas e o óleo.<br/><br/>\r\n<b>2.</b> Mexa bem até se misturarem completamente.<br/><br/>\r\n<b>3.</b> Coloque a farinha de trigo aos poucos, e continue mexendo.<br/><br/>\r\n<b>4.</b> Acrescente o fermento.<br/><br/>\r\n<b>5.</b> Bata as claras em neve firme e junte nesta mistura.<br/><br/>\r\n<b>6.</b> Unte e polvilhe uma forma redonda com furo central de 30 cm de diâmetro.<br/><br/>\r\n<b>7.</b> Leve ao forno para assar por 40 minutos a uma temperatura de 180º.', '2019-06-14');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nome` varchar(60) NOT NULL,
  `e_mail` varchar(50) NOT NULL,
  `senha` varchar(40) NOT NULL,
  `dt_nasc` date NOT NULL,
  `telefone` varchar(11) NOT NULL,
  `foto` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nome`, `e_mail`, `senha`, `dt_nasc`, `telefone`, `foto`) VALUES
(4, 'Nathalia', 'nathalia.gm1@gmail.com', 'MTIzNDU2', '1999-04-15', '53984397147', ''),
(13, 'Leonardo Adamoli', 'leo.adamoli@gmail.com', 'MTIzNDU=', '1992-11-28', '53981336558', '7dd0fe4b5835fe434640feacc7de3d07.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contato`
--
ALTER TABLE `contato`
  ADD PRIMARY KEY (`id_contato`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id_post`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contato`
--
ALTER TABLE `contato`
  MODIFY `id_contato` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id_post` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
