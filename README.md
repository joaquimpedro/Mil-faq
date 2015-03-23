# faq
Projeto para Mini-curso da Mil Tecnologia

O projeto contem 2 branchs -> master e autenticacao

# Master
Contém o sistema básico e a implementação dos desafios
# Autenticacao
Contem a implementação de login com o devise-token-auth
A autenticação funciona, porém está com ploblema de token. Usuário realiza o login mas não consegue realizar nenhuma requisição ao servidor por que não ta conseguindo guardar o token para "permanecer autenticado"


#Configuraçao

Deve rodar: bundle install no backend
Deve rodar: npm install e bower install no frontend

Criar o banco e executar as migrations: rake db:create e rake db:migrate
Gerar os dados iniciais da App: rake db:setup. Ira gerar Perfis e Status