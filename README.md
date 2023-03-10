# motor-shop_back-end

## Atualização das tabelas do banco de dados:
#### Adicione as seguintes váriaveis no .env
- **DATABASE_URL** -> link do banco de dados deve conter esse parâmetro no final da url: ```?sslmode=require```
- **NODE_ENV** -> deve ser 'production'
- **SECRET_KEY**
- 
#### Crie a migração:
```shell
yarn typeorm migration:generate src/migrations/updateExample -d src/data-source #updateExample é o nome da migração
```

#### Rode a migração:
```shell
yarn typeorm migration:run -d src/data-source
```

#### pronto caso o link de acesso ``` DATABASE_URL ``` esteja correto as migrações serão aplicadas.
