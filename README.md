# RELATÓRIO DE IMPLEMENTAÇÃO DE SERVIÇOS AWS

**Data:** 09 de Junho de 2026  
**Empresa:** Abstergo Industries  
**Responsável:** Conceição Lourenço

---

## Introdução

Este relatório apresenta a proposta de modernização da infraestrutura tecnológica da Abstergo Industries, uma indústria farmacêutica que busca reduzir custos operacionais, aumentar a escalabilidade de seus sistemas e otimizar suas cargas de trabalho por meio da computação em nuvem da AWS.

O objetivo do projeto é implementar serviços gerenciados que permitam maior eficiência operacional, redução da complexidade de administração da infraestrutura e aumento da disponibilidade das aplicações críticas da organização.

Após análise dos requisitos de negócio e das necessidades da plataforma digital da empresa, foram selecionados três serviços AWS estratégicos para sustentar uma futura farmácia virtual e demais sistemas corporativos.

---

## Descrição do Projeto

A implementação foi dividida em três etapas estratégicas.

### Etapa 1

#### Ferramenta

**Amazon ECS com AWS Fargate**

#### Foco

Modernização e execução de aplicações sem gerenciamento de servidores.

#### Caso de Uso

A plataforma de farmácia virtual da Abstergo Industries será desenvolvida utilizando Java e Quarkus, executando em containers Docker.

O AWS Fargate permitirá executar containers sem a necessidade de provisionar ou administrar servidores EC2, reduzindo custos operacionais e simplificando a gestão da infraestrutura.

As aplicações poderão ser escaladas automaticamente de acordo com a demanda dos usuários.

**Benefícios esperados:**

- Eliminação da administração de servidores.
- Pagamento apenas pelos recursos consumidos.
- Escalabilidade automática.
- Maior disponibilidade das aplicações.
- Redução dos custos operacionais da equipe de infraestrutura.

---

### Etapa 2

#### Ferramenta

**Amazon RDS for PostgreSQL**

#### Foco

Armazenamento seguro e gerenciado dos dados da plataforma.

#### Caso de Uso

O banco de dados PostgreSQL armazenará informações críticas da farmácia virtual, incluindo:

- Produtos e medicamentos.
- Estoque.
- Pedidos.
- Clientes.
- Receitas médicas.
- Histórico de compras.

Com o Amazon RDS, atividades administrativas como backup, monitoramento, atualizações e recuperação de desastres serão automatizadas pela AWS.

**Benefícios esperados:**

- Redução do esforço operacional.
- Backups automáticos.
- Alta disponibilidade com Multi-AZ.
- Segurança dos dados.
- Escalabilidade vertical simplificada.

---

### Etapa 3

#### Ferramenta

**Amazon ElastiCache for Redis**

#### Foco

Melhoria de desempenho e redução da carga do banco de dados.

#### Caso de Uso

O Redis será utilizado para armazenar informações frequentemente acessadas, como:

- Sessões de usuários.
- Carrinhos de compra.
- Catálogo de produtos mais acessados.
- Dados temporários da aplicação.

Ao reduzir consultas repetitivas ao banco PostgreSQL, a solução melhora significativamente o tempo de resposta da aplicação e reduz custos computacionais.

**Benefícios esperados:**

- Menor latência para os usuários.
- Redução da carga no banco de dados.
- Melhor experiência de navegação.
- Maior escalabilidade da plataforma.
- Redução dos custos relacionados ao processamento de consultas.

---

## Arquitetura Proposta

```text
Usuário
   |
CloudFront
   |
Frontend Angular (Amazon S3)
   |
Application Load Balancer
   |
Amazon ECS Fargate
   |
---------------------
|                   |
RDS PostgreSQL   Redis
```

---

## Resultados Esperados

| Indicador                                | Ganho Esperado                     |
| ---------------------------------------- | ---------------------------------- |
| Custos Operacionais                      | Redução de 20% a 35%               |
| Tempo de Administração da Infraestrutura | Redução de até 60%                 |
| Disponibilidade dos Sistemas             | Superior a 99,9%                   |
| Performance das Aplicações               | Melhoria de até 50%                |
| Escalabilidade                           | Ajuste automático conforme demanda |

---

## Conclusão

A implementação do Amazon ECS com AWS Fargate, Amazon RDS PostgreSQL e Amazon ElastiCache for Redis permitirá que a Abstergo Industries modernize sua infraestrutura tecnológica e estabeleça uma base sólida para a operação de sua farmácia virtual.

A adoção de serviços gerenciados reduzirá significativamente os custos operacionais associados à administração de servidores e bancos de dados, além de proporcionar maior escalabilidade, desempenho e disponibilidade para os sistemas corporativos.

A arquitetura proposta segue boas práticas de computação em nuvem, permitindo crescimento sustentável da plataforma e suporte às futuras demandas do negócio.

---

## Anexos

1. Arquitetura da solução AWS.
2. Estimativa de custos mensais.
3. Plano de implantação da plataforma.
4. Estratégia de backup e recuperação.
5. Plano de escalabilidade.
6. Relatório de otimização financeira.

---

## Assinatura do Responsável pelo Projeto

**Conceição Lourenço**
