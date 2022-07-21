# typescript-project-dio

Add something here later, please don't forget to
IMPORTANT COMMANDS:
npm init (then confirm all choices)

Dentro do tsconfig.json:
"target" -> o valor selecionado é a versão do ECMAScript pra qual o código escrito no .ts será compilado.

"lib" -> é a biblioteca de dados à ser usada quando o projeto .js/.ts é destinado ao back end

"outDir" -> o diretório onde o arquivo .js compilado a partir do .ts será salvo (o diretório especificado nesse repositório, por exemplo, é 'dist'). LEMBRAR SEMPRE de atualizar o HTML com o endereço novo do .js

"rootDir" -> o diretório raiz onde os arquivos .ts que serão compilados vão estar. Caso queria incluir supbastas, também adicionar NO FIM DO tsconfig.json a seguinte linha:
"include": ["src/**/*.ts"]
(mais literalmente, entre as duas chaves de fechamento {} no fim do arquivo (e sempre adicionar uma vírgula (,) depois da chave fechada anterior))
//se quiser, ainda pode compilar manualmente sem esbarrar em problemas com o outDir ou rootDir//

"noImplicitAny" -> checa caso algum dado no .ts/js é inferido como do tipo "any" (só lembrar dos números na soma com o botão no HTML). Se não quiser esse pente fino, só desabilitar ("noImplicitAny": false)

"strictNullChecks" -> checa caso algum dado no .ts/.js pode ser nulo (só lembrar do raio do botão no exercício de contas). Se não quiser esse pente fino, só desabilitar ("strictNullChecks": false)

"noUnusedLocals" & "noUnusedParameters" -> gera um erro sempre que um local(? função?) ou um parâmetro não é usado. Para desabilitar a mensagem de erro, atribuir "false" para qualquer uma das duas