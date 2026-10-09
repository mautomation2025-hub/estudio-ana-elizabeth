# Manual permanente de operação do agente — Estúdio Ana Elizabeth

Estas instruções se aplicam a todo o repositório e a qualquer agente responsável pela manutenção e evolução do site.

## 1. Identidade do projeto

- Projeto: Estúdio Ana Elizabeth.
- Repositório: `mautomation2025-hub/estudio-ana-elizabeth`.
- Branch de produção: `main`.
- Branch de desenvolvimento: `develop`.
- Trabalhar exclusivamente neste repositório para as tarefas deste projeto.

## 2. Regra crítica

- NUNCA alterar diretamente a branch `main`.
- NUNCA fazer merge para `main` sem autorização explícita do usuário.
- Toda alteração deve começar na `develop` ou em uma branch de trabalho criada a partir dela.
- Antes de gravar arquivos, fazer commits ou abrir pull requests, confirmar o repositório e a branch de destino.
- Uma autorização para preparar ou revisar uma alteração não equivale a autorização para publicar em produção.

## 3. Fluxo obrigatório

Antes de alterar:

- Analisar o pedido e limitar o trabalho ao escopo autorizado.
- Localizar e ler os arquivos envolvidos.
- Verificar o impacto em SEO, LGPD, Analytics, integrações e conteúdo existente.
- Identificar os elementos protegidos e preservar o que não precisa mudar.

Depois de alterar:

- Revisar o HTML, CSS e JavaScript afetados, quando aplicável.
- Verificar se nenhuma informação existente foi removida por engano.
- Verificar os links, imagens e scripts afetados.
- Informar ao usuário quais arquivos foram alterados.
- Resumir exatamente o que mudou e quais verificações foram realizadas.
- Aguardar autorização explícita antes de qualquer publicação em produção.

## 4. Elementos protegidos

Não remover ou modificar sem necessidade e autorização do usuário:

- SEO.
- Metatags.
- Dados estruturados.
- Google Search Console.
- Arquivos de verificação Google.
- Google Analytics.
- Google Tag Manager, caso seja adicionado.
- Cookies e consentimento.
- LGPD.
- Política de privacidade.
- WhatsApp.
- Instagram.
- Informações comerciais.
- Preços.
- Horários.
- Modalidades.
- Endereço.
- CNPJ.
- Depoimentos.
- Identidade visual.
- Scripts de terceiros.
- Integrações externas.
- Configurações de domínio e scripts de rastreamento.

Caso uma mudança nesses elementos seja necessária e ainda não esteja autorizada, explicar a necessidade e obter autorização antes de modificá-los.

## 5. Segurança

- Não apagar arquivos sem autorização explícita.
- Não substituir grandes blocos de código quando uma alteração pequena resolver.
- Não inventar informações comerciais.
- Não alterar preços, horários, contatos ou regras do Estúdio sem instrução do usuário.
- Não adicionar bibliotecas ou serviços externos desnecessariamente.
- Nunca inserir chaves privadas, tokens, senhas ou credenciais no repositório.

## 6. Qualidade

- Priorizar alterações pequenas e reversíveis.
- Preservar a responsividade mobile.
- Preservar a acessibilidade.
- Preservar o desempenho.
- Evitar código duplicado.
- Manter compatibilidade com a estrutura atual do site.
- Sempre verificar links, imagens e scripts afetados.
- Executar verificações proporcionais à alteração e informar qualquer limitação de validação.

## 7. SEO e Google

Toda mudança relevante de conteúdo deve considerar:

- `title`.
- `meta description`.
- Headings (títulos e subtítulos).
- Conteúdo indexável.
- Links internos.
- Open Graph, quando aplicável.
- Canonical, quando existir.
- Dados estruturados, quando existirem.

Nunca apagar configurações SEO existentes sem autorização. Preservar também os identificadores, arquivos e mecanismos de verificação e medição do Google.

## 8. LGPD e privacidade

Qualquer recurso que envolva formulário, telefone, WhatsApp, cookies, Analytics, pixels, rastreamento ou dados pessoais deve ser analisado também sob a ótica de privacidade e consentimento.

- Verificar quais dados são coletados, para qual finalidade e com quais serviços são compartilhados.
- Verificar o impacto na política de privacidade e nos mecanismos de consentimento existentes.
- Não remover avisos, escolhas de consentimento ou proteções de privacidade sem necessidade e autorização.
- Não afirmar conformidade jurídica sem uma avaliação adequada.

## 9. Produção

A branch `main` representa o site em produção.

O agente pode preparar alterações, commits e pull requests dentro do escopo solicitado, mas nunca deve fazer merge para `main` sem o usuário dizer claramente que autoriza a publicação.

Qualquer publicação em produção, inclusive por um mecanismo que não envolva merge, exige autorização explícita. Até essa autorização, manter o trabalho na `develop` ou em uma branch criada a partir dela.

## 10. Comunicação

Sempre explicar as alterações em português simples, de forma compreensível para uma pessoa que não é desenvolvedora.

Antes de qualquer publicação, apresentar:

- O que foi alterado.
- Quais arquivos foram alterados.
- Possíveis riscos.
- Como validar.
- Se está pronto ou não para produção.

Ao concluir uma tarefa, informar o resultado, as verificações realizadas e se houve commit, pull request, merge ou publicação. Nunca apresentar uma publicação como autorizada por suposição.

## 11. Preview e aprovação visual obrigatória

Para toda alteração visual ou de conteúdo do site na `develop`, cumprir esta etapa depois dos testes e antes de preparar um Pull Request para produção:

1. Concluir os testes e registrar as alterações em um commit somente na `develop`.
2. Aguardar a publicação automática do Preview do Cloudflare. Não substituir essa etapa por deploy manual em produção.
3. Confirmar que a publicação foi concluída com sucesso e corresponde ao SHA completo do commit que acabou de ser criado. Não apresentar um Preview de uma versão anterior como se fosse a versão atual.
4. Fornecer obrigatoriamente ao usuário:
   - O link do Preview da branch `develop`: https://develop.estudio-ana-elizabeth.pages.dev/.
   - Quando disponível, o link específico do deploy correspondente àquela versão/commit.
   - O SHA curto do commit apresentado para aprovação.
5. Informar claramente, usando esta frase exata: **"Aguardando aprovação visual antes de criar Pull Request para produção."**
6. Parar e aguardar a aprovação visual explícita do usuário para a versão apresentada. Não criar Pull Request para `main` antes dessa aprovação.

Se o usuário solicitar ajustes, realizá-los na `develop`, testar novamente, criar um novo commit, aguardar e conferir o NOVO Preview e fornecer os novos links e SHA para uma nova aprovação visual. A aprovação de uma versão anterior não autoriza mudanças posteriores.

Se o Preview falhar, estiver pendente, não corresponder ao commit ou não puder ser confirmado, informar a situação ao usuário e não avançar para o Pull Request.

Somente depois de o usuário dizer explicitamente que a versão visual está aprovada, preparar o Pull Request para `main`. A aprovação visual permite preparar o Pull Request; não autoriza merge ou publicação em produção, que continuam exigindo autorização explícita separada.

Fluxo obrigatório: `develop` → testes e commit → Preview confirmado → aprovação visual explícita → Pull Request → autorização explícita de publicação → `main` → site oficial.
