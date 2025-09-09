# 📂 Organizador de Arquivos por Extensão

Um script simples em Python para organizar arquivos de uma pasta, movendo-os automaticamente para subpastas baseadas em suas extensões. Essa solução é ideal para quem precisa gerenciar diretórios com muitos arquivos misturados, economizando tempo e esforço.

---

## 🚀 Funcionalidades

- Identifica a extensão de cada arquivo em uma pasta.
- Move arquivos para subpastas nomeadas com base na extensão (ex.: `.txt` → pasta `txt`).
- Cria uma pasta especial para arquivos sem extensão.
- Evita duplicação e organiza os diretórios de forma eficiente.

---

## 📋 Requisitos

- Python 3.x instalado no sistema.
- Permissões de leitura, escrita e movimentação na pasta alvo.

---

## 🛠️ Como Usar

1. **Clone o Repositório**
   ```bash
   git clone https://github.com/seu-usuario/folder-organizer.git
   cd folder-organizer
   ```

2. **Edite o Caminho da Pasta**
   Abra o arquivo `organizador.py` e substitua o valor de `pasta_origem` pelo caminho da pasta que você deseja organizar:
   ```python
   pasta_origem = "/caminho/para/sua/pasta"
   ```

3. **Execute o Script**
   No terminal, execute o script:
   ```bash
   python organizador.py
   ```

4. **Resultado**
   - Os arquivos da pasta serão organizados em subpastas com base em suas extensões.
   - Arquivos sem extensão serão movidos para a pasta `sem_extensao`.

---

## 💻 Exemplo de Funcionamento

### Antes:
```plaintext
/arquivos
  documento1.txt
  foto1.jpg
  foto2.png
  script.py
  relatorio
```

### Depois:
```plaintext
/arquivos
  /txt
    documento1.txt
  /jpg
    foto1.jpg
  /png
    foto2.png
  /py
    script.py
  /sem_extensao
    relatorio
```

---

## 🛠️ Explicação do Projeto

**Nome do Projeto:** Organizador de Arquivos por Extensão  

### **Descrição Geral:**  
O Organizador de Arquivos por Extensão é um script em Python que automatiza a tarefa de organizar arquivos de uma pasta. Ele identifica a extensão de cada arquivo e os move para subpastas nomeadas de acordo com essas extensões. Caso um arquivo não tenha extensão, ele é movido para uma pasta especial chamada `sem_extensao`.

### **Objetivo:**  
Criar uma solução automatizada para organizar arquivos de forma eficiente, reduzindo o esforço manual e otimizando o gerenciamento de diretórios.

### **Etapas do Desenvolvimento:**
1. **Identificação do Problema:**  
   A necessidade de organizar arquivos acumulados em uma única pasta, tornando a navegação confusa.

2. **Definição da Solução:**  
   Planejar um script que identificasse os arquivos pelo tipo (baseado em extensão) e os movesse para pastas separadas.

3. **Implementação:**  
   - **Leitura de Arquivos:** Listar o conteúdo da pasta com `os.listdir()`.
   - **Identificação de Extensões:** Separar o nome do arquivo de sua extensão com `os.path.splitext()`.
   - **Criação de Subpastas:** Verificar se uma pasta correspondente à extensão existe e criá-la dinamicamente com `os.makedirs()`.
   - **Movimentação de Arquivos:** Usar `shutil.move()` para mover os arquivos para as subpastas corretas.

4. **Testes:**  
   Testar em uma pasta com arquivos variados (ex.: `.txt`, `.jpg`, `.pdf`) para garantir a organização correta.

5. **Refinamento:**  
   Adicionar uma condição para tratar arquivos sem extensão.

---

## 📂 Estrutura do Projeto

```plaintext
folder-organizer/
├── README.md       # Documentação do projeto
├── main.py  # Código principal do script
```
---

## 🤝 Contribuições

Contribuições são bem-vindas! Caso tenha ideias para melhorias, abra uma issue ou envie um pull request. 🚀