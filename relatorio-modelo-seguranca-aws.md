# RELATÓRIO DE IMPLEMENTAÇÃO DE SERVIÇOS AWS - SEGURANÇA

**Data:** 10 de Junho de 2026
**Empresa:** Abstergo Industries
**Responsável:** Conceição Lourenço

---

## Introdução

Este relatório apresenta a proposta de implementação de serviços de segurança da Amazon Web Services (AWS) para a Abstergo Industries.

O objetivo do projeto é fortalecer a proteção da futura plataforma de farmácia virtual, reduzindo riscos relacionados a vazamento de dados, acessos não autorizados e ataques cibernéticos.

Após análise dos requisitos de segurança e conformidade, foram selecionados três serviços AWS capazes de elevar significativamente o nível de proteção da aplicação e dos dados corporativos.

---

## Descrição do Projeto

A implementação foi dividida em três etapas estratégicas.

### Etapa 1

#### Ferramenta

**AWS WAF (Web Application Firewall)**

#### Foco

Proteção da aplicação contra ataques web.

#### Caso de Uso

A plataforma de farmácia virtual estará exposta à internet e poderá sofrer tentativas de ataques automatizados ou exploração de vulnerabilidades.

O AWS WAF será integrado ao Application Load Balancer e ao CloudFront para inspecionar e filtrar requisições maliciosas antes que elas alcancem a aplicação.

**Benefícios esperados:**

- Proteção contra SQL Injection.
- Proteção contra Cross-Site Scripting (XSS).
- Bloqueio de tráfego malicioso.
- Redução do risco de indisponibilidade.
- Proteção contra bots automatizados.

---

### Etapa 2

#### Ferramenta

**AWS Secrets Manager**

#### Foco

Proteção de credenciais e informações sensíveis.

#### Caso de Uso

A aplicação utiliza diversas credenciais para acesso a bancos de dados, APIs externas e serviços internos.

O AWS Secrets Manager armazenará essas informações de forma criptografada, eliminando a necessidade de manter senhas em arquivos de configuração ou código-fonte.

**Benefícios esperados:**

- Armazenamento seguro de segredos.
- Criptografia automática.
- Rotação automática de credenciais.
- Redução do risco de vazamento de senhas.
- Conformidade com boas práticas de segurança.

---

### Etapa 3

#### Ferramenta

**AWS Identity and Access Management (IAM)**

#### Foco

Controle de acesso aos recursos da AWS.

#### Caso de Uso

Diversas equipes terão acesso ao ambiente cloud, incluindo desenvolvedores, administradores, analistas de suporte e equipe de segurança.

O AWS IAM permitirá definir permissões específicas para cada perfil, garantindo que cada usuário tenha acesso apenas aos recursos necessários para suas atividades.

**Benefícios esperados:**

- Aplicação do princípio do menor privilégio.
- Redução de acessos indevidos.
- Auditoria de permissões.
- Controle centralizado de identidades.
- Maior governança do ambiente AWS.

---

## Arquitetura de Segurança

```text
Internet
    |
AWS WAF
    |
CloudFront
    |
Application Load Balancer
    |
Amazon ECS Fargate
    |
-------------------------
|                       |
RDS PostgreSQL      Redis
    |
Secrets Manager
    |
IAM
```

---

## Resultados Esperados

| Indicador                      | Ganho Esperado |
| ------------------------------ | -------------- |
| Proteção contra ataques web    | Alta           |
| Segurança de credenciais       | Alta           |
| Controle de acesso             | Alta           |
| Conformidade e auditoria       | Alta           |
| Redução de riscos operacionais | Significativa  |

---

## Conclusão

A implementação do AWS WAF, AWS Secrets Manager e AWS IAM permitirá que a Abstergo Industries estabeleça uma camada robusta de segurança para sua plataforma digital.

Esses serviços protegerão a aplicação contra ataques externos, garantirão o armazenamento seguro de credenciais e proporcionarão controle rigoroso sobre os acessos aos recursos da AWS.

A adoção dessas medidas contribuirá diretamente para a proteção dos dados dos clientes, para a conformidade regulatória e para a continuidade segura das operações da empresa.

---

## Assinatura do Responsável pelo Projeto

**Conceição Lourenço**
